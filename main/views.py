from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.urls import reverse
from django.contrib import messages
from django.core.mail import EmailMessage
from django.conf import settings
from django.views.generic import View
from rest_framework import viewsets

from .models import Contact
from .serializers import ContactSerializer

import json
import urllib.request
import urllib
# Create your views here.


def index(request):
    return render(request, "main/index.html")


def error_404_view(request, exception):
    return render(request, 'main/404.html')


def error_500_view(request):
    return render(request, 'main/500.html')


class ContactHandlerView(View):
    def post(self, request):

        if request.method == "POST":
            name = request.POST["fname"].title()
            email = request.POST["email"]
            body = request.POST["textarea"]

            recaptcha_response = request.POST["recaptchaResponse"]
            url = "https://www.google.com/recaptcha/api/siteverify"
            values = {
                'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                'response': recaptcha_response
            }

            data = urllib.parse.urlencode(values).encode()
            req = urllib.request.Request(url, data=data)
            response = urllib.request.urlopen(req)
            result = json.loads(response.read().decode())

            if result['success']:
                email_message = EmailMessage(
                    subject=f'Contact Form - {name}',
                    body=body,
                    from_email=settings.EMAIL_HOST_USER,
                    to=[email],
                    bcc=[settings.EMAIL_HOST_USER],
                    headers={'Reply-To': email}
                )
                email_message.send()

                contact_obj = Contact(
                    name=name,
                    email=email,
                    body=body
                )
                contact_obj.save()

                return JsonResponse({
                    'message': f"Thank you for reaching out, {name}!\nA copy of your response has been sent to:\n{email}.",
                    'type': "success",
                }, content_type="application/json", status=200)
            else:
                return JsonResponse({
                    'message': "Invalid reCAPTCHA, Please try again."
                }, content_type="application/json", status=200)

        return JsonResponse({
            'message': "There's nothing!"
        }, content_type="application/json", status=200)


class ContactView(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def get(self, request):
        model = Contact.objects.all()
        serializer = ContactSerializer(model)

        return HttpResponse(serializer.data)

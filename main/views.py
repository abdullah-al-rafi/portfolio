from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
from django.core.mail import EmailMessage
from django.conf import settings

from .models import Contact

import json
import urllib.request
import urllib
# Create your views here.


def index(request):
    return render(request, "main/index.html")


def contact_form(request):
    if request.method == "POST":
        name = request.POST["fname"].title()
        email = request.POST["email"]
        body = request.POST["textarea"]

        recaptcha_response = request.POST["g-recaptcha-response"]
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

            messages.success(
                request, f"Thank you for reaching out, {name}! Your response has been sent to your email.")
        else:
            messages.error(request, "Invalid reCAPTCHA, Please try again.")

        return HttpResponseRedirect(reverse("index"))
    return render(request, "main/index.html")

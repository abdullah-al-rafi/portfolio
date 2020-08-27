from rest_framework import serializers

from .models import Contact


class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=64)
    email = serializers.EmailField(max_length=254)
    body = serializers.CharField(max_length=9999)

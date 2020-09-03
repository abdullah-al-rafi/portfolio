from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField(max_length=254)
    body = models.TextField(max_length=9999)
    time_now = models.DateTimeField(auto_now_add=True)

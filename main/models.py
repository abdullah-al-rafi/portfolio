from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=64, blank=True)
    email = models.EmailField(max_length=254)
    body = models.TextField(max_length=9999)

    def __str__(self):
        return self.email

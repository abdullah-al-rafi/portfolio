from django.db import models

# Create your models here.


class subscribers(models.Model):
    email = models.EmailField(max_length=254)

    def __str__(self):
        return self.email

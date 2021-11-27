from django.db import models

# Create your models here.


class User(models.Model):
    first_name = models.CharField(max_length=64, blank=True)
    last_name = models.CharField(max_length=64, blank=True)
    username = models.CharField(max_length=64, blank=True)
    email = models.EmailField(unique=True, blank=True)

from django.db import models

# Create your models here.


class BaseUsers(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(unique=True, blank=True)

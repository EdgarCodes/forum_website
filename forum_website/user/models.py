from django.db import models

# Create your models here.
class User(models.Model):
    id = models.CharField(primary_key=True, unique=True, max_length=25)
    username = models.CharField(max_length=25, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    password = models.CharField(max_length=100)

from django.db import models
import uuid

def get_unique_id():
    while True:
        id = uuid.uuid1()
        if User.objects.filter(id=id).count == 0:
            break
    
    return id

# Create your models here.
class User(models.Model):
    id = models.CharField(primary_key=True, unique=True, max_length=36)
    username = models.CharField(max_length=25, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    password = models.CharField(max_length=100)
    creation_date = models.DateField(auto_now=True)


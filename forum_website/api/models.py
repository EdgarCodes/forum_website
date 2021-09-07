from django.db import models
from django.contrib.auth.hashers import make_password, check_password
import uuid
from decouple import config


def get_unique_id():
    # while True:
    #     id = uuid.uuid1()
    #     if User.objects.filter(id=id).count == 0:
    #         break
    id = uuid.uuid1()
    
    return id

def encrypt_password(password):
    new_password = make_password(password=password)
    print(check_password(password=password, encoded=new_password))

    return new_password

gender_choices = (
    ("1", "male"),
    ("2", "female")
)

title_choices = (
    ("1", "user"),
    ("2", "admin")
)
# Create your models here.
class User(models.Model):
    id = models.CharField(primary_key=True, unique=True, max_length=36)
    username = models.CharField(max_length=25, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    password = models.CharField(max_length=100)
    creation_date = models.DateField(auto_now=True)
    gender = models.CharField(max_length=7, choices=gender_choices, default= 'male')
    title =  models.CharField(max_length=10, choices=title_choices, default= 'admin')

class Forum(models.Model):
    forum_id = models.CharField(primary_key=True, unique=True, max_length=36)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    posted_at = models.DateField(auto_now=True)
    post_title = models.CharField(max_length=150)
    post = models.TextField()

class Comment(models.Model):
    comment_id = models.CharField(primary_key=True, unique=True, max_length=36)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    forum_id = models.ForeignKey(Forum, on_delete=models.CASCADE)
    post = models.TextField()
    posted_at = models.DateField(auto_now=True)


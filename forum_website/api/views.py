from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializaers import UserSerializaer

class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializaer
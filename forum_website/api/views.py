from django.shortcuts import render
from rest_framework import generics
from .models import User, Forum, Comment
from .serializaers import UserSerializaer, ForumSerializaer, CommentSerializaer

class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializaer

class ForumView(generics.ListCreateAPIView):
    queryset = Forum.objects.all()
    serializer_class = ForumSerializaer

class CommentView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializaer
from django.urls import path
from .views import UserView, CommentView, ForumView

urlpatterns = [
    path('users/', UserView.as_view()),
    path('forums/', ForumView.as_view()),
    path('comments/', CommentView.as_view()),
]
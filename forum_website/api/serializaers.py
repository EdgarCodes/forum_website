from rest_framework import serializers
from .models import User, Forum, Comment, get_unique_id, encrypt_password

class UserSerializaer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'creation_date', 'password', 'gender', 'title')
    
    def create(self, validated_data):
        validated_data['id'] = get_unique_id()
        validated_data["password"] = encrypt_password(validated_data["password"])
        return super().create(validated_data)

class ForumSerializaer(serializers.ModelSerializer):
    class Meta:
        model = Forum
        fields = ('forum_id', 'user_id', 'posted_at', 'post_title', 'post')


class CommentSerializaer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('comment_id', 'user_id', 'forum_id', 'post', 'posted_at')


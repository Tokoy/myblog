# -*- coding: utf-8 -*-
from rest_framework import routers, serializers, viewsets
from myblog.models import Article,Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('cname','content', 'email','pub_date','image')


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('name','title', 'content','pub_date','update_time')

# ViewSets define the view behavior.
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = UserSerializer
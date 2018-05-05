# -*- coding: utf-8 -*-
from django.shortcuts import render
from djng.views.crud import NgCRUDView
from django.http import HttpResponse
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import routers, serializers, viewsets

# Create your views here.
class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def index(request, format=None):
    return render(request, 'index.html')
	
def article(request,format=None):
	return render(request, 'blog.html')
	
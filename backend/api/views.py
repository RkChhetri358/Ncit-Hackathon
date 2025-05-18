from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view


from .serializers import user_serializer_signup
from .models import User
# Create your views here.

@api_view(['POST'])
def user_signup(request):
    if request.method == 'POST':
        serializer = user_serializer_signup(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status = 201)
        return JsonResponse(serializer.errors,status = 400)
        
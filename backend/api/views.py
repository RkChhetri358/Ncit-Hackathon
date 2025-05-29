from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login

from .serializers import UserSignupSerializer
from .models import User

@api_view(['POST'])
def user_signup(request):
    serializer = UserSignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, username=email, password=password)
    if user is not None:
        login(request, user)
        return Response({"message": "Login successful", "first_name": user.first_name}, status=200)
    else:
        return Response({"error": "Invalid credentials"}, status=401)



@api_view(['POST'])
def addprofilepic(request):
    email = request.data.get('email')
    user = User.objects.filter(email=email).first()
    if user is not None:
        data = request.data.copy()
        data['user'] = user.id
        serializer = UserPhotoSignupSerializer(user, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    return Response({'error': 'User not found'}, status=404)

@api_view(['POST'])
def complaints(request):
    serializer = ComplaintsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

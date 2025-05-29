from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email','first_name','last_name', 'password', 'phone_number', 'address','picture']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSignupSerializer, self).create(validated_data)
    
    
    
    

class UserPhotoSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['picture']  # You may need to include 'user' if it's a separate profile model


# class ComplaintsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Complaints
#         fields = ['Complaint_name', 'No_of_Votes', 'first_name', 'last_name', 'email', 'phone_number', 'address', 'picture']

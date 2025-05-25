from rest_framework import serializers
from .models import User

class user_serializer_signup(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    password2 = serializers.CharField(write_only = True)
    
    
    #maile utk sanga raakheko password ho yo maathi ko

    class Meta:
        model = User
        fields = ['address','phone_number','email','username','password','password2']

    def validate(self, attrs):
        password = attrs.get("password",'')
        password2 = attrs.get("password2",'')
 
        if password != password2:
            raise serializers.ValidationError("Password do not match")
        return attrs
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('password2')
        user = User(**validated_data)
        user.set_password(password)
        try:
            user.save()
        except Exception as e:
            print("Error saving user:", e)
        return user

    
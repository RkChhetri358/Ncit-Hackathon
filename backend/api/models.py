from django.db import models
from django.contrib.auth.models import AbstractUser  

# Abstract user base class is the django provide class



class User(AbstractUser):
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=30)

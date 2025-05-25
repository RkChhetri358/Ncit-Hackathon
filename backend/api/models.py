from django.db import models
from django.contrib.auth.models import AbstractUser  

# Abstract user base class is the django provide class



class User(AbstractUser):
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=30)



# Create your models here.
# class every_events(models.Model):
#     event_name = models.CharField(max_length=255)
#     organizers_name = models.CharField(max_length=255)
#     venue = models.CharField(max_length=255)
#     email = models.EmailField(max_length=255)
#     user_booked_date = models.DateTimeField(auto_now_add=True)
#     booked_date = models.DateTimeField()
#     ending_date = models.DateTimeField()
#     no_of_people = models.IntegerField()
#     phone_number = models.CharField(max_length=255)
#     status = models.CharField(max_length=9,default='PENDING')
#     venuePhoto = models.CharField(max_length=255)

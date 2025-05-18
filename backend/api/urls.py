from django.urls import path,include

from . import views

urlpatterns = [ 
    path('signup/',views.user_signup,name="signup")
]
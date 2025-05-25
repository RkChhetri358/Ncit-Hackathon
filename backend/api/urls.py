from django.urls import path,include

from . import views
from .views import user_signup

#views lai import gareko cha 


urlpatterns = [ 
    path('signup/',user_signup,name="signup"),
  
    
]
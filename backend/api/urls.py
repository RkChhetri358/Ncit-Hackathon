from django.urls import path,include

from . import views


#views lai import gareko cha 


urlpatterns = [ 
    path('signup/',views.user_signup,name="signup"),
  
    
]
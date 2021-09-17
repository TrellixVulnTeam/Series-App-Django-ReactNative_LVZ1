from django.urls import path, include
from rest_framework import routers
from User.views import CustomUserViewSet
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('auth/', obtain_auth_token),
    path('singup/', CustomUserViewSet.as_view(), name='singup')
]

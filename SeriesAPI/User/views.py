from django.shortcuts import render

#utils
from django.shortcuts import get_object_or_404
from User.models import CustomUser
from User.serializer import CustomUserSerializer
from rest_framework import viewsets, generics, mixins
from rest_framework.renderers import JSONRenderer

class CustomUserViewSet(generics.GenericAPIView, mixins.CreateModelMixin, mixins.ListModelMixin):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    renderer_classes = [JSONRenderer]

    def post(self, request):
        return self.create(request)


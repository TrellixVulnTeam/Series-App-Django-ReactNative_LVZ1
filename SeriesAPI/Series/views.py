from django.shortcuts import get_object_or_404

from rest_framework.views import APIView

from rest_framework.response import Response
from Series import serializer, models

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework.authtoken.models import Token


#para a funcao de model funcionar
#é necessario passa-la nos kwargs
class Request_Handler():
    def __init__(self, **kwargs):
        self.user__related_names_and_models = kwargs['models']

    def Get_user_by_token(self, request):
        user = Token.objects.get(key=self.request.auth).user
        return user

    def ListMode(self, request):
        userobj_models_list = []

        for model in self.user__related_names_and_models:
            userobj_models_list.append(self.Get_user_by_token(request).model['related_name'].all())

        return userobj_models_list

    def RetrieveMode(self, related_name, pk, request):
        return self.Get_user_by_token(request).related_name.get(pk=pk)

class SeriesAPIView(APIView, Request_Handler):

    def post(self, request):
        
from django.http.response import JsonResponse
from rest_framework.renderers import JSONRenderer
from django.shortcuts import get_object_or_404
from rest_framework import serializers

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

    def Get_user_by_token_or_obj_error(self, request):
        user = Token.objects.get(key=request.auth).user
        return user

    def ListMode(self, request):
        userobj_models_list = []

        for model in self.user__related_names_and_models:
            userobj_models_list.append(self.Get_user_by_token(request).model['related_name'].all())

        return userobj_models_list

    def RetrieveMode(self, related_name, pk, request):
        return self.Get_user_by_token(request).related_name.get(pk=pk)

class SeriesAPIView(APIView, Request_Handler):
    authentication_classes = [TokenAuthentication]
    renderer_classes = [JSONRenderer]

    def post(self, request):
        series_serialized = serializer.SeriesSerializer(data=request.data)

        if series_serialized.is_valid():
            instance = series_serialized.save(commit=False)
            instance.user_key = self.Get_user_by_token_or_obj_error(request)
            instance.save()
            return Response({'Success': 'obj created with success'})
        else:
            return Response(series_serialized.error_messages)

    def get(self, request):
        try:
            user_instance = self.Get_user_by_token_or_obj_error(request)
        except:
            return Response({"error":"auth not provided"})

        list_user_obj = user_instance.series.all()

        serialized_list_user_obj = serializer.SeriesSerializer(list_user_obj)
        print(serialized_list_user_obj.data, "aqui")

        return Response(serialized_list_user_obj.data)

class SeriesAPIViewDetail(APIView, Request_Handler):
    authentication_classes = [TokenAuthentication]
    renderer_classes = [JSONRenderer]

    def delete(self, request, pk):
        user_instance = self.Get_user_by_token_or_obj_error(request)
        try:
            model_instance = user_instance.series.get(pk=pk)
        except:
            Response({"error":"could not find this obj from user"})

        model_instance.delete()

    def put(self, request, pk):
        user_instance = self.Get_user_by_token_or_obj_error(request)

        try:
            model_instance = user_instance.series.objects.get(pk=pk)
        except:
            Response({"error":"could not find this obj from user"})

        serialized_update_request = serializer.SeriesSerializer(model_instance, data=request.data)

        if serialized_update_request.is_valid():
            instance = serialized_update_request.save(commit=False)
            instance.user_key = user_instance
            instance.save()
            return Response({"success": "the obj was created with success"})
        else:
            return Response(serialized_update_request.error_messages)

    def get(self, request, pk):
        user_instance = self.Get_user_by_token_or_obj_error(request)

        try:
            model_instance = user_instance.series.objects.get(pk=pk)
        except:
            Response({"error":"could not find this obj from user"})

        serialized_model_instance = serializer.SeriesSerializer(model_instance)

        return Response(serialized_model_instance.data)
    


        




from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import response
from rest_framework.views import APIView
from rest_framework.response import Response
from Series import serializer, models
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

class SeriesAPIView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        Series_serializer = serializer.SeriesSerializer(data=request.data)

        if Series_serializer.is_valid():
            Series_serializer.save()
            return response({'success': 'the series was created with success'})

        else:
            return response({'error': 'not able to create a proper series[are you sending correctly?]'})

    def get_user_by_token(self, request):
        user = Token.objects.get(key=request.auth).user
        return user

    def get_serie_detail(self, request, pk):
        try:
            Serie = get_object_or_404(models.Series, pk=pk)
        except:
            response({'error': 'the id do not exists on the database'})

        if self.get_user_by_token(request) == Serie.user_key:
            serie_serializer = serializer.SeriesSerializer(Serie)
            return response(serie_serializer)

        else:
            response({'error': 'user do not have a series with this id'})

    def get_serie_list(self, request):
        Series = models.Series.objects.all(user_key=self.get_user_by_token(request))
        Series_serializer = serializer.SeriesSerializer(Series)
        response(Series_serializer)

    def put(self, request, pk):
        Serie = get_object_or_404(models.Series, pk=pk, user_key=self.get_user_by_token(request))

        Serie_serializer = serializer.SeriesSerializer(Serie, data=request.data)

        if Serie_serializer.is_valid():
            Serie_serializer.save()
            return response({'success': 'object updated with success'})

        else:
            return response(Serie_serializer.error_messages)

    def delete(self, request, pk):
        Serie = get_object_or_404(models.Series, pk=pk, user_key=self.get_user_by_token(request))
        Serie.delete()
        return response({'success': 'object updated with success'})
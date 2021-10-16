from django.db.models import query
from django.http import multipartparser
from rest_framework import generics, status
from rest_framework.response import Response
from Series import models, serializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser
from . import forms

class GenericSeriesAPIView(generics.GenericAPIView):
    serializer_class = serializer.SeriesSerializer
    queryset = models.Series.objects.all()
    authentication_classes = [TokenAuthentication]
    renderer_classes = [JSONRenderer]
    parser_classes = [MultiPartParser, JSONParser, FormParser]

    def list(self, request, **kwargs):
        #using get_queryset
        if kwargs['page1'] == None or kwargs['page2'] == None:
            try:
                query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user)
            except:
                return Response({"error":"token was not passed [are you sure that you re authenticated?]"}, status=status.HTTP_400_BAD_REQUEST)
        elif kwargs['page1'] > -1 and kwargs['page2'] > -1:
            try:
                query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user)[kwargs['page1']:kwargs['page2']]
            except:
                return Response({"error":"token was not passed [are you sure that you re authenticated?]"}, status=status.HTTP_400_BAD_REQUEST)
        query_set_serialized = serializer.SeriesSerializer(query_set_filter, many=True)

        return Response(query_set_serialized.data)

    def create(self, request):
        get_model_from_request_data = forms.SeriesForm(data=request.data)
        if get_model_from_request_data.is_valid():
            try:
                get_model_from_request_data = get_model_from_request_data.save(commit=False)
                get_model_from_request_data.user_key = Token.objects.get(key=request.auth).user
                get_model_from_request_data.img_series.save(request.data['img_series'].name, request.data['img_series'])
                get_model_from_request_data.save()
            except:
                return Response({"error":"token was not passed [are you sure that you re authenticated?]"}, status=status.HTTP_400_BAD_REQUEST)

            serialized_data = serializer.SeriesSerializer(instance=get_model_from_request_data)

            return Response(serialized_data.data)
        else:
            return Response({"error":"model obj was not created [did you send the correct data type?]"}, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk):
        try:
            query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user).get(pk=pk)
        except:
            return Response({"error":"token was not passed [are you sure that you re authenticated?] or incorrect pk"}, status=status.HTTP_400_BAD_REQUEST)
        
        query_set_serialized = serializer.SeriesSerializer(query_set_filter)

        return Response(query_set_serialized.data)

    def destroy(self, request, pk):
        try:
            query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user).get(pk=pk)
        except:
            return Response({"error":"token was not passed [are you sure that you re authenticated?] or incorrect pk"}, status=status.HTTP_400_BAD_REQUEST)

        query_set_filter.delete()

        return Response({"success":"the obj was deleted with success"})

    def update(self, request, pk):
        try:
            query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user).get(pk=pk)
        except:
            return Response({"error":"token was not passed [are you sure that you re authenticated?] or incorrect pk"}, status=status.HTTP_400_BAD_REQUEST)

        updated_model = serializer.SeriesSerializer(query_set_filter, data=request.data)

        if updated_model.is_valid():
            updated_model.save()
            return Response({"success":"obj updated with success"})
        else:
            return Response({"error":"model obj was not created [did you send the correct data type?]"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk=None, n__series=None, x__series=None):
        if pk == None:
            if n__series == None or x__series == None:
                return self.list(request, page1=None, page2=None)
            else:
                return self.list(request , page1=n__series, page2=x__series)
        else:
            return self.retrieve(request, pk)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)
        

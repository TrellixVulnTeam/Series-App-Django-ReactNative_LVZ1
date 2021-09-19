from rest_framework import generics
from rest_framework.response import Response
from Series import models, serializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.renderers import JSONRenderer

class GenericSeriesAPIView(generics.GenericAPIView):
    serializer_class = serializer.SeriesSerializer
    queryset = models.Series.objects.all()
    authentication_classes = [TokenAuthentication]
    renderer_classes = [JSONRenderer]

    def list(self, request, **kwargs):
        #using get_queryset
        if kwargs['page1'] == None or kwargs['page2'] == None:
            try:
                query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user)
            except:
                return Response({"error":"token was not passed [are you sure that you re authenticated?]"})
        elif kwargs['page1'] > -1 and kwargs['page2'] > -1:
            try:
                query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user)[kwargs['page1']:kwargs['page2']]
            except:
                return Response({"error":"token was not passed [are you sure that you re authenticated?]"})
        query_set_serialized = serializer.SeriesSerializer(query_set_filter, many=True)

        return Response(query_set_serialized.data)

    def create(self, request):
        get_model_from_request_data = serializer.SeriesSerializer(data=request.data)

        if get_model_from_request_data.is_valid():
            get_instanceModel = get_model_from_request_data.save(commit=False)
            try:
                get_instanceModel.user_key = Token.objects.get(key=request.auth).user
            except:
                return Response({"error":"token was not passed [are you sure that you re authenticated?]"})
            get_instanceModel.save()

            return Response({"success":"model obj created with success"})
        else:
            return Response({"error":"model obj was not created [did you send the correct data type?]"})

    def retrieve(self, request, pk):
        try:
            query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user).get(pk=pk)
        except:
            return Response({"error":"token was not passed [are you sure that you re authenticated?] or incorrect pk"})
        
        query_set_serialized = serializer.SeriesSerializer(query_set_filter)

        return Response(query_set_serialized.data)

    def destroy(self, request, pk):
        try:
            query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user).get(pk=pk)
        except:
            return Response({"error":"token was not passed [are you sure that you re authenticated?] or incorrect pk"})

        query_set_filter.delete

        return Response({"success":"the obj was deleted with success"})

    def update(self, request, pk):
        try:
            query_set_filter = self.get_queryset().filter(user_key=Token.objects.get(key=request.auth).user).get(pk=pk)
        except:
            return Response({"error":"token was not passed [are you sure that you re authenticated?] or incorrect pk"})

        updated_model = serializer.SeriesSerializer(query_set_filter, data=request.data)

        if updated_model.is_valid():
            updated_model.save()
            return Response({"success":"obj updated with success"})
        else:
            return Response({"error":"model obj was not created [did you send the correct data type?]"})

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
        

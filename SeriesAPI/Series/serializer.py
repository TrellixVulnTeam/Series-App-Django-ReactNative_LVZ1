from rest_framework import serializers
from Series.models import Series, Genres

class GenresSerializer(serializers.ModelSerializer):

    class Meta():
        model = Genres
        fields = ['title']

class SeriesSerializer(serializers.ModelSerializer):
    genres = GenresSerializer(many=True, read_only=True)

    class Meta():
        model = Series
        fields = ['title', 'note', 'description', 'img_series']
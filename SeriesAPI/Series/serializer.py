from rest_framework import serializers
from Series.models import Series, Genres

class GenresSerializer(serializers.ModelSerializer):

    class Meta():
        model = Genres
        fields = ['title']

class SeriesSerializer(serializers.ModelSerializer):
    genres = GenresSerializer(many=True, required=False)

    class Meta():
        model = Series
        fields = ['id', 'title', 'note', 'description', 'img_series', 'genres']
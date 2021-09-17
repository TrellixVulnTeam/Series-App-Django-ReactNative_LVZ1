from django.db import models
from django.db.models.fields.related import ForeignKey
from User.models import CustomUser

class Series(models.Model):
    user_key = models.ForeignKey(CustomUser, related_name='series', on_delete=models.CASCADE)

    title = models.CharField(max_length=100)
    note = models.IntegerField()
    description = models.TextField()
    img_series = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title

class Genres(models.Model):
    serie_key = models.ForeignKey(Series, related_name='genres', on_delete=models.CASCADE)

    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title



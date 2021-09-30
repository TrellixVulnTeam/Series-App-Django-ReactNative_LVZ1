from django import forms
from . import models

class SeriesForm(forms.ModelForm):

    class Meta:
        model = models.Series
        fields = ['id', 'title', 'note', 'description', 'img_series']
        extra_kwargs = {'img_series':{"required":False, "allow_null":True}}
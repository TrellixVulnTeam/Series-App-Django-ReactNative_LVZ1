from django.urls import path, include
from Series import views

urlpatterns = [
    path('Series/', views.SeriesAPIView.as_view(), name='series')
]
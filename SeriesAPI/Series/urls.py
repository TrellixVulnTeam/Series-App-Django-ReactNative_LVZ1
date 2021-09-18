from django.urls import path, include
from Series import views

urlpatterns = [
    path('series/', views.SeriesAPIView.as_view(), name='series'),
    path('series/<int:pk>/', views.SeriesAPIViewDetail.as_view(), name='series_detail')
]
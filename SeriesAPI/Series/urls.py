from django.urls import path, include
from Series import views

urlpatterns = [
    path('series/', views.GenericSeriesAPIView.as_view(), name='series'),
    path('series/detail=<int:pk>', views.GenericSeriesAPIView.as_view(), name='detail'),
    path('series/pagination/<int:n__series>=<int:x__series>', views.GenericSeriesAPIView.as_view(), name='pages')
]
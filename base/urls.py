from django.urls import path
from . import views

urlpatterns = [
    path('', views.lobby),
    path('room/', views.room),

    path('get_token/', views.getToken),  # This endpoint generates an Agora token for a given channel and user ID.
]
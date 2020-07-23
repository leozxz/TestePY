from django.urls import path
from . import views

urlpatterns = [
    path('', views.html, name='home'),
    path('edit.html', views.edit),
    path('cad.html', views.cad),
]
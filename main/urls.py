from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about/', views.about, name='about'),
    path('contacts/', views.ask_question, name='contacts'),
    path('success/', views.success, name='success'),
]
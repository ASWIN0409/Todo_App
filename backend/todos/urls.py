from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.get_todos),
    path('todos/add/', views.create_todo),
    path('todos/remove/<int:pk>/', views.delete_todo),
    path('todos/edit/<int:pk>/', views.update_todo),
    path('todos/toggle/<int:pk>/', views.toggle_todo),
]
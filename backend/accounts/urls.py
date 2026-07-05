from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_auth'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
"""
URL configuration for web_grow project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from .views import index


router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('api/jobtest/urls', include(router.urls)),
    path('api-auth/', include('users.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth/', include('drf_social_oauth2.urls',namespace='drf')),
    path('oauth/', include('social_django.urls')),
]

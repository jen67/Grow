from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login
from django.shortcuts import render, redirect
from rest_framework import viewsets
from .serializers import UserProfileSerializer, UserStatisticsSerializer, UserPreferencesSerializer, UserSubscriptionSerializer, UserActivityLogSerializer, UserFeedbackSerializer
from .models import UserProfile, UserStatistics, UserPreferences, UserSubscription, UserActivityLog, UserFeedback


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserStatisticsViewSet(viewsets.ModelViewSet):
    queryset = UserStatistics.objects.all()
    serializer_class = UserStatisticsSerializer

class UserPreferencesViewSet(viewsets.ModelViewSet):
    queryset = UserPreferences.objects.all()
    serializer_class = UserPreferencesSerializer

class UserSubscriptionViewSet(viewsets.ModelViewSet):
    queryset = UserSubscription.objects.all()
    serializer_class = UserSubscriptionSerializer

class UserActivityLogViewSet(viewsets.ModelViewSet):
    queryset = UserActivityLog.objects.all()
    serializer_class = UserActivityLogSerializer

class UserFeedbackViewSet(viewsets.ModelViewSet):
    queryset = UserFeedback.objects.all()
    serializer_class = UserFeedbackSerializer

def SignUp(request):
    """register new users"""
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # Log the user in after signup
            return redirect('index')  # Redirect to the homepage after signup
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def UserLogin(request):
    """user should be able to login."""
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            # Redirect the user to the appropriate page after login
            return redirect('index')  # Change 'index' to the name of your homepage URL pattern
    else:
        form = AuthenticationForm(request)
    return render(request, 'login.html', {'form': form})  # Change 'login.html' to your login template name

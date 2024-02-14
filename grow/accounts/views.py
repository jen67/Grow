from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login
import traceback
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
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
            print(request.user.is_authenticated)
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
            print(request.user.is_authenticated)
            # Redirect the user to the appropriate page after login
            return redirect('accounts:userprofile', username=request.user.username) # Change 'index' to the name of your homepage URL pattern
    else:
        form = AuthenticationForm(request)
    return render(request, 'login.html', {'form': form})  # Change 'login.html' to your login template name

def user_profile(request, username):
    user = get_object_or_404(User, username=username)
    profile = get_object_or_404(UserProfile, user=user)
    return render(request, 'userprofile.html', {'profile': profile})

def dashboard(request):
    # Your logic to determine whether to redirect or not
    try:
        if not request.user.is_authenticated:  # For example, if user is not authenticated
            return redirect('accounts:login')  # Redirect to the login page
        else:
            return render(request, 'dash.html')
    except Exception as e:
        traceback.print_exc()
        return HttpResponseServerError()

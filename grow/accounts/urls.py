"""

To make view.py accessible through url,
we define a url pattern that maps to the view.py.

"""


from django.urls import path
from . import views


app_name = 'accounts'

urlpatterns = [
    path('signup/', views.SignUp, name='signup'),
    path('login/', views.UserLogin, name='login'),
    path('userprofile/<str:username>/', views.user_profile, name='userprofile'),
    path('dashboard/', views.dashboard, name='dashboard'),
]

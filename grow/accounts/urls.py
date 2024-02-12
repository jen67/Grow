"""

To make view.py accessible through url,
we define a url pattern that maps to the view.py.

"""


from django.urls import path
from . import views


urlpatterns = [
    path('signup/', views.SignUp, name='signup'),
    path('login/', views.UserLogin, name='login'),
]

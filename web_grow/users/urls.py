from django.urls import path
from .views import CreateAccount, AllUsers, CurrentUser


app_name = 'users'

urlpatterns = [
    path('signup/', CreateAccount.as_view(), name="create_user"),
    path('all/', AllUsers.as_view(), name="all"),
    path('currentUser/', CurrentUser.as_view(), name="current"),
]

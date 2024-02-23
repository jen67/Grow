from django.urls import path
from .views import CreateAccount, AllUsers, CurrentUser, UserLogin, UserLogout


app_name = 'users'

urlpatterns = [
    path('signup/', CreateAccount.as_view(), name="create_user"),
    path('login/', UserLogin.as_view(), name="user_login"),
    path('logout/', UserLogout.as_view(), name="user_logout"),
    path('all/', AllUsers.as_view(), name="all"),
    path('currentUser/', CurrentUser.as_view(), name="current"),
]

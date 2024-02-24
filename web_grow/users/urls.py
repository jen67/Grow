from django.urls import path
from .views import CreateAccount, AllUsers, CurrentUser, UserLogin, UserLogout


urlpatterns = [
    path('api/signup/', CreateAccount.as_view(), name="create_user"),
    path('api/login/', UserLogin.as_view(), name="user_login"),
    path('api/logout/', UserLogout.as_view(), name="user_logout"),
    path('api/all/', AllUsers.as_view(), name="all"),
    path('api/currentUser/', CurrentUser.as_view(), name="current"),
]

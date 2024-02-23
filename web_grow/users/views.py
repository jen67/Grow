from django.contrib.auth import authenticate
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.response import Response  
from .serializers import RegistrationSerializer, UsersSerializer
from rest_framework import permissions
from .models import CustomUser
from rest_framework.authtoken.models import Token
import requests

# Create your views here.

class CreateAccount(APIView):
    """ signup new user """
    permission_classes = [permissions.AllowAny]

    def post(self,request):
        register = RegistrationSerializer(data=request.data)
        if register.is_valid():
            new_user = register.save()
            if new_user:
                r = requests.post('http://127.0.0.1:8000/api-auth/token', data = {
                    'username':new_user.email,
                    'password':request.data['password'],
                    'client_id':'Your Client ID',
                    'client_secret':'Your Client Secret',
                    'grant_type':'password'
                })
                return Response(r.json(), status=status.HTTP_201_CREATED)
        return Response(register.errors,status=status.HTTP_400_BAD_REQUEST)


class AllUsers(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerializer


class CurrentUser(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request):
        serializer = UsersSerializer(self.request.user)
        return Response(serializer.data)


class UserLogin(APIView):
    """ Custom API view for user login. """
    def post(self, request, *args, **kwargs):
        # Obtain the username and password from the request data
        email = request.data.get('email')
        password = request.data.get('password')
        # Perform authentication
        user = authenticate(request, email=email, password=password)
        if user is not None:
            # User is authenticated, generate or retrieve the token
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            # Authentication failed
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class UserLogout(APIView):
    """ Custom API view for user logout. """
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request, *args, **kwargs):
        # Retrieve the user's authentication token
        token = request.auth
        if token:
            # Delete the user's authentication token
            token.delete()
            return Response({'message': 'User logged out successfully.'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'User is not authenticated.'}, status=status.HTTP_400_BAD_REQUEST)

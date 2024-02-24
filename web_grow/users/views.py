from django.contrib.sites.shortcuts import get_current_site
from rest_framework.authentication import TokenAuthentication
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.response import Response  
from .serializers import RegistrationSerializer, UsersSerializer
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated
from .models import CustomUser
from rest_framework.authtoken.models import Token
import requests

# Create your views here.

class CreateAccount(APIView):
    """ signup new user """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        register = RegistrationSerializer(data=request.data)
        if register.is_valid():
            new_user = register.save()
            if new_user:
                # Generate a verification token for the new user
                token_generator = default_token_generator
                uid = urlsafe_base64_encode(force_bytes(new_user.pk))
                token = token_generator.make_token(new_user)

                # Send an email with the verification link
                current_site = get_current_site(request)
                mail_subject = 'Activate your account'
                message = render_to_string('activation_email.html', {
                     'user': new_user,
                     'domain': current_site.domain,
                     'uid': uid,
                     'token': token,
                })
                to_email = new_user.email
                email = EmailMessage(
                    mail_subject, message, to=[to_email]
                )
                email.send()

                # Response indicating successful registration
                return Response({'message': 'Please check your email to activate your account.'}, status=status.HTTP_201_CREATED)
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

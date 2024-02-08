from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TestSerializer, QuestionSerializer, SubmissionSerializer
from .models import Test, Question, Submission


# Create your views here.

class TestView(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

class QuestionView(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class SubmissionView(viewsets.ModelViewSet):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

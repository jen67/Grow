from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TestSerializer, QuestionSerializer, SubmissionSerializer
from .models import Test, Question, Submission
from .forms import SubmissionForm
from django.db.models import Sum


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

def test_list(request):
    """
    Displays a list of available tests to be taken.
    Allows users to navigate to their desired test.
    """
    tests = Test.objects.all()
    return render(request, "jobtest/test_list.html", {'tests': tests})

def test_detail(request, test_id):
    """
    Displays the details of the specified test.
    Shows all questions associated with the selected test.
    """
    test = get_object_or_404(Test, pk=test_id)
    return render(request, 'jobtest/test_detail.html', {'test': test})

def question_detail(request, question_id):
    """
    Displays details of a specific question within a test.
    Show related information such as the question text, code, and language.
    """
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'jobtest/question_detail.html', {'question': question})

def submit_test(request, test_id):
    """
    Allows users to submit their solutions for a test.
    Handles form submission and provide feedback.
    """
    test = get_object_or_404(Test, pk=test_id)

    if request.method == 'POST':
        form = SubmissionForm(request.POST)
        if form.is_valid():
            # process the submission, save to database.
            submission = form.save(commit=False)
            submission.test = test
            # lets assume you have user authentication
            submission.user = request.user
            submission.save()
            return redirect('test_detail', test_id=test_id)
    else:
        form = SubmissionForm()
    return render(request, 'jobtest/submit_test.html', {'form': form, 'test': test})

def user_submissions(request):
    """
    Displays a list of a user's submissions.
    Include details such as the test, submission timestamp, and score.
    """
    submissions = Submission.objects.filter(user=request.user)
    return render(request, 'jobtest/user_submissions.html', {'submissions': submissions})

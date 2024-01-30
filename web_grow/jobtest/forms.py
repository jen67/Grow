from django import forms
from .models import Submission


class SubmissionForm(forms.ModelForm):
    """Submits answers."""
    class Meta:
        model = Submission
        fields = ['user', 'test', 'timestamp', 'score', 'answer', 'question']
        exclude = ['timestamp']

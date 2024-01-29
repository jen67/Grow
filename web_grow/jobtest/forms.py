from django import forms


def SubmissionForm(forms.Form):
    answer = forms.CharField(label='Your Answer', max_length=100)

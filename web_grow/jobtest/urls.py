"""

To make view.py accessible through url,
we define a url pattern that maps to the view.py.

"""


from django.urls import path

from .views import (
    test_list, 
    test_detail, 
    question_detail, 
    submit_test, 
    user_submissions,
    leaderboard,
)


urlpatterns = [
    path('tests/', test_list, name='test_list'),
    path('tests/<int:test_id>/', test_detail, name='test_detail'),
    path('questions/<int:question_id>/', question_detail, name='question_detail'),
    path('tests/<int:test_id>/submit/', submit_test, name='submit_test'),
    path('user/submissions/', user_submissions, name='user_submissions'),
]

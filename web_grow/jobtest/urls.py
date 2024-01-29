"""

To make view.py accessible through url,
we define a url pattern that maps to the view.py.

"""


from django.urls import path

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path('tests/', test_list, name='test_list'),
    path('tests/<int:test_id>/', test_detail, name='test_detail'),
    path('questions/<int:question_id>/', question_detail, name='question_detail'),
    path('tests/<int:test_id>/submit/', submit_test, name='submit_test'),
    path('user/submissions/', user_submissions, name='user_submissions'),
    path('leaderboard/', leaderboard, name='leaderboard'),
    path('dashboard/', dashboard, name='dashboard'),
]

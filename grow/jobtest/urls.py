"""

To make view.py accessible through url,
we define a url pattern that maps to the view.py.

"""


from django.urls import path, include
from .views import index

app_name = 'jobtest'

urlpatterns = [
    path("", index, name="index"),
]

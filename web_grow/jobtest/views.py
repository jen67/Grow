"""

Views are functions or classes that handle
HTTP requests and return HTTP responses.

"""


from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hi, you're at the job test index.")

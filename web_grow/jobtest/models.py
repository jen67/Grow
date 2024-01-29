"""

Our source of information about grow data.

"""


from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Test(models.Model):
    """Code Test the user will take."""
    title = models.CharField(max_length=255)
    description = models.TextField()
    duration_minutes = models.IntegerField()
    start_time = models.DateTimeField("time started")
    end_time = models.DateTimeField("time ended")

    def __str__(self):
        return self.title


class Question(models.Model):
    """Questions asked"""
    test_lang = [
        ('python', 'Python'),
        ('C', 'C' ),
        ('javascript', 'Javascript'),
    ]
    test = models.ForeignKey(Test, on_delete=models.CASCADE)
    text = models.TextField()
    points = models.IntegerField()
    code = models.TextField()
    language = models.CharField(max_length=20, choices=test_lang, default='python')
    date_pub = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.text

class Submission(models.Model):
    """Tracks what user submitted"""
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField()

    def __str__(self):
        return "{} - {} - {}".format(self.user.username, self.test.title, self.timestamp)

"""

Our source of information about grow data.

"""


from django.db import models


class Test(models.Model):
    """Code Test the user will take."""
    title = models.CharField(max_length=255)
    description = models.TextField()
    duration_minutes = models.IntegerField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

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

    def __str__(self):
        return self.text

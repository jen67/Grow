from django.contrib import admin
from .models import Test, Question, Submission

# Defines a custom admin class which allows you to customize the behavior and appearance of the model in the admin interface.
class TestAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'duration_minutes',
                    'start_time', 'end_time')

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('test', 'text', 'points', 'code', 'language',
                    'date_pub')

class SubmissionAdmin(admin.ModelAdmin):
    list_display = ('user', 'test', 'answer', 'question', 'timestamp',
                    'score')

# Register your models here.
admin.site.register(Test, TestAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Submission, SubmissionAdmin)

from django.db import models

# Create your models here.

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE) #Each choice belongs to a single question
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
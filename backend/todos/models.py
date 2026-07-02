from django.db import models
from django.contrib.auth.models import User

# Todo Model - 
class Todo(models.Model):
    user = models.ForeignKey(User, related_name='todos', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
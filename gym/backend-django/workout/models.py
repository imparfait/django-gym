from django.db import models
from django.contrib.auth.models import User

# WorkoutClass model created to store the workout class details
class WorkoutClass(models.Model):
    name = models.CharField(max_length=100)
    start_time = models.TimeField()   
    instructor = models.CharField(max_length=100)

    # First - database value, second - human-readable value
    day_of_week = models.CharField(max_length=9, choices=[
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday'),
    ])

    def __str__(self):
        return self.name
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False)  

    def __str__(self):
        return self.user.username

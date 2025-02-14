from django.urls import path
from .views import WorkoutClassListCreate, WorkoutClassDetail

urlpatterns = [
    path('classes/', WorkoutClassListCreate.as_view(), name='workoutclass-get-create'),
    path('classes/<int:pk>/', WorkoutClassDetail.as_view(), name='workoutclass-detail'),
]

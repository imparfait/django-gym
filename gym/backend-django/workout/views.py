from rest_framework import generics
from .models import WorkoutClass
from .serializers import WorkoutClassSerializer

# API for getting a list of all workout classes or creating a new workout class (GET, POST)
class WorkoutClassListCreate(generics.ListCreateAPIView):
    queryset = WorkoutClass.objects.all()
    serializer_class = WorkoutClassSerializer

# API for getting a specific workout class, updating a specific workout class, or deleting a specific workout class (GET, PUT, DELETE)
class WorkoutClassDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkoutClass.objects.all()
    serializer_class = WorkoutClassSerializer

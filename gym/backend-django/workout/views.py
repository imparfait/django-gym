from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q
from .models import WorkoutClass
from .serializers import WorkoutClassSerializer
#from .permissions import IsAdmin

# API for getting a list of all workout classes or creating a new workout class (GET, POST)
class WorkoutClassListCreate(generics.ListCreateAPIView):
    queryset = WorkoutClass.objects.all()
    serializer_class = WorkoutClassSerializer
    permission_classes = [IsAuthenticated] 

    def get_queryset(self):
        queryset = super().get_queryset()
        search = self.request.query_params.get('search', '')

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) | Q(instructor__icontains=search) # Q - complex queries, icontains - case-insensitive containment test
            )

        return queryset

# API for getting a specific workout class, updating a specific workout class, or deleting a specific workout class (GET, PUT, DELETE)
class WorkoutClassDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkoutClass.objects.all()
    serializer_class = WorkoutClassSerializer
    permission_classes = [IsAuthenticated]

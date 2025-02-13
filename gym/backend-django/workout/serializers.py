from rest_framework import serializers
from .models import WorkoutClass

class WorkoutClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutClass
        fields = '__all__' 

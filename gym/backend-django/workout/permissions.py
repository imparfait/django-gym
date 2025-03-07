from rest_framework.permissions import BasePermission
from .models import UserProfile

class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        try:
            user_profile = request.user.userprofile  
            return user_profile.is_admin  
        except UserProfile.DoesNotExist:
            return False 

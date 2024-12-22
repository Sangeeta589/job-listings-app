from rest_framework import generics
from .models import Job
from .serializers import JobSerializer

class JobList(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
from django.urls import include,path
from .views import JobList

urlpatterns = [
    path('jobs/', JobList.as_view(), name='job-list'),
    path('api/',include('jobs.urls')),
]
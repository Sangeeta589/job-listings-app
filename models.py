from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    summary = models.TextField()
    posted_date = models.DateTimeField()
    details_url = models.URLField()

    def __str__(self):
        return self.title
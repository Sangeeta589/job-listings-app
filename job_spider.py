import scrapy
import requests

class JobSpider(scrapy.Spider):
    name = 'job_spider'
    start_urls = ['https://job-search-api.svc.dhigroupinc.com/v1/dice/jobs/search']

    def parse(self, response):
        # Extract job data here
        jobs = response.json().get('jobs', [])
        for job in jobs:
            yield {
                'title': job['title'],
                'company_name': job['companyName'],
                'location': job['jobLocation']['displayName'],
                'summary': job['summary'],
                'posted_date': job['postedDate'],
                'details_url': job['detailsPageUrl'],
            }

        # Handle pagination if necessary
        next_page = response.json().get('nextPage')
        if next_page:
            yield scrapy.Request(next_page, callback=self.parse)

def send_to_backend(job_data):
    response = requests.post('http://localhost:8000/api/jobs/', json=job_data)
    print(response.status_code, response.json())
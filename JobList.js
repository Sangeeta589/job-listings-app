import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get('http://localhost:8000/api/jobs/');
            setJobs(response.data);
        };
        fetchJobs();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id} className="border p-4 mb-2">
                        <h2 className="text-xl">{job.title}</h2>
                        <p>{job.company_name}</p>
                        <p>{job.location}</p>
                        <p>{job.summary}</p>
                        <a href={job.details_url} className="text-blue-500">View Details</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
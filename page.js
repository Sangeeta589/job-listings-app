import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get('http://localhost:8000/api/jobs/');
            setJobs(response.data);
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>{job.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Jobs;
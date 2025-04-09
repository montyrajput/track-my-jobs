import React from "react";
import JobCard from "../JobCard";
import "./index.css";

function JobList({ jobs, onUpdate, onDelete }) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default JobList;

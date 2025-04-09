import React from "react";
import "./index.css";

function JobCard({ job, onUpdate, onDelete }) {
  const handleStatusChange = (e) => {
    onUpdate(job._id, { ...job, status: e.target.value });
  };

  return (
    <div className="job-card">
      <h3>{job.company} - {job.role}</h3>
      <p>Status: 
        <select value={job.status} onChange={handleStatusChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </p>
      <p>Applied on: {new Date(job.appliedDate).toLocaleDateString()}</p>
      {job.link && <a href={job.link} target="_blank" rel="noreferrer">Job Link</a>}
      <button onClick={() => onDelete(job._id)}>Delete</button>
    </div>
  );
}

export default JobCard;

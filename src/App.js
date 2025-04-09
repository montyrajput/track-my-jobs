import React, { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import { fetchJobs, createJob, updateJob, deleteJob } from "./api";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const loadJobs = async () => {
    const data = await fetchJobs();
    setJobs(data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleCreate = async (job) => {
    await createJob(job);
    loadJobs();
  };

  const handleUpdate = async (id, updated) => {
    await updateJob(id, updated);
    loadJobs();
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    loadJobs();
  };

  return (
    <div className="app">
      <h1>🎯 Student Job Tracker</h1>
      <JobForm onCreate={handleCreate} />
      <JobList jobs={jobs} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;

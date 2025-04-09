import  { useState } from "react";
import "./index.css";

function JobForm({ onCreate }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    appliedDate: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ ...formData, status: "Applied" });
    setFormData({ company: "", role: "", appliedDate: "", link: "" });
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" required />
      <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" required />
      <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} required />
      <input name="link" value={formData.link} onChange={handleChange} placeholder="Job Link (optional)" />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;

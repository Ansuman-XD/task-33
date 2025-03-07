import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobForm.css";

const JobForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "", // Added field for applicant's name
    jobTitle: "",
    jobType: "",
    jobLocation: "",
    travelRequired: "",
    jobDescription: "",
    requirements: "",
    numApplicants: "",
    industry: "",
    skillsRequired: "",
    locationOfPosting: "",
    campusDriveDate: "",
    serviceAgreement: "",
    ctcProbation: "",
    ctcAfterProbation: "",
    eligibilityCriteria: "",
    degree: "",
    branch: "",
    applicationEndDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/application-submitted", { state: formData });
  };

  return (
    <div className="container">
      <div className="header">
        <img src="hirrekarma.png" alt="Logo" className="logo" />
        <h1>Job Form</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Name of Applicant *</label>
          <input type="text" name="applicantName" onChange={handleChange} required />

          <label>Job Title *</label>
          <input type="text" name="jobTitle" onChange={handleChange} required />

          <label>Job Type *</label>
          <select name="jobType" onChange={handleChange} required>
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>

          <label>Job Location *</label>
          <input type="text" name="jobLocation" onChange={handleChange} required />

          <label>Travel Required *</label>
          <select name="travelRequired" onChange={handleChange} required>
            <option value="">Select Travel Requirement</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label>Job Description</label>
          <textarea name="jobDescription" onChange={handleChange}></textarea>

          <label>Requirements</label>
          <textarea name="requirements" onChange={handleChange}></textarea>

          <label>Number of Applicants</label>
          <input type="number" name="numApplicants" onChange={handleChange} />

          <label>Industry *</label>
          <select name="industry" onChange={handleChange} required>
            <option value="">Select Industry</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>

          <label>Skills Required *</label>
          <input type="text" name="skillsRequired" onChange={handleChange} required />

          <label>Location of Posting</label>
          <input type="text" name="locationOfPosting" onChange={handleChange} />

          <label>Probable Campus Drive Date</label>
          <input type="date" name="campusDriveDate" onChange={handleChange} />

          <label>Service Agreement Details</label>
          <input type="text" name="serviceAgreement" onChange={handleChange} />

          <label>CTC While Probation</label>
          <input type="number" name="ctcProbation" onChange={handleChange} />

          <label>CTC After Probation</label>
          <input type="number" name="ctcAfterProbation" onChange={handleChange} />

          <label>Eligibility Criteria</label>
          <textarea name="eligibilityCriteria" onChange={handleChange}></textarea>

          <label>Degree *</label>
          <select name="degree" onChange={handleChange} required>
            <option value="">Select Degree</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
          </select>

          <label>Branch</label>
          <select name="branch" onChange={handleChange}>
            <option value="">Select Branch</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
          </select>

          <label>Application End Date</label>
          <input type="date" name="applicationEndDate" onChange={handleChange} />

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;

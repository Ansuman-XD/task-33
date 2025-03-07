import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ApplicationSubmitted.css";

const ApplicationSubmitted = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  return (
    <div className="submitted-container">
      <div className="submitted-box">
        <h2>Application Submitted</h2>
        <p><strong>Student:</strong> {formData.applicantName || "N/A"}</p>
        <p><strong>Applied for:</strong> {formData.jobTitle || "N/A"}</p>
        <p><strong>Job Type:</strong> {formData.jobType || "N/A"}</p>
        <p><strong>Location:</strong> {formData.jobLocation || "N/A"}</p>
        <p><strong>DATE:</strong> {formData.applicationEndDate || "N/A"}</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;

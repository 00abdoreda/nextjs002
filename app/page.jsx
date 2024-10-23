"use client";
import React, { useState } from "react";

function CaseReport() {
  const [reportData, setReportData] = useState({
    patientName: "",
    patientAge: "",
    referringDoctor: "",
    department: "",
    dataReceived: "",
    dataReportGenerated: "",
  });

  const handleChange = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  // Handle form submission (e.g., send data to API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... Your logic to process and submit data
  };

  return (
    <div
      className="col justify-content-evenly d-flex my-3"
      style={{ height: "95vh" }}>
      {/* <div className=" justify-content-evenly"> */}
      <div
        className="col-md-6 p-2"
        style={{
          backgroundColor: "#FCCB80",
          borderRadius: "15px",
        }}>
        <h2>New Case Report</h2>
        <form onSubmit={handleSubmit}>
          {/* Patient Data */}
          <div className="col d-flex gap-3">
            <div className="mb-3 col">
              <label htmlFor="patientName" className="form-label">
                Patient Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="patientName"
                name="patientName"
                value={reportData.patientName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col">
              <label htmlFor="patientAge" className="form-label">
                Patient Age:
              </label>
              <input
                type="text"
                className="form-control"
                id="patientAge"
                name="patientAge"
                value={reportData.patientAge}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col d-flex gap-3">
            <div className="mb-3 col">
              <label htmlFor="referringDoctor" className="form-label">
                Referring Doctor:
              </label>
              <input
                type="text"
                className="form-control"
                id="referringDoctor"
                name="referringDoctor"
                value={reportData.referringDoctor}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col">
              <label htmlFor="department" className="form-label">
                Department:
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={reportData.department}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Report
          </button>
        </form>
      </div>
      <div
        className="col-md-5 p-2"
        style={{
          backgroundColor: "#FCCB80",
          borderRadius: "15px",
        }}>
        {/* Data Collection, Templates, Comments */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Data Collection
            </a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#">
              Comments
            </a>
          </li>
        </ul>

        {/* Content area for tabs */}
        <div className="mt-3 h-75"></div>

        {/* AI Prompts Section */}
        <div className="mt-5">
          <div className="text-center">AI PROMPTS</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default CaseReport;

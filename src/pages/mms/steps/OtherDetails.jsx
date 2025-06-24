// src/pages/mms/steps/OtherDetails.jsx
import React from "react";

function OtherDetails({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="step-container">
      <h3>Step 3: Other Details</h3>

      <div className="form-group">
        <label>Expected Monthly Revenue *</label>
        <input type="number" name="revenue" value={formData.revenue} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>City *</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Region *</label>
        <input type="text" name="region" value={formData.region} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Business Address</label>
        <textarea name="businessAddress" value={formData.businessAddress} onChange={handleChange} />
      </div>
    </div>
  );
}

export default OtherDetails;

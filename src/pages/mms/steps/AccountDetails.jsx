// src/pages/mms/steps/AccountDetails.jsx
import React from "react";

function AccountDetails({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="step-container">
      <h3>Step 2: Account Details</h3>
      <div className="form-group">
        <label>Doing Business As *</label>
        <input type="text" name="dba" value={formData.dba} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Merchant Type *</label>
        <select name="merchantType" value={formData.merchantType} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="Sole Proprietor">Sole Proprietor</option>
          <option value="Partnership">Partnership</option>
          <option value="Private Ltd">Private Ltd</option>
        </select>
      </div>

      <div className="form-group">
        <label>CNIC Expiry Date *</label>
        <input type="date" name="cnicExpiry" value={formData.cnicExpiry} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
    </div>
  );
}

export default AccountDetails;

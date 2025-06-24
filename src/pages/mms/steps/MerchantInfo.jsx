// src/pages/mms/steps/MerchantInfo.jsx
import React from "react";

function MerchantInfo({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="step-container">
      <h3>Step 1: Merchant Info</h3>
      <div className="form-group">
        <label>Merchant Name *</label>
        <input type="text" name="merchantName" value={formData.merchantName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Merchant Category *</label>
        <select name="merchantCategory" value={formData.merchantCategory} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Retail">Retail</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
        </select>
      </div>

      <div className="form-group">
        <label>Proprietor CNIC *</label>
        <input type="text" name="proprietorCnic" value={formData.proprietorCnic} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Mobile Number *</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
      </div>
    </div>
  );
}

export default MerchantInfo;

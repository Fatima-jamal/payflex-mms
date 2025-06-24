// src/pages/mms/AddMerchantForm.jsx
import React, { useState } from "react";
import "../mms/AddMerchantForm.css";
import MerchantInfo from "./steps/MerchantInfo";
import AccountDetails from "./steps/AccountDetails";
import OtherDetails from "./steps/OtherDetails";

function AddMerchantForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    merchantName: "",
    merchantCategory: "",
    proprietorCnic: "",
    mobileNumber: "",
    dba: "",
    merchantType: "",
    cnicExpiry: "",
    email: "",
    revenue: "",
    city: "",
    region: "",
    businessAddress: ""
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    // TODO: Send formData to backend via Axios POST
    alert("Merchant submitted successfully!");
  };

  return (
    <div className="add-merchant-form">
      <h2>Merchant Management</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && <MerchantInfo formData={formData} setFormData={setFormData} />}
        {step === 2 && <AccountDetails formData={formData} setFormData={setFormData} />}
        {step === 3 && <OtherDetails formData={formData} setFormData={setFormData} />}

        <div className="form-navigation">
          {step > 1 && (
            <button type="button" onClick={handleBack} className="nav-button back">
              Previous
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={handleNext} className="nav-button next">
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="nav-button submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddMerchantForm;

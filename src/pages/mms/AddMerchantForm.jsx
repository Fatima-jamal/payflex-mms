import React, { useState } from "react";
import "../mms/AddMerchantForm.css";
import MerchantInfo from "./steps/MerchantInfo";
import AccountDetails from "./steps/AccountDetails";
import OtherDetails from "./steps/OtherDetails";
import axios from "axios";

function AddMerchantForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",                 // was merchantName
    dba: "",
    email: "",
    proprietorCnic: "",
    mobileNumber: "",
    merchantCategory: "",
    merchantType: "",
    cnicExpiry: "",
    city: "",
    region: "",
    businessAddress: "",
    revenue: ""
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/merchants/submit", formData);
      alert("Merchant submitted successfully!");
      console.log("Submitted:", response.data);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit merchant.");
    }
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

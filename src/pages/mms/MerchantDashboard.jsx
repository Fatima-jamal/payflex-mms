import React from "react";
import { useNavigate } from "react-router-dom";
import "./MerchantDashboard.css";
import { FaPlus, FaEye, FaRetweet } from "react-icons/fa";

function MerchantDashboard() {
  const navigate = useNavigate();

  return (
    <div className="merchant-dashboard-container">
      <h2 className="dashboard-title">Merchant Management</h2>
      <div className="card-row">

        {/* 1. Add Merchant */}
        <div className="dashboard-card" onClick={() => navigate("/mms/add-merchant")}>
          <FaPlus className="dashboard-icon" />
          <h3 className="card-title">Add Merchant</h3>
          <p className="card-description">
            Start onboarding a new merchant using the 3-step form.
          </p>
        </div>

        {/* 2. View Merchants */}
        <div className="dashboard-card" onClick={() => navigate("/mms/merchant-requests")}>
          <FaEye className="dashboard-icon" />
          <h3 className="card-title">View Merchants</h3>
          <p className="card-description">
            See all merchants submitted by Maker.
          </p>
        </div>

        {/* 3. Returned Merchants */}
        <div className="dashboard-card" onClick={() => navigate("/mms/approved-merchants")}>
          <FaRetweet className="dashboard-icon" />
          <h3 className="card-title">Returned Merchants</h3>
          <p className="card-description">
            Review merchants returned by Approver.
          </p>
        </div>

      </div>
    </div>
  );
}

export default MerchantDashboard;

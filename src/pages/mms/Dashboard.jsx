import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaPlus, FaEye, FaRetweet } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Merchant Management</h2>
      <div className="dashboard-cards">

        {/* Add Merchant */}
        <div className="dashboard-card" onClick={() => navigate("/mms/add-merchant")}>
          <FaPlus className="dashboard-icon" />
          <h3>Add Merchant</h3>
          <p>Start onboarding a new merchant using the 3-step form.</p>
        </div>

        {/* View Merchants */}
        <div className="dashboard-card" onClick={() => navigate("/mms/merchant-requests")}>
          <FaEye className="dashboard-icon" />
          <h3>View Merchants</h3>
          <p>See all merchants submitted by Maker.</p>
        </div>

        {/* Returned Merchants */}
        <div className="dashboard-card" onClick={() => navigate("/mms/returned-merchants")}>
          <FaRetweet className="dashboard-icon" />
          <h3>Returned Merchants</h3>
          <p>Review merchants returned by Approver.</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/mms/login");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">PayFlex MMS</h2>
      <hr className="sidebar-line" />
      <nav className="sidebar-nav">
        <Link to="/mms/dashboard" className={location.pathname === "/mms/dashboard" ? "active" : ""}>
          Dashboard
        </Link>
        <Link to="/mms/merchant-requests" className={location.pathname === "/mms/merchant-requests" ? "active" : ""}>
          Merchant Requests
        </Link>
        <Link to="/mms/approved-merchants" className={location.pathname === "/mms/approved-merchants" ? "active" : ""}>
          Approved Merchants
        </Link>
        <Link to="/mms/returned-merchants" className={location.pathname === "/mms/returned-merchants" ? "active" : ""}>
          Returned Merchants
        </Link>
      </nav>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;

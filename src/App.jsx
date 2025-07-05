import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/mms/Dashboard";
import AddMerchantForm from "./pages/mms/AddMerchantForm";
import MerchantRequests from "./pages/mms/MerchantRequests";
import ApprovedMerchants from "./pages/mms/ApprovedMerchants";
import ReturnedMerchants from "./pages/mms/ReturnedMerchants"; // ✅ Added import
import Login from "./pages/mms/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/mms/login" element={<Login />} />
            <Route path="/mms/dashboard" element={<Dashboard />} />
            <Route path="/mms/add-merchant" element={<AddMerchantForm />} />
            <Route path="/mms/merchant-requests" element={<MerchantRequests />} />
            <Route path="/mms/approved-merchants" element={<ApprovedMerchants />} />
            <Route path="/mms/returned-merchants" element={<ReturnedMerchants />} /> {/* ✅ New Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

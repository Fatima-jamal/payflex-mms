import React, { useEffect, useState } from "react";
import "./ApprovedMerchants.css";

function ApprovedMerchants() {
  const [merchants, setMerchants] = useState([]);
  const [showPasswordId, setShowPasswordId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/merchants/approved")
      .then((res) => res.json())
      .then((data) => setMerchants(data))
      .catch((err) => console.error("Error fetching merchants:", err));
  }, []);

  const togglePassword = (id) => {
    setShowPasswordId((prevId) => (prevId === id ? null : id));
  };

  const handleEmail = (merchant) => {
    const body = `Your MID is ${merchant.mid} and your password is ${merchant.password}`;
    window.location.href = `mailto:${merchant.email}?subject=Your PayFlex Credentials&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="approved-merchants-page">
      <h2>Approved Merchants</h2>
      <table>
        <thead>
          <tr>
            <th>Doing Business As</th>
            <th>MID</th>
            <th>CNIC</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Merchant Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant) => (
            <tr key={merchant.id}>
              <td>{merchant.dba || "-"}</td>
              <td>{merchant.mid}</td>
              <td>{merchant.cnic || "-"}</td>
              <td>{merchant.phone || merchant.mobile_number || "-"}</td>
              <td>{merchant.city || "-"}</td>
              <td>{merchant.name || "-"}</td>
              <td style={{ whiteSpace: "pre-line" }}>{merchant.address || "-"}</td>
              <td>
                <b>{merchant.email}</b><br />
                <button onClick={() => handleEmail(merchant)} style={emailBtnStyle}>Email Credentials</button>
              </td>
              <td>
                {showPasswordId === merchant.id ? merchant.password : "••••••••"}
                <br />
                <button onClick={() => togglePassword(merchant.id)} style={showBtnStyle}>Show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const emailBtnStyle = {
  backgroundColor: "#8000c8",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "4px 8px",
  fontSize: "12px",
  cursor: "pointer",
  marginTop: "6px",
};

const showBtnStyle = {
  backgroundColor: "#8000c8",  // updated here
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "4px 8px",
  fontSize: "12px",
  cursor: "pointer",
  marginTop: "6px",
};

export default ApprovedMerchants;

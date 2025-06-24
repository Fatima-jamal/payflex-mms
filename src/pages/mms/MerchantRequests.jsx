import React, { useState, useEffect } from "react";
import "./MerchantRequests.css";

function MerchantRequests() {
  const [merchantRequests, setMerchantRequests] = useState([]);

  useEffect(() => {
    // Dummy data – replace with Axios call if needed
    setMerchantRequests([
      {
        id: 1,
        merchant: "MASTER LUGGAGE",
        dba: "MASTER LUGGAGE",
        mid: "920215331100118",
        cnic: "4220111122221",
        mobile: "03332221112",
        city: "Karachi",
        payee: "MASTER LUGGAGE",
        address: "SHOP NO G-7, INT'L SHOPPING CENTRE",
        email: "demo1@test.com"
      },
      {
        id: 2,
        merchant: "RAFAY'S DECOR",
        dba: "RAFAY'S DECOR",
        mid: "920215331100117",
        cnic: "1111222333444",
        mobile: "03332222333",
        city: "Lahore",
        payee: "RAFAY'S DECOR",
        address: "16 SUTLEJ AVE",
        email: "demo2@test.com"
      }
    ]);
  }, []);

  const handleApprove = (id) => {
    alert(`Merchant ${id} approved.`);
    setMerchantRequests(prev => prev.filter(m => m.id !== id));
    // TODO: Send status=approved to backend via Axios
  };

  const handleReject = (id) => {
    alert(`Merchant ${id} rejected.`);
    setMerchantRequests(prev => prev.filter(m => m.id !== id));
    // TODO: Send status=rejected to backend via Axios
  };

  return (
    <div className="merchant-requests-page">
      <h2>Merchant Requests</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Merchant</th>
              <th>Doing Business As</th>
              <th>MID</th>
              <th>CNIC</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Payee</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {merchantRequests.map((m) => (
              <tr key={m.id}>
                <td>{m.merchant}</td>
                <td>{m.dba}</td>
                <td>{m.mid}</td>
                <td>{m.cnic}</td>
                <td>{m.mobile}</td>
                <td>{m.city}</td>
                <td>{m.payee}</td>
                <td>{m.address}</td>
                <td>{m.email}</td>
                <td>
                  <button className="approve-btn" onClick={() => handleApprove(m.id)}>
                    Approve
                  </button>
                  <button className="reject-btn" onClick={() => handleReject(m.id)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MerchantRequests;

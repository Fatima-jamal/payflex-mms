import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MerchantRequests.css";

function MerchantRequests() {
  const [merchantRequests, setMerchantRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/api/merchants/pending")
      .then(res => setMerchantRequests(res.data))
      .catch(err => console.error("Error loading merchants", err));
  }, []);

  const handleApprove = async (mid) => {
    try {
      await axios.put(`http://localhost:8081/api/merchants/approve/${mid}`);
      alert(`Merchant ${mid} approved.`);
      setMerchantRequests(prev => prev.filter(m => m.mid !== mid));
    } catch (error) {
      console.error("Error approving merchant", error);
      alert("Approval failed.");
    }
  };

  const handleReject = async (mid) => {
    try {
      await axios.delete(`http://localhost:8081/api/merchants/reject/${mid}`);
      alert(`Merchant ${mid} rejected.`);
      setMerchantRequests(prev => prev.filter(m => m.mid !== mid));
    } catch (error) {
      console.error("Error rejecting merchant", error);
      alert("Rejection failed.");
    }
  };

  const filteredMerchants = merchantRequests.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.mid.includes(searchQuery)
  );

  return (
    <div className="merchant-requests-page">
      <h2>Merchant Requests</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or MID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

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
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMerchants.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.dbaName}</td>
                <td>{m.mid}</td>
                <td>{m.cnic}</td>
                <td>{m.phone}</td>
                <td>{m.city}</td>
                <td>{m.email}</td>
                <td>
                  <button className="approve-btn" onClick={() => handleApprove(m.mid)}>Approve</button>
                  <button className="reject-btn" onClick={() => handleReject(m.mid)}>Reject</button>
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

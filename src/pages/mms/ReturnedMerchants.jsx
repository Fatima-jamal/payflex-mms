import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ReturnedMerchants.css";

function ReturnedMerchants() {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    fetchReturnedMerchants();
  }, []);

  const fetchReturnedMerchants = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/merchants/rejected");
      setMerchants(response.data);
    } catch (error) {
      console.error("Error fetching returned merchants:", error);
    }
  };

  const handleReasonChange = (e, id) => {
    const updated = merchants.map((merchant) =>
      merchant.id === id ? { ...merchant, rejectionReason: e.target.value } : merchant
    );
    setMerchants(updated);
  };

  const updateReason = async (id, reason) => {
    try {
      await axios.put(`http://localhost:8081/api/merchants/${id}/reason`, reason, {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (error) {
      console.error("Error updating reason:", error);
    }
  };

  const handleRequestAgain = async (id) => {
    try {
      await axios.put(`http://localhost:8081/api/merchants/${id}/request-again`);
      fetchReturnedMerchants();
    } catch (error) {
      console.error("Error marking merchant for resubmission:", error);
    }
  };

  const handleEmail = (email) => {
    if (!email) {
      alert("No email found for this merchant.");
      return;
    }
    window.location.href = `mailto:${email}?subject=Resubmit Merchant Information&body=Please resubmit your merchant information via the provided link.`;
  };

  return (
    <div className="returned-merchants-page">
      <h2>Returned Merchants</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Merchant</th>
              <th>DBA Name</th>
              <th>City</th>
              <th>CNIC</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((merchant) => (
              <tr key={merchant.id}>
                <td>{merchant.name || "-"}</td>
                <td>{merchant.dbaName || "-"}</td>
                <td>{merchant.city || "-"}</td>
                <td>{merchant.cnic || "-"}</td>
                <td>{merchant.phone || "-"}</td>
                <td>{merchant.email || "-"}</td>
                <td>
                  <textarea
                    className="reason-box"
                    rows={3}
                    value={merchant.rejectionReason || ""}
                    onChange={(e) => handleReasonChange(e, merchant.id)}
                    onBlur={() => updateReason(merchant.id, merchant.rejectionReason)}
                  />
                </td>
                <td>
                  <button className="purple-button small-button" onClick={() => handleRequestAgain(merchant.id)}>
                    Request Again
                  </button>
                  <br />
                  <button className="purple-button small-button" onClick={() => handleEmail(merchant.email)}>
                    Email
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

export default ReturnedMerchants;

import React, { useEffect, useState } from "react";
import "./ApprovedMerchants.css";

function ApprovedMerchants() {
  const [approvedMerchants, setApprovedMerchants] = useState([]);

  useEffect(() => {
    // Sample approved merchants (replace with backend call if needed)
    setApprovedMerchants([
      {
        dba: "QURESHI BUILDERS",
        mid: "920215731100113",
        cnic: "4220139100000",
        mobile: "03456767656",
        city: "Karachi",
        payee: "Title-1",
        address: "KARACHI",
        email: "qureshibuilders@test.com"
      },
      {
        dba: "ZOHAR",
        mid: "920215731100114",
        cnic: "4210111111111",
        mobile: "03339995555",
        city: "Lahore",
        payee: "ZOHAR AHMED",
        address: "MARKET STREET, LAHORE",
        email: "zohar@trade.pk"
      }
    ]);
  }, []);

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
            <th>Payee</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {approvedMerchants.map((m, index) => (
            <tr key={index}>
              <td>{m.dba}</td>
              <td>{m.mid}</td>
              <td>{m.cnic}</td>
              <td>{m.mobile}</td>
              <td>{m.city}</td>
              <td>{m.payee}</td>
              <td>{m.address}</td>
              <td>{m.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApprovedMerchants;

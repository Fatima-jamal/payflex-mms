import React, { useEffect, useState } from "react";
import "./ReturnedMerchants.css";

function ReturnedMerchants() {
  const [returnedMerchants, setReturnedMerchants] = useState([]);

  useEffect(() => {
    // Static returned merchant data (can be replaced with backend call)
    setReturnedMerchants([
      {
        date: "2025-06-20",
        merchant: "ABC Traders",
        dba: "ABC Mart",
        city: "Karachi",
        cnic: "4220111122334",
        mobile: "03112223333",
        address: "Shop No 4, Saddar",
      },
      {
        date: "2025-06-21",
        merchant: "XYZ Pharmacy",
        dba: "XYZ Pharma",
        city: "Lahore",
        cnic: "3520223344556",
        mobile: "03234445556",
        address: "Mall Road",
      },
    ]);
  }, []);

  return (
    <div className="returned-merchants-page">
      <h2>Returned Merchants</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Merchant DBA Name</th>
            <th>City</th>
            <th>CNIC</th>
            <th>Mobile Number</th>
            <th>Shop Address</th>
          </tr>
        </thead>
        <tbody>
          {returnedMerchants.map((m, index) => (
            <tr key={index}>
              <td>{m.date}</td>
              <td>{m.merchant}</td>
              <td>{m.dba}</td>
              <td>{m.city}</td>
              <td>{m.cnic}</td>
              <td>{m.mobile}</td>
              <td>{m.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReturnedMerchants;

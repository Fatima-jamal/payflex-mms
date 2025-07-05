import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApprovedMerchants.css';

const ApprovedMerchants = () => {
  const [approvedMerchants, setApprovedMerchants] = useState([]);
  const [visiblePasswords, setVisiblePasswords] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/merchants/approved')
      .then((response) => {
        setApprovedMerchants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching approved merchants:', error);
      });
  }, []);

  const togglePasswordVisibility = (mid) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [mid]: !prev[mid],
    }));
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
          {approvedMerchants.map((merchant) => (
            <tr key={merchant.id}>
              <td>{merchant.dba || '-'}</td>
              <td>{merchant.mid || '-'}</td>
              <td>{merchant.cnic || '-'}</td>
              <td>{merchant.phone || '-'}</td>
              <td>{merchant.city || '-'}</td>
              <td>{merchant.name || '-'}</td>
              <td>{merchant.address || '-'}</td>
              <td>
                <strong>{merchant.email}</strong>
                <br />
                <button className="purple-button">Email Credentials</button>
              </td>
              <td>
                {visiblePasswords[merchant.mid] ? merchant.password : '••••••••'}
                <br />
                <button className="purple-button" onClick={() => togglePasswordVisibility(merchant.mid)}>
                  {visiblePasswords[merchant.mid] ? 'Hide' : 'Show'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedMerchants;

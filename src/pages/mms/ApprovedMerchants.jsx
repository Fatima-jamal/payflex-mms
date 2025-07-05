import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApprovedMerchants.css';

const ApprovedMerchants = () => {
  const [approvedMerchants, setApprovedMerchants] = useState([]);
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/merchants/approved')
      .then((response) => setApprovedMerchants(response.data))
      .catch((error) => console.error('Error fetching approved merchants:', error));
  }, []);

  const togglePasswordVisibility = (mid) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [mid]: !prev[mid],
    }));
  };

  const filteredMerchants = approvedMerchants.filter((merchant) =>
    merchant.dbaName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    merchant.mid?.includes(searchQuery) ||
    merchant.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="approved-merchants-page">
      <h2>Approved Merchants</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by DBA, MID, or Merchant Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="table-container">
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
            {filteredMerchants.map((merchant) => (
              <tr key={merchant.id}>
                <td>{merchant.dbaName || '-'}</td>
                <td>{merchant.mid || '-'}</td>
                <td>{merchant.cnic || '-'}</td>
                <td>{merchant.phone || '-'}</td>
                <td>{merchant.city || '-'}</td>
                <td>{merchant.name || '-'}</td>
                <td>{merchant.address || '-'}</td>
                <td>
                  <div className="email-cell">
                    <strong>{merchant.email}</strong>
                    <button className="purple-button small-button">Email Credentials</button>
                  </div>
                </td>
                <td>
                  <div className="password-cell">
                    {visiblePasswords[merchant.mid] ? merchant.password : '••••••••'}
                    <button
                      className="purple-button small-button"
                      onClick={() => togglePasswordVisibility(merchant.mid)}
                    >
                      {visiblePasswords[merchant.mid] ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedMerchants;

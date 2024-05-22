// src/components/AdminPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/enquiries')
      .then(response => {
        setEnquiries(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Trip Preferences</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry, index) => (
            <tr key={index}>
              <td>{enquiry.name}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.phone}</td>
              <td>{enquiry.tripPreferences}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;

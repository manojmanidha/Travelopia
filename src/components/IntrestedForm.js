import React, { useState } from 'react';
import axios from 'axios';
import './InterestForm.css';
import { useHistory, Link } from "react-router-dom";


const InterestForm = () => {
  // const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripPreferences: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/enquiries', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // history.push('/login');
  };

  return (
    <div className="interest-form-container">
      <div className="header">
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <div className="header-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <button className="start-planning-button">Start Planning</button>
      </div>
      <div className="banner">
        <h1>Crafting memorable vacations for 20 years</h1>
        <p>Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in 70+ Inspiring Destinations.</p>
      </div>
      <form className="interest-form" onSubmit={handleSubmit}>
        <h2>Interest Form</h2>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        <label>Trip Preferences:</label>
        <textarea name="tripPreferences" value={formData.tripPreferences} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InterestForm;

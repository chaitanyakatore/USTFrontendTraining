import React from 'react';
import './styles.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <h4>Contact Information</h4>
      <p>Email: <a href="mailto:Chaitnya@email.com">Chaitnya@email.com</a></p>
      <p>Mobile: 999999999</p>
      <label>Input number to call:</label>
      <input 
        type="tel" 
        placeholder="Enter phone number" 
        aria-label="Phone number input" 
      />
    </div>
  );
};

export default Contact;

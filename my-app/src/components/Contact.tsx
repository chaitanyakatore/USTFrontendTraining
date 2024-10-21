import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <h1>Contact</h1>
      <h4>Contact Information</h4>
      <p>Email: <a href="mailto:Chaitnya@email.com">Chaitnya@email.com</a></p>
      <p>Mobile: 999999999</p>
      <p>Input number to call:</p>
      <input 
        type="tel" 
        placeholder="Enter phone number" 
        aria-label="Phone number input" 
      />
    </div>
  );
};

export default Contact;

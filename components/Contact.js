import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="contactContainer">
      <h1 className="text-center"><b>CONTACT US</b></h1>
      <div className="contactDetails">
        <p style={{ fontSize: '24px', fontWeight: 600 }}>Address</p>
        <p>The ICCCSP 24 Team</p>
        <p>Department of Information Technology</p>
        <p>SSN College of Engineering,</p>
        <p>Kalavakkam - 603110</p>
        <p>Tamil Nadu, India</p>
        <br />
        <p style={{ fontSize: '24px', fontWeight: 600 }}>
          For further queries, please write to{' '}
        </p>
        <a href="mailto:icccsp@it.ssn.edu.in">icccsp@it.ssn.edu.in</a>
        <p>Contact:  98403 04135, 98405 06522, 77087 33053</p>
      </div>
    </div>
  );
}

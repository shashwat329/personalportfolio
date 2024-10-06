import React from 'react';
import '../style/ContactSide.css';  // CSS for the left side

const ContactSide = () => {
  return (
    <div className="contact-side">
      <div className="profile-info">
        <h2>Kumar Shashwat</h2>
        <p className="title">Web developer</p>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <strong>EMAIL</strong>
          <p>kumarshashwat283@gmail.com</p>
        </div>
        <div className="contact-item">
          <strong>PHONE</strong>
          <p>+91 9693063807</p>
        </div>
        <div className="contact-item">
          <strong>BIRTHDAY</strong>
          <p>September 27, 2002</p>
        </div>
        <div className="contact-item">
          <strong>LOCATION</strong>
          <p>New Delhi, INDIA</p>
        </div>
      </div>

      <div className="social-links">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
    </div>
  );
};

export default ContactSide;

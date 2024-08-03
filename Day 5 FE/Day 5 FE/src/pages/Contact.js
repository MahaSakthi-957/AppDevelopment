import React, { useState } from 'react';
import './Contact.css'; // Import any specific CSS file if needed
import InstagramIcon from '../assets/instagram.png'; // Make sure to add the icon images in the correct path
import FacebookIcon from '../assets/linkedin.png';
import XIcon from '../assets/facebook.png'; // Formerly Twitter
import ContactIcon from '../assets/whatsapp.png';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleComplainClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  return (
    <div className="contact-container">
      <div className="greeting">
        <h2>Welcome to Our Contact Page!</h2>
        <p>We're here to assist you. Connect with us through social media or leave us a message.</p>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="X" />
        </a>
        <a href="mailto:contact@example.com">
          <img src={ContactIcon} alt="Contact Us" />
        </a>
      </div>
      <button className="complain-button" onClick={handleComplainClick}>
        Complain
      </button>
      <div className={`contact ${showForm ? 'show' : ''}`}>
        <button className="close-button" onClick={handleCloseClick}>
          &times;
        </button>
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us using the contact information below.
        </p>
        <p>
          <strong>Email:</strong> support@elearningplatform.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
          <strong>Address:</strong> 123 Learning Lane, Knowledge City, LE 45678
        </p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

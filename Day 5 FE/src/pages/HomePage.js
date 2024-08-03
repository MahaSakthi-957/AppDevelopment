import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS for the HomePage

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome-message">
        <h1><b>Welcome to E-Learning Platform</b></h1>
        <p><b>Empowering your journey with quality education.</b></p>
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">Login</Link>
        <Link to="/signup" className="auth-button">Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;

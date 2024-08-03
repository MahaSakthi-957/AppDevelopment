import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS for Login page

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Send a GET request to check for user credentials
      const response = await axios.get('http://localhost:5000/user', {
        params: {
          email: formData.email,
          password: formData.password
        }
      });

      // Check if user exists and credentials match
      if (response.data.length > 0) {
        setSuccess('Login successful!');
        // Redirect to another page after successful login, e.g., Home page
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Error response:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Login</h1>
        <form className="auth-form-content" onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <p className="toggle-text">Don't have an account? <Link to="/signup" className="toggle-link">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;

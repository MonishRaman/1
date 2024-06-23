import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Medical Consultation Platform</h2>
      <p>Welcome to our platform where doctors and specialists can collaborate for better patient care.</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
};

export default HomePage;

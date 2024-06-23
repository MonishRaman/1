import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);

  const handleLogout = () => {
    // Implement logout logic, e.g., clear auth token
    setAuthToken(null);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {authToken ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

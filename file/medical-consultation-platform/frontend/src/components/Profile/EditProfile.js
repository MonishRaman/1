import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const EditProfile = () => {
  const { authToken } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/users/profile', { name, email }, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log('Profile Updated:', response.data);
      // Optionally show success message or update local state
    } catch (error) {
      console.error('Error updating profile:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;

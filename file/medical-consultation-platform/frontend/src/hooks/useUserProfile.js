import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const useUserProfile = () => {
  const [user, setUser] = useState(null);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [authToken]);

  return user;
};

export default useUserProfile;

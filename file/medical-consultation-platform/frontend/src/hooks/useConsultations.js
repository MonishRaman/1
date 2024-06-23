import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const useConsultations = () => {
  const [consultations, setConsultations] = useState([]);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await axios.get('/api/consultations', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setConsultations(response.data);
      } catch (error) {
        console.error('Error fetching consultations:', error);
      }
    };

    fetchConsultations();
  }, [authToken]);

  return consultations;
};

export default useConsultations;

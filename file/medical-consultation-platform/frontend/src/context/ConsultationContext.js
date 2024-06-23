import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const ConsultationContext = createContext();

export const useConsultation = () => useContext(ConsultationContext);

export const ConsultationProvider = ({ children }) => {
  const [consultations, setConsultations] = useState([]);

  const fetchConsultations = async () => {
    const { data } = await axios.get('/api/consultations');
    setConsultations(data);
  };

  const createConsultation = async (consultationData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post('/api/consultations', consultationData, config);
      fetchConsultations(); // Refresh consultations after creating a new one
    } catch (error) {
      console.error('Error creating consultation:', error);
    }
  };

  return (
    <ConsultationContext.Provider value={{ consultations, fetchConsultations, createConsultation }}>
      {children}
    </ConsultationContext.Provider>
  );
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConsultationList from '../Consultation/ConsultationList';

const DoctorDashboard = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await axios.get('/api/consultations');
        setConsultations(response.data);
      } catch (error) {
        console.error('Error fetching consultations:', error);
      }
    };

    fetchConsultations();
  }, []);

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <ConsultationList consultations={consultations} />
    </div>
  );
};

export default DoctorDashboard;

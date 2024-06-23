import React, { useState } from 'react';
import axios from 'axios';

const ConsultationForm = () => {
  const [specialist, setSpecialist] = useState('');
  const [patientInfo, setPatientInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/consultations', { specialist, patientInfo });
      console.log('Consultation Request Sent:', response.data);
      // Optionally show success message or redirect to dashboard
    } catch (error) {
      console.error('Error sending consultation request:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Request Consultation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Specialist ID"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
          required
        />
        <textarea
          placeholder="Patient Information"
          value={patientInfo}
          onChange={(e) => setPatientInfo(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConsultationForm;

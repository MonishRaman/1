import React, { useState } from 'react';
import axios from 'axios';

const ConsultationRequestForm = () => {
  const [patientInfo, setPatientInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/consultations/request', { patientInfo });
      console.log('Consultation requested:', response.data);
      // Optionally show success message or reset form
      setPatientInfo('');
    } catch (error) {
      console.error('Error requesting consultation:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Request Consultation</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Patient information and details"
          value={patientInfo}
          onChange={(e) => setPatientInfo(e.target.value)}
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default ConsultationRequestForm;

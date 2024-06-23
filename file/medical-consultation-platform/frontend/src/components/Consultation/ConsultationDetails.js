import React from 'react';

const ConsultationDetails = ({ consultation }) => {
  return (
    <div>
      <h3>Consultation Details</h3>
      <p><strong>Specialist:</strong> {consultation.specialist.name}</p>
      <p><strong>Status:</strong> {consultation.status}</p>
      <p><strong>Patient Info:</strong> {consultation.patientInfo}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ConsultationDetails;

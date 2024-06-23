import React from 'react';

const ConsultationList = ({ consultations }) => {
  return (
    <div>
      <h3>Consultations</h3>
      <ul>
        {consultations.map((consultation) => (
          <li key={consultation._id}>
            <strong>Specialist:</strong> {consultation.specialist.name}<br />
            <strong>Status:</strong> {consultation.status}<br />
            <strong>Patient Info:</strong> {consultation.patientInfo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultationList;

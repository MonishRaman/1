import React from 'react';

const ConsultationListItem = ({ consultation }) => {
  return (
    <li>
      <strong>Specialist:</strong> {consultation.specialist.name} | <strong>Status:</strong> {consultation.status} |{' '}
      <strong>Patient Info:</strong> {consultation.patientInfo}
    </li>
  );
};

export default ConsultationListItem;

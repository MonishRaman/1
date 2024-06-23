import React from 'react';
import useConsultations from '../../hooks/useConsultations';
import ConsultationListItem from 'c:/Users/Monish.R/OneDrive/Desktop/web application/1/frontend/src/components/Dashboard/ConsultationList.js';


const ConsultationList = () => {
  const consultations = useConsultations(); // Assuming useConsultations fetches data from an API

  return (
    <div>
      <h2>Consultations</h2>
      <ul>
        {consultations.map((consultation) => (
          <ConsultationListItem key={consultation._id} consultation={consultation} />
        ))}
      </ul>
    </div>
  );
};

export default ConsultationList;

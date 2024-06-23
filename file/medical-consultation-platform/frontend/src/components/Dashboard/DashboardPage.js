import React from 'react';
import ConsultationList from './ConsultationList';
import ConsultationRequestForm from './ConsultationRequestForm';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.dashboard-container}>
      <div className={styles.dashboard-header}>
        <h1>Dashboard</h1>
      </div>
      
      <div className={styles.dashboard-section}>
        <ConsultationRequestForm />
      </div>

      <div className={styles.dashboard-section}>
        <ConsultationList />
      </div>
    </div>
  );
};

export default DashboardPage;

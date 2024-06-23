import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import DoctorDashboard from '../components/Dashboard/DoctorDashboard';
import SpecialistDashboard from '../components/Dashboard/SpecialistDashboard';

const DashboardPage = () => {
  const { role } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <Switch>
        <Route exact path="/dashboard">
          {role === 'doctor' ? <DoctorDashboard /> : <SpecialistDashboard />}
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
};

export default DashboardPage;

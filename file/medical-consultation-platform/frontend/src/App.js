import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ErrorBoundary from './components/Error/ErrorBoundary';
import Navbar from './components/Navigation/Navbar';
import ProtectedRoute from './components/Navigation/ProtectedRoute';
import { AuthContext } from './context/AuthContext';
import ErrorFallback from './components/Error/ErrorFallback';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [authToken, setAuthToken] = useState(null);
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, role, setRole }}>
      <Router>
        <ErrorBoundary onError={(error, errorInfo) => setError(error)}>
          <Navbar />
          {error ? (
            <ErrorFallback error={error} />
          ) : (
            <React.Suspense fallback={<LoadingSpinner />}>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <ProtectedRoute path="/dashboard" component={DashboardPage} />
                <ProtectedRoute path="/profile" component={ProfilePage} />
                <ProtectedRoute path="/edit-profile" component={EditProfilePage} />
              </Switch>
            </React.Suspense>
          )}
        </ErrorBoundary>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Authcontext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;

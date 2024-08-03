// components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles, ...rest }) => {
  const userRole = localStorage.getItem('role'); // Assume user role is stored in localStorage

  return (
    <Route
      {...rest}
      element={
        allowedRoles.includes(userRole) ? element : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;

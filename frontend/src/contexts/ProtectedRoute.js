import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext'; // ✅ correct import

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext(); // ✅ use hook, not AppContext directly

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

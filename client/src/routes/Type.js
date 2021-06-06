/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../constant/routes';

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    return children;
  }
  return <Navigate to={LOGIN_ROUTE} />;
};

export const AdminOnlyRoute = ({ children }) => {
  const role = localStorage.getItem('role');
  if (role === 'admin') {
    return children;
  }
  return <Navigate to={PROFILE_ROUTE} />;
};
export default {};

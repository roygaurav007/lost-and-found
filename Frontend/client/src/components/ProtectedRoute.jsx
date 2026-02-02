import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAdminOnly = false }) => {
  // This is a placeholder. Your friend will provide real 'auth' logic later.
  const isAuthenticated = true; 
  const userRole = 'admin'; // Change this to 'user' to test the protection

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (isAdminOnly && userRole !== 'admin') return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
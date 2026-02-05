import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 🟢 Listen to the global brain

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, loading } = useAuth(); // Grab user and loading state

  // ⏳ 1. Wait for AuthContext to finish checking localStorage
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-bold animate-pulse">Verifying Session...</p>
      </div>
    );
  }

  // 🚫 2. If no user is found, send them to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🛡️ 3. If the role doesn't match (e.g., student trying to access admin), send home
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // ✅ 4. Access granted
  return children;
};

export default ProtectedRoute;
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportItem from './pages/ReportItem';
import BrowseItems from './pages/BrowseItems';
import AdminDashboard from './pages/AdminDashboard';

// 🛡️ Gatekeeper Component
// For now, change 'isAdmin' to true/false manually to test the protection.
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Placeholder for login check
  const isAdmin = true;        // Placeholder for role check

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<ReportItem />} />
        <Route path="/browse" element={<BrowseItems />} />
        
        {/* 🔒 Protected Admin Route */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />

        <Route path="*" element={
          <div className="text-center py-20 bg-white rounded-3xl m-6 shadow-xl">
            <h1 className="text-9xl font-black text-slate-100">404</h1>
            <p className="text-slate-500 font-bold -mt-10">This page was lost and hasn't been found.</p>
          </div>
        } />
      </Routes>
    </Layout>
  );
}

export default App;
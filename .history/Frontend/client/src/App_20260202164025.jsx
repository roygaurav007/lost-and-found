import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportItem from './pages/ReportItem';
import BrowseItems from './pages/BrowseItems';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  // 💡 Real State: This tracks who is logged in
  const [user, setUser] = useState(null); // null, {role: 'user'}, or {role: 'admin'}

  const login = (role) => setUser({ role });
  const logout = () => setUser(null);

  return (
    // Pass user and logout to Layout so the Navbar can see them
    <Layout user={user} logout={logout}>
      <Toaster position="top-center" /> 
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Pass the login function to the Login page */}
        <Route path="/login" element={<Login onLogin={login} />} />
        
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/report" element={<ReportItem />} />
        
        {/* 🛡️ Secure Gatekeeper: Only allows 'admin' */}
        <Route 
          path="/admin" 
          element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<div className="text-center py-20 font-bold">404: Page Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
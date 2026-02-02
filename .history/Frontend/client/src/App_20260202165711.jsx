import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportItem from './pages/ReportItem';
import BrowseItems from './pages/BrowseItems';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard'; // You will create this file

function App() {
  // 💡 This is your Global State. 
  // null = logged out | { role: 'user' } | { role: 'admin' }
  const [user, setUser] = useState(null); 

  const login = (role) => setUser({ role });
  const logout = () => setUser(null);

  return (
    <Layout user={user} onLogout={logout}>
      <Toaster position="top-center" /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/browse" element={<BrowseItems />} />
        
        {/* 🎓 Student Hub: Only for logged-in users */}
        <Route 
          path="/student-hub" 
          element={user?.role === 'user' ? <UserDashboard /> : <Navigate to="/login" />} 
        />
        
        {/* 🛡️ Admin Panel: Only for logged-in admins */}
        <Route 
          path="/admin" 
          element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
        />

        <Route path="/report" element={<ReportItem />} />
        <Route path="*" element={<div className="text-center py-20 font-bold">404: Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
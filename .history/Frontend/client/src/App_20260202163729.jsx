import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportItem from './pages/ReportItem';
import BrowseItems from './pages/BrowseItems';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  // 💡 Change this to 'false' to test the restricted access
  const isAdmin = true; 

  return (
    <Layout>
      <Toaster position="top-center" /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/report" element={<ReportItem />} />
        
        {/* Only show Admin if isAdmin is true, otherwise kick to Login */}
        <Route 
          path="/admin" 
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<div className="text-center py-20 font-bold">404: Page Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
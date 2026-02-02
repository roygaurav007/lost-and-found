import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ✅ Add this for popups
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportItem from './pages/ReportItem';
// import BrowseItems from './pages/BrowseItems'; // Import this once created

function App() {
  return (
    <Layout>
      {/* 1. Global Notification Popups */}
      <Toaster position="top-center" reverseOrder={false} /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<ReportItem />} />
        
        {/* Placeholder for Browse */}
        <Route path="/browse" element={<div className="text-center py-20 text-2xl font-bold">Browse System Loading...</div>} />

        {/* 2. Catch-all Route (404 Page) */}
        <Route path="*" element={
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-gray-500">Oops! This page doesn't exist.</p>
          </div>
        } />
      </Routes>
    </Layout>
  );
}

export default App;
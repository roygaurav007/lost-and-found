import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportItem from './pages/ReportItem';
import BrowseItems from './pages/BrowseItems'; // New page
import AdminDashboard from './pages/AdminDashboard'; // New page

function App() {
  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<ReportItem />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* 404 Page */}
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
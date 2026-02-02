import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportItem from './pages/ReportItem';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<ReportItem />} />
        <Route path="/browse" element={<div className="text-center py-20 text-2xl font-bold">Browse System Loading...</div>} />
      </Routes>
    </Layout>
  );
}
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import ReportItem from './pages/ReportItem';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Toaster />
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportItem />} />
          {/* We will build Browse next */}
          <Route path="/browse" element={<div className="text-center py-20">Browse Page Coming Soon</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
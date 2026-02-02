import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ReportItem from './pages/ReportItem'; // Import your form

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Toaster position="top-center" />
      
      {/* Simple Navigation for testing */}
      <nav className="p-4 bg-white shadow-sm flex gap-4 justify-center">
        <a href="/" className="text-blue-600 font-bold">Home</a>
        <a href="/report" className="text-blue-600 font-bold">Report Item</a>
        <a href="/browse" className="text-blue-600 font-bold">Browse</a>
      </nav>

      <main className="container mx-auto py-10">
        <Routes>
          <Route path="/" element={
            <div className="text-center">
              <h1 className="text-4xl font-black text-blue-600">FindIt</h1>
              <p className="text-gray-600">Reuniting people with their belongings.</p>
            </div>
          } />
          <Route path="/report" element={<ReportItem />} />
          <Route path="/browse" element={<h1 className="text-2xl text-center">Coming Soon...</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
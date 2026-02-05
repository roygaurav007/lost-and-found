import Signup from './pages/Signup';
// ... other imports

function AppContent() {
  return (
    <Layout>
      <Toaster position="top-center" /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* 🆕 Added Sign Up */}
        <Route path="/browse" element={<BrowseItems />} />
        
        {/* Protected Routes */}
        <Route path="/student-hub" element={<ProtectedRoute allowedRole="user"><UserDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} />

        <Route path="/report" element={<ReportItem />} />
        <Route path="*" element={<div className="py-20 text-center font-bold">404: Not Found</div>} />
      </Routes>
    </Layout>
  );
}
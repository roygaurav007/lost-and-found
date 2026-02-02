import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, PlusCircle, UserCircle, ShieldCheck, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();
  // 💡 Temporary State: Change 'true' to 'false' to see the "Sign In" button
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [userRole, setUserRole] = useState('admin'); 

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate('/'); // Send user back to home
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Search className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">FindIt</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/browse" className="text-slate-500 font-bold hover:text-indigo-600 transition">Browse</Link>
          
          {isLoggedIn ? (
            <>
              {userRole === 'user' && (
                <Link to="/report" className="text-slate-500 font-bold hover:text-indigo-600 transition flex items-center gap-1.5">
                  <PlusCircle size={18} /> Report
                </Link>
              )}
              {userRole === 'admin' && (
                <Link to="/admin" className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl font-black hover:bg-rose-100 transition border border-rose-100">
                  <ShieldCheck size={18} /> Admin Panel
                </Link>
              )}
              <div className="h-6 w-[1px] bg-slate-200 mx-2" />
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-600 font-bold hover:text-rose-500 transition-colors"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-indigo-600 transition shadow-xl shadow-slate-200">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
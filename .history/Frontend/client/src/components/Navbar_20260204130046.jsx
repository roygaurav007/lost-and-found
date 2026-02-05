import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Search, LogOut, ShieldCheck, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: 15 }} className="bg-indigo-600 p-2 rounded-xl text-white">
            <Search size={20} />
          </motion.div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">FindIt</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/browse" className="text-slate-500 font-bold hover:text-indigo-600 transition">Browse</Link>

          {user?.role === 'admin' && (
            <Link to="/admin" className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl font-black border border-rose-100">
              <ShieldCheck size={18} /> Admin Panel
            </Link>
          )}
         
{user ? (
  <button onClick={handleLogout} className="flex items-center gap-2 text-slate-600 font-bold hover:text-rose-500 transition">
    <LogOut size={18} /> Logout
  </button>
) : (
  <div className="flex items-center gap-4">
    <Link to="/signup" className="text-slate-500 font-bold hover:text-indigo-600 transition">
      Sign Up
    </Link>
    <Link to="/login" className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-indigo-600 transition shadow-lg shadow-indigo-100">
      Sign In
    </Link>
  </div>
)}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, PlusCircle, UserCircle, ShieldCheck, LogOut } from 'lucide-react';

const Navbar = () => {
  // 💡 These will eventually be handled by your Global State (Redux/Context)
  // For now, manually toggle these to test your UI:
  const isLoggedIn = true; 
  const userRole = 'admin'; // Options: 'user' or 'admin'

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Animated Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100 transition-colors group-hover:bg-indigo-500"
          >
            <Search className="text-white w-5 h-5" />
          </motion.div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">FindIt</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/browse" className="text-slate-500 font-bold hover:text-indigo-600 transition">Browse</Link>
          
          {/* 📝 USER ONLY: Show Report Link */}
          {isLoggedIn && userRole === 'user' && (
            <Link to="/report" className="text-slate-500 font-bold hover:text-indigo-600 transition flex items-center gap-1.5">
              <PlusCircle size={18} />
              Report
            </Link>
          )}

          {/* 🛡️ ADMIN ONLY: Show Admin Panel with distinct styling */}
          {isLoggedIn && userRole === 'admin' && (
            <Link to="/admin" className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl font-black hover:bg-rose-100 transition border border-rose-100">
              <ShieldCheck size={18} />
              Admin Panel
            </Link>
          )}

          {/* Divider */}
          <div className="h-6 w-[1px] bg-slate-200 mx-2" />

          {/* Auth Button: Switches between Sign In and Logout */}
          {isLoggedIn ? (
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-slate-600 font-bold hover:text-rose-500 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </motion.button>
          ) : (
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link to="/login" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-indigo-600 transition shadow-xl shadow-slate-200">
                <UserCircle size={18} />
                Sign In
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
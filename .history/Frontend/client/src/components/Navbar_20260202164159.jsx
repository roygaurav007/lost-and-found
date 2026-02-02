import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For interactive animations
import { Search, PlusCircle, UserCircle, ShieldCheck } from 'lucide-react';

const Navbar = () => {
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
        <div className="hidden md:flex items-center gap-8">
          <Link to="/browse" className="text-slate-500 font-bold hover:text-indigo-600 transition">Browse</Link>
          <Link to="/report" className="text-slate-500 font-bold hover:text-indigo-600 transition">Report Item</Link>
          
          {/* ✅ The missing Admin door */}
          <Link to="/admin" className="text-slate-500 font-bold hover:text-rose-600 transition flex items-center gap-1.5">
            <ShieldCheck size={18} />
            Admin
          </Link>

          {/* Login Button with Animation */}
          <motion.div whileHover={{ y: -2 }} whileActive={{ scale: 0.95 }}>
            <Link to="/login" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-indigo-600 transition shadow-xl shadow-slate-200">
              <UserCircle size={18} />
              Sign In
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import axiosInstance from "../utils/axios";
import { ArrowRight, Mail, Lock, ShieldCheck, GraduationCap } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // Simple, clean animation
  const containerVars = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  useEffect(() => {
    if (user) {
      user.role === 'admin' ? navigate('/admin') : navigate('/student-hub');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password, role);
    if (success) {
      // Role is determined by the database after login
      user?.role === 'admin' ? navigate('/admin') : navigate('/student-hub');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Portal Login</h2>
            <p className="text-slate-500 font-medium text-sm">Welcome back to FindIt Hub</p>
          </div>
          
          {/* Simple Toggle Switch */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8 relative border border-slate-200">
            <motion.div 
              animate={{ x: role === 'user' ? '0%' : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm"
            />
            <button 
              onClick={() => setRole('user')} 
              className={`flex-1 py-3 text-xs font-black z-10 transition-colors duration-300 ${role === 'user' ? 'text-indigo-600' : 'text-slate-500'}`}
            >
              <GraduationCap size={16} className="inline mr-2" /> STUDENT
            </button>
            <button 
              onClick={() => setRole('admin')} 
              className={`flex-1 py-3 text-xs font-black z-10 transition-colors duration-300 ${role === 'admin' ? 'text-indigo-600' : 'text-slate-500'}`}
            >
              <ShieldCheck size={16} className="inline mr-2" /> ADMIN
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                placeholder="College Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 text-slate-900 rounded-2xl outline-none border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all" 
                required 
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 text-slate-900 rounded-2xl outline-none border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all" 
                required 
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit" 
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all mt-6 shadow-lg shadow-indigo-100"
            >
              Sign In <ArrowRight size={18} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
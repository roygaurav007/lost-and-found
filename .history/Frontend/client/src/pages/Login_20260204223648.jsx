import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Lock, ShieldCheck, GraduationCap } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      user.role === 'admin' ? navigate('/admin') : navigate('/student-hub');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password, role);
    if (success) {
      role === 'admin' ? navigate('/admin') : navigate('/student-hub');
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-indigo-50/30">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-white/70 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-white/40 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-slate-500 mb-8 font-medium">Select your portal to continue</p>
            
            {/* Elegant Role Switcher */}
            <div className="flex bg-slate-200/50 p-1.5 rounded-2xl mb-8 relative border border-slate-100">
              <motion.div 
                animate={{ x: role === 'user' ? 0 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-md"
              />
              <button 
                onClick={() => setRole('user')} 
                className={`flex-1 py-3 text-xs font-black z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${role === 'user' ? 'text-indigo-600' : 'text-slate-500'}`}
              >
                <GraduationCap size={16} /> STUDENT
              </button>
              <button 
                onClick={() => setRole('admin')} 
                className={`flex-1 py-3 text-xs font-black z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${role === 'admin' ? 'text-indigo-600' : 'text-slate-500'}`}
              >
                <ShieldCheck size={16} /> ADMIN
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="group relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="College Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl outline-none border-2 border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all" 
                  required 
                />
              </div>

              <div className="group relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl outline-none border-2 border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all" 
                  required 
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-indigo-100 mt-6"
              >
                Sign In <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'admin') {
      toast.success("Admin Portal Accessed");
      // Logic to redirect to /admin will go here
    } else {
      toast.success("Welcome, User!");
      // Logic to redirect to /report will go here
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-white p-1 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-slate-50"
      >
        <div className="bg-white p-10 rounded-[2.3rem]">
          {/* Role Switcher */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-10 relative">
            <motion.div 
              animate={{ x: role === 'user' ? 0 : '100%' }}
              className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-indigo-600 rounded-xl shadow-lg"
            />
            <button 
              onClick={() => setRole('user')}
              className={`flex-1 py-3 text-sm font-black z-10 transition-colors flex items-center justify-center gap-2 ${role === 'user' ? 'text-white' : 'text-slate-500'}`}
            >
              <User size={16} /> USER
            </button>
            <button 
              onClick={() => setRole('admin')}
              className={`flex-1 py-3 text-sm font-black z-10 transition-colors flex items-center justify-center gap-2 ${role === 'admin' ? 'text-white' : 'text-slate-500'}`}
            >
              <ShieldCheck size={16} /> ADMIN
            </button>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {role === 'admin' ? 'Staff Portal' : 'Student Hub'}
            </h2>
            <p className="text-slate-400 font-medium text-sm mt-2">
              {role === 'admin' ? 'Secure access for verifiers only.' : 'Sign in to report or claim items.'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400" size={18} />
              <input type="email" placeholder="College Email" className="w-full p-4 pl-12 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 transition" required />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400" size={18} />
              <input type="password" placeholder="Password" className="w-full p-4 pl-12 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 transition" required />
            </div>

            <button type="submit" className="group w-full bg-slate-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-600 hover:-translate-y-1 transition-all active:scale-95 shadow-xl shadow-indigo-100">
              {role === 'admin' ? 'Unlock Dashboard' : 'Enter Hub'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
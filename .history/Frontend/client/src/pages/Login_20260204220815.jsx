import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('user');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(role);
    role === 'admin' ? navigate('/admin') : navigate('/student-hub');
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50">
        <h2 className="text-3xl font-black text-center mb-8">Portal Login</h2>
        
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8 relative">
          <motion.div 
            animate={{ x: role === 'user' ? 0 : '100%' }}
            className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-indigo-600 rounded-xl shadow-lg"
          />
          <button onClick={() => setRole('user')} className={`flex-1 py-3 text-sm font-black z-10 transition ${role === 'user' ? 'text-white' : 'text-slate-500'}`}>STUDENT</button>
          <button onClick={() => setRole('admin')} className={`flex-1 py-3 text-sm font-black z-10 transition ${role === 'admin' ? 'text-white' : 'text-slate-500'}`}>ADMIN</button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="College Email" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" required />
          <input type="password" placeholder="Password" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" required />
          <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-600 transition mt-4">
            Sign In <ArrowRight size={18} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
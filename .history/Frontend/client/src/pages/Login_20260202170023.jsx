import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, ShieldCheck, ArrowRight } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('user'); // Toggle between student and admin
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 💡 1. This tells App.jsx to update the 'user' state
    onLogin(role); 
    
    // 💡 2. This physically moves you to the new page
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/student-hub');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50">
        <h2 className="text-3xl font-black text-center mb-8">Portal Login</h2>
        
        {/* Role Selector */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8 relative">
          <motion.div 
            animate={{ x: role === 'user' ? 0 : '100%' }}
            className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-indigo-600 rounded-xl shadow-lg"
          />
          <button 
            onClick={() => setRole('user')}
            className={`flex-1 py-3 text-sm font-black z-10 ${role === 'user' ? 'text-white' : 'text-slate-500'}`}
          >
            STUDENT
          </button>
          <button 
            onClick={() => setRole('admin')}
            className={`flex-1 py-3 text-sm font-black z-10 ${role === 'admin' ? 'text-white' : 'text-slate-500'}`}
          >
            ADMIN
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" required />
          <input type="password" placeholder="Password" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" required />
          <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-600 transition">
            Sign In <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
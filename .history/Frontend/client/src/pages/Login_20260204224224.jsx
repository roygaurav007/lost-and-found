import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Lock, ShieldCheck, GraduationCap, Sparkles } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.15,
        ease: [0, 0.71, 0.2, 1.01] 
      }
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
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
      user.role === 'admin' ? navigate('/admin') : navigate('/student-hub');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#050505] overflow-hidden relative">
      {/* 🎭 Animated Background Aura */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"
      />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md z-10"
      >
        <div className="bg-white/[0.03] backdrop-blur-3xl p-10 rounded-[3.5rem] shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10 relative">
          
          <motion.div variants={itemVars} className="text-center mb-10">
            <div className="inline-flex p-3 bg-indigo-500/10 rounded-2xl mb-4 text-indigo-400">
              <Sparkles size={28} />
            </div>
            <h2 className="text-4xl font-black text-white mb-2 tracking-tighter">Portal Login</h2>
            <p className="text-slate-400 font-medium">Choose your workspace</p>
          </motion.div>
          
          <motion.div variants={itemVars} className="flex bg-white/5 p-1.5 rounded-2xl mb-8 relative border border-white/5">
            <motion.div 
              animate={{ x: role === 'user' ? '0%' : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-indigo-600 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)]"
            />
            <button onClick={() => setRole('user')} className={`flex-1 py-3 text-xs font-black z-10 transition-colors duration-500 ${role === 'user' ? 'text-white' : 'text-slate-500'}`}>STUDENT</button>
            <button onClick={() => setRole('admin')} className={`flex-1 py-3 text-xs font-black z-10 transition-colors duration-500 ${role === 'admin' ? 'text-white' : 'text-slate-500'}`}>ADMIN</button>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-5">
            <motion.div variants={itemVars} className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="email" 
                placeholder="College Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 text-white rounded-2xl outline-none border border-white/10 focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-slate-600" 
                required 
              />
            </motion.div>

            <motion.div variants={itemVars} className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 text-white rounded-2xl outline-none border border-white/10 focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-slate-600" 
                required 
              />
            </motion.div>

            <motion.button 
              variants={itemVars}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(79,70,229,0.4)" }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all mt-6 shadow-xl shadow-indigo-500/10"
            >
              Secure Access <ArrowRight size={18} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
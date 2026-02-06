import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import axiosInstance from "../utils/axios";


const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    
    await register(formData);
    toast.success("Welcome to FindIt!");
    navigate('/student-hub');
  };

  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
        className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50">
        <h2 className="text-3xl font-black text-center mb-2">Create Account</h2>
        <p className="text-slate-500 text-center mb-8 font-medium">Join the student community</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative text-left">
            <User className="absolute left-4 top-4 text-slate-400" size={18} />
            <input type="text" placeholder="Full Name" className="w-full p-4 pl-12 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold" required 
              onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="relative text-left">
            <Mail className="absolute left-4 top-4 text-slate-400" size={18} />
            <input type="email" placeholder="College Email" className="w-full p-4 pl-12 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold" required 
              onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="relative text-left">
            <Lock className="absolute left-4 top-4 text-slate-400" size={18} />
            <input type="password" placeholder="Create Password" className="w-full p-4 pl-12 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold" required 
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
            Sign Up <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-8 text-center text-slate-500 font-bold">
          Already a member? <Link to="/login" className="text-indigo-600 hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
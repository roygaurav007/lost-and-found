import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Package, MapPin, Tag, FileText, Send, Sparkles } from 'lucide-react';

const ReportItem = () => {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(reportSchema),
  });

  // Functional logic remains exactly as you need it
  const onSubmit = async (data) => {
    const token = localStorage.getItem('findit_token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-auth-token': token 
        },
        body: JSON.stringify({
          title: data.itemName, 
          description: data.description,
          category: data.category,
          location: data.location,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Item dispatched to the hub! 🚀");
        reset();
      } else {
        toast.error(result.message || "Dispatch failed.");
      }
    } catch (err) {
      toast.error("Warp drive failure (Connection error).");
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-[#050505] text-white relative overflow-hidden">
      {/* 🎭 Animated Background Auras */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full -z-10"
      />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 rounded-[4rem] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="text-left">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-black tracking-widest mb-4 border border-indigo-500/20"
            >
              <Sparkles size={14} /> NEW REPORT PROTOCOL
            </motion.div>
            <h2 className="text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
              Dispatch Asset
            </h2>
            <p className="text-slate-500 font-medium mt-4 text-lg">Documenting lost or found campus equipment.</p>
          </div>
          
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl border-2 border-white/5 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center font-black text-xl shadow-lg"
              >
                0{i}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-2">
              <Tag size={14} className="text-indigo-500" /> Item Identifier
            </label>
            <input 
              {...register("itemName")} 
              placeholder="e.g. Neural Link Laptop" 
              className="w-full p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all duration-500 text-white placeholder:text-slate-800" 
            />
            {errors.itemName && <p className="text-red-500 text-xs mt-3 ml-4 font-bold tracking-tight">/ {errors.itemName.message}</p>}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-2">
              <MapPin size={14} className="text-indigo-500" /> Sector Location
            </label>
            <input 
              {...register("location")} 
              placeholder="e.g. Lab Sector 7" 
              className="w-full p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all duration-500 text-white placeholder:text-slate-800" 
            />
            {errors.location && <p className="text-red-500 text-xs mt-3 ml-4 font-bold tracking-tight">/ {errors.location.message}</p>}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="md:col-span-2">
            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-2">
              <Package size={14} className="text-indigo-500" /> Asset Classification
            </label>
            <select 
              {...register("category")} 
              className="w-full p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all duration-500 text-white appearance-none cursor-pointer"
            >
              <option value="" className="bg-black">Select Category</option>
              <option value="electronics" className="bg-black">Electronics</option>
              <option value="documents" className="bg-black">Documents</option>
              <option value="wallets" className="bg-black">Wallets/Bags</option>
              <option value="other" className="bg-black">Other</option>
            </select>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="md:col-span-2">
            <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-2">
              <FileText size={14} className="text-indigo-500" /> Data Log / Description
            </label>
            <textarea 
              {...register("description")} 
              className="w-full p-8 bg-white/[0.03] border border-white/5 rounded-[3rem] h-48 focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all duration-500 text-white resize-none placeholder:text-slate-800" 
              placeholder="Record any distinguishing identifiers or damage reports..." 
            />
            {errors.description && <p className="text-red-500 text-xs mt-3 ml-4 font-bold tracking-tight">/ {errors.description.message}</p>}
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(79,70,229,0.3)" }}
            whileTap={{ scale: 0.99 }}
            type="submit" 
            className="md:col-span-2 bg-white text-black py-7 rounded-[2.5rem] font-black text-2xl hover:bg-indigo-400 transition-all duration-500 flex items-center justify-center gap-4 group"
          >
            DISPATCH REPORT <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReportItem;
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Package, MapPin, Tag, FileText, Send, Sparkles } from 'lucide-react';

const ReportItem = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(reportSchema),
  });

  const onSubmit = async (data) => {
    const token = localStorage.getItem('findit_token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
        body: JSON.stringify({
          title: data.itemName, 
          description: data.description,
          category: data.category,
          location: data.location,
        }),
      });
      if (response.ok) {
        toast.success("Data Dispatched to Secure Hub! 🚀");
        reset();
      }
    } catch (err) {
      toast.error("Warp Link Failure.");
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-[#050505] text-white relative overflow-hidden">
      {/* 🎭 Kinetic Background Auras */}
      <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full" />
      <motion.div animate={{ scale: [1.4, 1, 1.4], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 18, repeat: Infinity }} className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl relative z-10"
      >
        <div className="text-left mb-16">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-black tracking-[0.3em] mb-4 border border-indigo-500/20 uppercase">
            <Sparkles size={12} /> Secure Logging Protocol
          </motion.div>
          <h2 className="text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-600 bg-clip-text text-transparent">Dispatch Asset</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {[
            { label: 'Item Identity', icon: <Tag size={14}/>, name: 'itemName', ph: 'e.g. Quantum Laptop' },
            { label: 'Sector Location', icon: <MapPin size={14}/>, name: 'location', ph: 'e.g. Lab Sector 7' }
          ].map((field, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx }}>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-2 flex items-center gap-2">
                {field.icon} {field.label}
              </label>
              <input {...register(field.name)} placeholder={field.ph} className="w-full p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all duration-500 text-white placeholder:text-slate-800" />
            </motion.div>
          ))}

          <motion.div className="md:col-span-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-2">Category Classification</label>
            <select {...register("category")} className="w-full p-6 bg-white/[0.03] border border-white/5 rounded-[2.5rem] focus:border-indigo-500/50 outline-none text-white appearance-none cursor-pointer">
              <option value="" className="bg-black">Select Category</option>
              <option value="electronics" className="bg-black">Electronics</option>
              <option value="documents" className="bg-black">Documents</option>
              <option value="wallets" className="bg-black">Wallets/Bags</option>
            </select>
          </motion.div>

          <motion.div className="md:col-span-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-2">Mission Log / Description</label>
            <textarea {...register("description")} className="w-full p-8 bg-white/[0.03] border border-white/5 rounded-[3rem] h-48 focus:border-indigo-500/50 outline-none text-white resize-none" placeholder="Provide detailed identifiers..." />
          </motion.div>

          <motion.button whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(79,70,229,0.2)" }} whileTap={{ scale: 0.98 }} type="submit" className="md:col-span-2 bg-white text-black py-7 rounded-[2.5rem] font-black text-2xl hover:bg-indigo-400 transition-all flex items-center justify-center gap-4 group">
            INITIATE DISPATCH <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReportItem;
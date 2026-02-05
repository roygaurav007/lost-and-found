import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, MapPin, Tag, FileText, Send, Sparkles, Zap } from 'lucide-react';

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
        toast.success("Item Dispatched Successfully! 🚀");
        reset();
      }
    } catch (err) {
      toast.error("System connection failure.");
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    }
  };

  const inputVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-[#1a1c2c] via-[#4a192c] to-[#121212] relative overflow-hidden">
      {/* 🌌 Animated Cosmic Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ scale: [1.3, 1, 1.3], x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-fuchsia-600/15 blur-[150px] rounded-full"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div 
          variants={cardVariants}
          className="bg-white/[0.07] backdrop-blur-2xl p-8 md:p-16 rounded-[3.5rem] border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.4)]"
        >
          {/* Header with Float Animation */}
          <motion.div className="text-left mb-12 flex flex-col items-start gap-4">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/10 text-indigo-300 rounded-full text-xs font-black tracking-[0.2em] uppercase"
            >
              <Zap size={14} fill="currentColor" /> System Online
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
              Submit <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent underline decoration-indigo-500/30">Report</span>
            </h2>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <motion.div variants={inputVariants}>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-2 flex items-center gap-2">
                <Tag size={12}/> Asset Name
              </label>
              <input {...register("itemName")} placeholder="e.g. Lost Galaxy Tab" className="w-full p-5 bg-black/20 border border-white/10 rounded-2xl focus:border-indigo-400 focus:bg-white/5 outline-none transition-all duration-300 text-white placeholder:text-slate-600" />
              {errors.itemName && <p className="text-fuchsia-400 text-[10px] mt-2 font-bold uppercase tracking-widest ml-2 italic">{errors.itemName.message}</p>}
            </motion.div>

            <motion.div variants={inputVariants}>
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-2 flex items-center gap-2">
                <MapPin size={12}/> Last Known Sector
              </label>
              <input {...register("location")} placeholder="e.g. Wing B, Floor 4" className="w-full p-5 bg-black/20 border border-white/10 rounded-2xl focus:border-indigo-400 focus:bg-white/5 outline-none transition-all duration-300 text-white placeholder:text-slate-600" />
              {errors.location && <p className="text-fuchsia-400 text-[10px] mt-2 font-bold uppercase tracking-widest ml-2 italic">{errors.location.message}</p>}
            </motion.div>

            <motion.div variants={inputVariants} className="md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-2">Category Classification</label>
              <select {...register("category")} className="w-full p-5 bg-black/20 border border-white/10 rounded-2xl focus:border-indigo-400 outline-none text-white appearance-none cursor-pointer">
                <option value="" className="bg-[#1a1c2c]">-- Choose Category --</option>
                <option value="electronics" className="bg-[#1a1c2c]">Electronics</option>
                <option value="documents" className="bg-[#1a1c2c]">Documents</option>
                <option value="wallets" className="bg-[#1a1c2c]">Personal Items</option>
              </select>
            </motion.div>

            <motion.div variants={inputVariants} className="md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-2">Detailed Log</label>
              <textarea {...register("description")} className="w-full p-6 bg-black/20 border border-white/10 rounded-[2rem] h-40 focus:border-indigo-400 outline-none text-white resize-none" placeholder="Describe unique identifiers..." />
              {errors.description && <p className="text-fuchsia-400 text-[10px] mt-2 font-bold uppercase tracking-widest ml-2 italic">{errors.description.message}</p>}
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(79,70,229,0.3)" }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-6 rounded-2xl font-black text-xl hover:brightness-110 transition-all shadow-xl shadow-indigo-500/10 flex items-center justify-center gap-3 group"
            >
              EXECUTE DISPATCH <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ReportItem;
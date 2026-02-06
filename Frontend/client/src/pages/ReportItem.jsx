import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import axiosInstance from "../utils/axios";
import { Package, MapPin, Tag, FileText, Send, Info } from 'lucide-react';

const ReportItem = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(reportSchema),
  });

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

      if (response.ok) {
        toast.success("Item reported successfully!");
        reset();
      } else {
        toast.error("Failed to save report.");
      }
    } catch (err) {
      toast.error("Server connection error.");
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(45%_45%_at_50%_50%,rgba(99,102,241,0.05)_0%,rgba(255,255,255,0)_100%)] bg-slate-50 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-8">
          <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg shadow-indigo-100">
            <Package size={28} />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Report an Item</h2>
            <p className="text-slate-500 font-medium text-sm">Fill in the details to help others find it.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                <Tag size={16} className="text-indigo-500" /> Item Name
              </label>
              <input 
                {...register("itemName")} 
                placeholder="e.g. Blue Backpack" 
                className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none" 
              />
              {errors.itemName && <p className="text-red-500 text-xs font-bold mt-1">{errors.itemName.message}</p>}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
                <MapPin size={16} className="text-indigo-500" /> Location
              </label>
              <input 
                {...register("location")} 
                placeholder="e.g. Canteen Floor 2" 
                className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none" 
              />
              {errors.location && <p className="text-red-500 text-xs font-bold mt-1">{errors.location.message}</p>}
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <Info size={16} className="text-indigo-500" /> Category
            </label>
            <select 
              {...register("category")} 
              className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none appearance-none"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="documents">Documents</option>
              <option value="wallets">Wallets/Bags</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 ml-1">
              <FileText size={16} className="text-indigo-500" /> Description
            </label>
            <textarea 
              {...register("description")} 
              placeholder="Color, brand, unique marks..." 
              className="w-full p-4 bg-slate-50 rounded-2xl h-32 border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none" 
            />
            {errors.description && <p className="text-red-500 text-xs font-bold mt-1">{errors.description.message}</p>}
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit" 
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-xl shadow-indigo-100 mt-4"
          >
            Submit Report <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReportItem;
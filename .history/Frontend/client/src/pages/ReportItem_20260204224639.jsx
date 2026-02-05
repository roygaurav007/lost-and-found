import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Package, MapPin, Tag, FileText, Send } from 'lucide-react';

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
        toast.success("Item reported with style! 🚀");
        reset();
      }
    } catch (err) {
      toast.error("Submission failed.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-50"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-3xl">
            <Package size={32} />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Report Item</h2>
            <p className="text-slate-500 font-medium">Help the community find what's lost</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          <div className="md:col-span-1">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
              <Tag size={16} /> Item Name
            </label>
            <input {...register("itemName")} placeholder="e.g. MacBook Pro" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all" />
            {errors.itemName && <p className="text-red-500 text-xs mt-2 font-semibold">⚠ {errors.itemName.message}</p>}
          </div>

          <div className="md:col-span-1">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
              <MapPin size={16} /> Location
            </label>
            <input {...register("location")} placeholder="e.g. Library Desk 4" className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all" />
            {errors.location && <p className="text-red-500 text-xs mt-2 font-semibold">⚠ {errors.location.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
              <Package size={16} /> Category
            </label>
            <select {...register("category")} className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all appearance-none">
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="documents">Documents</option>
              <option value="wallets">Wallets/Bags</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
              <FileText size={16} /> Full Description
            </label>
            <textarea {...register("description")} className="w-full p-4 bg-slate-50 rounded-3xl h-40 border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all resize-none" placeholder="Add unique details like scratches, cases, or content..." />
            {errors.description && <p className="text-red-500 text-xs mt-2 font-semibold">⚠ {errors.description.message}</p>}
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="md:col-span-2 bg-indigo-600 text-white py-5 rounded-3xl font-black text-lg shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
          >
            Submit Report <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReportItem;
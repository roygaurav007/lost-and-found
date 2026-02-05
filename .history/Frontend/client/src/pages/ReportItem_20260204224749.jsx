import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const ReportItem = () => {
  const { user } = useAuth();
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

      const result = await response.json();

      if (response.ok) {
        toast.success("Item reported successfully!");
        reset();
      } else {
        toast.error(result.message || "Failed to save item.");
      }
    } catch (err) {
      toast.error("Server connection error.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100"
      >
        <h2 className="text-3xl font-black mb-8 text-slate-900 text-left">Report an Item</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
          
          {/* Item Name */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Item Name*</label>
            <input 
              {...register("itemName")} 
              placeholder="e.g., Blue Backpack" 
              className="w-full p-4 bg-slate-50 rounded-2xl outline-none border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all duration-200" 
            />
            {errors.itemName && <p className="text-red-500 text-xs mt-2 font-bold">{errors.itemName.message}</p>}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Location Found/Lost*</label>
            <input 
              {...register("location")} 
              placeholder="e.g., Canteen, Library Floor 2" 
              className="w-full p-4 bg-slate-50 rounded-2xl outline-none border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all duration-200" 
            />
            {errors.location && <p className="text-red-500 text-xs mt-2 font-bold">{errors.location.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Category*</label>
            <select 
              {...register("category")} 
              className="w-full p-4 bg-slate-50 rounded-2xl outline-none border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all duration-200 appearance-none"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="documents">Documents</option>
              <option value="wallets">Wallets/Bags</option>
              <option value="other">Other</option>
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-2 font-bold">{errors.category.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Description*</label>
            <textarea 
              {...register("description")} 
              className="w-full p-4 bg-slate-50 rounded-2xl h-32 outline-none border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all duration-200 resize-none" 
              placeholder="Color, brand, distinguishing marks..." 
            />
            {errors.description && <p className="text-red-500 text-xs mt-2 font-bold">{errors.description.message}</p>}
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit" 
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
          >
            Submit Report
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReportItem;
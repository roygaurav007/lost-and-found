import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const ReportItem = () => {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(reportSchema),
  });

  // 🔍 Debugging: This will show you exactly what's failing in your console
  console.log("Validation Errors:", errors); 

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
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 mt-10">
      <h2 className="text-3xl font-black mb-6 text-slate-900 text-left">Report an Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
        
        {/* Item Name */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Item Name*</label>
          <input {...register("itemName")} placeholder="e.g., Blue Backpack" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition" />
          {errors.itemName && <p className="text-red-500 text-xs mt-1 font-bold">{errors.itemName.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Location Found/Lost*</label>
          <input {...register("location")} placeholder="e.g., Canteen, Library Floor 2" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition" />
          {errors.location && <p className="text-red-500 text-xs mt-1 font-bold">{errors.location.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Category*</label>
          <select {...register("category")} className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 appearance-none">
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="documents">Documents</option>
            <option value="wallets">Wallets/Bags</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1 font-bold">{errors.category.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Description*</label>
          <textarea {...register("description")} className="w-full p-4 bg-slate-50 rounded-2xl h-32 outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Color, brand, distinguishing marks..." />
          {errors.description && <p className="text-red-500 text-xs mt-1 font-bold">{errors.description.message}</p>}
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportItem;
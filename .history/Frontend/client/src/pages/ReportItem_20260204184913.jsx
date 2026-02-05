import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext'; // Import context

const ReportItem = () => {
  const { user } = useAuth(); // Get user for auth verification
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(reportSchema),
  });

  const onSubmit = async (data) => {
    const token = localStorage.getItem('findit_token'); // Retrieve the JWT

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-auth-token': token // Pass token to your backend middleware
        },
        body: JSON.stringify({
          title: data.itemName, // Map frontend 'itemName' to backend 'title'
          description: data.description,
          category: data.category,
          location: data.location || "N/A", // Ensure location is provided
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Item reported successfully and saved to DB!");
        reset();
      } else {
        toast.error(result.message || "Failed to save item.");
      }
    } catch (err) {
      toast.error("Server connection error.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50">
      <h2 className="text-3xl font-black mb-6 text-slate-900">Report an Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Item Name*</label>
          <input {...register("itemName")} placeholder="e.g., Blue Backpack" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" />
          {errors.itemName && <p className="text-red-500 text-xs mt-1">{errors.itemName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Category*</label>
          <select {...register("category")} className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="documents">Documents</option>
            <option value="wallets">Wallets/Bags</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Description*</label>
          <textarea {...register("description")} className="w-full p-4 bg-slate-50 rounded-2xl h-32 outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Color, brand, distinguishing marks..." />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black hover:bg-blue-700 transition shadow-lg shadow-blue-100">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportItem;
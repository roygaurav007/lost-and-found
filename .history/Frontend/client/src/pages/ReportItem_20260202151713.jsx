import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema } from '../utils/formSchemas';
import toast from 'react-hot-toast';

const ReportItem = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(reportSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data to send to your friend:", data);
    toast.success("Item reported successfully!");
    reset(); // Clear the form
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Report an Item</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Item Name*</label>
          <input 
            {...register("itemName")}
            placeholder="e.g., Blue Backpack"
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.itemName && <p className="text-red-500 text-xs mt-1">{errors.itemName.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category*</label>
          <select {...register("category")} className="w-full mt-1 p-2 border rounded-lg">
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="documents">Documents</option>
            <option value="wallets">Wallets/Bags</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description*</label>
          <textarea 
            {...register("description")}
            className="w-full mt-1 p-2 border rounded-lg h-24"
            placeholder="Color, brand, distinguishing marks..."
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportItem;
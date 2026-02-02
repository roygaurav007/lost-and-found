import { motion } from 'framer-motion';
import { PlusCircle, Clock, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Student Hub</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your activity, reports, and active claims.</p>
        </div>
        <Link to="/report" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition shadow-xl shadow-indigo-100 active:scale-95">
          <PlusCircle size={20} /> Report New Item
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Section: My Reports */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-100 border border-slate-50">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2 text-indigo-600">
            <Package size={22} /> My Reported Items
          </h2>
          <div className="space-y-4 text-slate-400 font-medium italic p-8 border-2 border-dashed border-slate-100 rounded-3xl text-center">
            You haven't reported any items yet.
          </div>
        </div>

        {/* Section: My Claims */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-100 border border-slate-50">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2 text-emerald-600">
            <CheckCircle size={22} /> My Claims
          </h2>
          <div className="space-y-4 text-slate-400 font-medium italic p-8 border-2 border-dashed border-slate-100 rounded-3xl text-center">
            No active claims found.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserDashboard;
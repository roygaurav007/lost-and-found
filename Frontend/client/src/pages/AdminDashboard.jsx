import { motion } from 'framer-motion';
import { ShieldCheck, XCircle, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="bg-white rounded-[3rem] shadow-2xl shadow-slate-100 border border-slate-50 overflow-hidden mt-10"
    >
      <div className="p-10 bg-gradient-to-r from-indigo-600 to-violet-700 text-white flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter flex items-center gap-3">
            <ShieldCheck size={32} /> Verification Desk
          </h2>
          <p className="text-indigo-100 font-medium mt-1">Approve legitimate reports for the Student Hub.</p>
        </div>
      </div>

      <div className="p-8 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
              <th className="p-4">Item Identity</th>
              <th className="p-4">Evidence/User</th>
              <th className="p-4">Status</th>
              <th className="p-4">Admin Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            <tr className="group hover:bg-slate-50/50 transition">
              <td className="p-4">
                <p className="font-black text-slate-800 text-lg">Silver Rolex Watch</p>
                <p className="text-xs text-slate-400 font-bold">Serial ID: RX-9902</p>
              </td>
              <td className="p-4 text-sm font-bold text-slate-500 underline decoration-blue-200">royga@college.edu</td>
              <td className="p-4">
                <span className="bg-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase ring-1 ring-amber-200">Pending</span>
              </td>
              <td className="p-4 flex gap-3">
                <button className="bg-emerald-500 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-100 transition flex items-center gap-2">
                  Verify <ShieldCheck size={14} />
                </button>
                <button className="bg-slate-100 text-slate-400 px-4 py-2 rounded-xl text-xs font-bold hover:bg-rose-50 hover:text-rose-500 transition">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
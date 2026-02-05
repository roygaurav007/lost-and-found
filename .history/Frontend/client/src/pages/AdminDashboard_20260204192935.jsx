import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trash2, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📡 Fetch live claims on load
  const fetchClaims = async () => {
    const token = localStorage.getItem('findit_token');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/items/admin/claims`, {
        headers: { 'x-auth-token': token }
      });
      const data = await res.json();
      if (res.ok) setClaims(data);
    } catch (err) {
      toast.error("Failed to load claims.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchClaims(); }, []);

  // ✅ Approve logic
  const handleVerify = async (id) => {
    const token = localStorage.getItem('findit_token');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/items/admin/claims/${id}/approve`, {
        method: 'PUT',
        headers: { 'x-auth-token': token }
      });
      if (res.ok) {
        toast.success("Verification successful!");
        fetchClaims(); // Refresh list
      }
    } catch (err) {
      toast.error("Approval failed.");
    }
  };

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
          <p className="text-indigo-100 font-medium mt-1">Approve legitimate returns for the Student Hub.</p>
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
            {claims.length > 0 ? claims.map((claim) => (
              <tr key={claim._id} className="group hover:bg-slate-50/50 transition">
                <td className="p-4">
                  <p className="font-black text-slate-800 text-lg">{claim.itemId?.title || 'Unknown Item'}</p>
                  <p className="text-xs text-slate-400 font-bold">Proof: {claim.proofDetails}</p>
                </td>
                <td className="p-4">
                   <p className="text-sm font-bold text-slate-800">{claim.claimantId?.name}</p>
                   <p className="text-xs text-slate-400">{claim.claimantId?.email}</p>
                </td>
                <td className="p-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ring-1 ${
                    claim.status === 'pending' ? 'bg-amber-100 text-amber-600 ring-amber-200' : 'bg-emerald-100 text-emerald-600 ring-emerald-200'
                  }`}>
                    {claim.status}
                  </span>
                </td>
                <td className="p-4 flex gap-3">
                  {claim.status === 'pending' && (
                    <button 
                      onClick={() => handleVerify(claim._id)}
                      className="bg-emerald-500 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-emerald-600 transition flex items-center gap-2"
                    >
                      Verify <CheckCircle size={14} />
                    </button>
                  )}
                  <button className="bg-slate-100 text-slate-400 px-4 py-2 rounded-xl text-xs font-bold hover:bg-rose-50 hover:text-rose-500 transition">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="p-10 text-center text-slate-400 font-bold">No claims pending verification.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
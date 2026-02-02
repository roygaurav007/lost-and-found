const AdminDashboard = () => {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-100 border border-slate-50 overflow-hidden">
      <div className="p-8 bg-indigo-600 text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black">Admin Management</h2>
          <p className="text-indigo-100 text-sm font-medium">Verify reports and manage claims</p>
        </div>
        <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md font-bold text-sm">
          Total Items: 124
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-50 text-slate-400 text-xs font-black uppercase tracking-widest">
              <th className="p-6">Item Details</th>
              <th className="p-6">Reported By</th>
              <th className="p-6">Status</th>
              <th className="p-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm font-bold text-slate-600">
            <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition">
              <td className="p-6 font-black text-slate-800">MacBook Air M2</td>
              <td className="p-6">student.2026@college.edu</td>
              <td className="p-6 text-amber-500">Pending</td>
              <td className="p-6 flex gap-2">
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition">Approve</button>
                <button className="px-4 py-2 bg-rose-100 text-rose-600 rounded-lg hover:bg-rose-200 transition">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
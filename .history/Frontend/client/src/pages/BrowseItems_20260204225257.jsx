import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Clock, ShieldCheck, Filter, X } from 'lucide-react';
import toast from 'react-hot-toast';

const BrowseItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  // 🆕 States for the Claim Modal
  const [selectedItem, setSelectedItem] = useState(null); 
  const [submitting, setSubmitting] = useState(false);
  const [claimData, setClaimData] = useState({ description: '', proofDetails: '' });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/items`);
        const data = await response.json();
        if (response.ok) setItems(data);
        else toast.error("Failed to load campus items.");
      } catch (err) {
        toast.error("Server connection error.");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // 📡 Handle Claim Submission
  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const token = localStorage.getItem('findit_token');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/items/${selectedItem._id}/claim`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-auth-token': token 
        },
        body: JSON.stringify(claimData)
      });

      if (res.ok) {
        toast.success("Claim submitted! Wait for Admin verification.");
        setSelectedItem(null); // Close modal
        setClaimData({ description: '', proofDetails: '' }); // Reset form
      } else {
        const errData = await res.json();
        toast.error(errData.message || "Failed to submit claim.");
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="h-screen flex items-center justify-center font-black text-2xl animate-pulse text-indigo-600">
      Syncing Community Board...
    </div>
  );

  return (
    <div className="space-y-12 py-8 relative">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Community Board</h1>
          <p className="text-slate-500 font-medium mt-2">Real-time updates from across campus.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search items..." 
              className="w-full p-3.5 pl-12 bg-white rounded-2xl shadow-xl shadow-slate-100 border-none focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-white p-3.5 rounded-2xl shadow-xl shadow-slate-100 hover:bg-slate-50 border border-slate-50"><Filter size={20} className="text-slate-600" /></button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map((item, i) => (
          <motion.div 
            key={item._id}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="group bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-50 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.category === 'electronics' ? 'from-indigo-500 to-blue-600' : 'from-rose-400 to-pink-600'} opacity-10 rounded-bl-[5rem] -mr-8 -mt-8`} />
            <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 bg-indigo-50 text-indigo-700 ring-indigo-200">{item.category}</span>
            <h3 className="text-2xl font-black text-slate-800 mt-6 tracking-tight">{item.title}</h3>
            <p className="text-slate-500 mt-2 text-sm line-clamp-2 font-medium">{item.description}</p>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-3 text-slate-500 font-bold text-sm"><MapPin size={18} className="text-indigo-500" /> {item.location}</p>
              <p className="flex items-center gap-3 text-slate-400 font-bold text-xs"><Clock size={16} /> {new Date(item.createdAt).toLocaleDateString()}</p>
            </div>

            {/* 🆕 Button now triggers the modal */}
            <button 
              onClick={() => setSelectedItem(item)}
              className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Contact to Claim <ShieldCheck size={20} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* 🚀 THE CLAIM EVIDENCE MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg p-10 rounded-[3rem] shadow-2xl relative"
            >
              <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-600"><X size={24} /></button>
              
              <h2 className="text-3xl font-black mb-2">Claim {selectedItem.title}</h2>
              <p className="text-slate-500 mb-8 font-medium">Please provide proof to the Admin for verification.</p>

              <form onSubmit={handleClaimSubmit} className="space-y-4">
                <textarea 
                  placeholder="Explain how you lost it or identifying marks..." 
                  className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 h-32 font-bold" 
                  required
                  onChange={(e) => setClaimData({...claimData, description: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Specific details (Serial #, Stickers, etc.)" 
                  className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold"
                  onChange={(e) => setClaimData({...claimData, proofDetails: e.target.value})}
                />
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-indigo-100 mt-4 disabled:bg-slate-300"
                >
                  {submitting ? "Submitting..." : "Submit Proof to Admin"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrowseItems;
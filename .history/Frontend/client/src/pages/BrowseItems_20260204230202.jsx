import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Clock, ShieldCheck, Filter, X, Package } from 'lucide-react';
import toast from 'react-hot-toast';

const BrowseItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); 
  const [submitting, setSubmitting] = useState(false);
  const [claimData, setClaimData] = useState({ description: '', proofDetails: '' });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/items`);
        const data = await response.json();
        if (response.ok) setItems(data);
      } catch (err) {
        toast.error("Database sync failed.");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/items/${selectedItem._id}/claim`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('findit_token') 
        },
        body: JSON.stringify(claimData)
      });
      if (res.ok) {
        toast.success("Claim filed successfully!");
        setSelectedItem(null);
      }
    } catch (err) {
      toast.error("Network error.");
    } finally {
      setSubmitting(false);
    }
  };

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="h-screen flex items-center justify-center font-black text-indigo-600 animate-pulse">LOADING BOARD...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Simple White Header */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-6 text-left">
          <div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Community Board</h1>
            <p className="text-slate-500 font-medium mt-2">Verified reports from campus sectors.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search items..." 
                className="w-full p-4 pl-12 bg-white rounded-2xl shadow-sm border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-600 font-bold transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <motion.div 
              key={item._id}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Package size={20} />
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 mb-4">{item.category}</span>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 mt-2 text-sm line-clamp-2 font-medium flex-grow leading-relaxed">{item.description}</p>
              
              <div className="w-full mt-6 pt-6 border-t border-slate-100 space-y-3">
                <p className="flex items-center gap-2 text-slate-700 font-bold text-sm"><MapPin size={16} className="text-indigo-500" /> {item.location}</p>
                <p className="flex items-center gap-2 text-slate-400 font-bold text-xs"><Clock size={14} /> Reported {new Date(item.createdAt).toLocaleDateString()}</p>
              </div>

              <button 
                onClick={() => setSelectedItem(item)}
                className="w-full mt-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
              >
                Claim Item <ShieldCheck size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Proof Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-sm">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white w-full max-w-lg p-10 rounded-[3rem] shadow-2xl relative text-left"
              >
                <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={24} /></button>
                <h2 className="text-3xl font-black text-slate-900 mb-2 text-left">Claim {selectedItem.title}</h2>
                <p className="text-slate-500 mb-8 font-medium italic text-sm text-left">Admin verification is required for security.</p>

                <form onSubmit={handleClaimSubmit} className="space-y-4">
                  <textarea 
                    placeholder="Provide ownership details..." 
                    className="w-full p-4 bg-slate-50 rounded-2xl outline-none border-2 border-transparent focus:border-indigo-600 focus:bg-white transition-all h-32 font-bold text-slate-900 resize-none" 
                    required
                    onChange={(e) => setClaimData({...claimData, description: e.target.value})}
                  />
                  <button type="submit" disabled={submitting} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black shadow-xl hover:bg-indigo-600 transition-all">
                    {submitting ? "Processing..." : "Submit to Admin"}
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BrowseItems;
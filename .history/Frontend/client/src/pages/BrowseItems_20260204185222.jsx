import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Clock, ShieldCheck, Filter } from 'lucide-react';
import toast from 'react-hot-toast';

const BrowseItems = () => {
  const [items, setItems] = useState([]); // State for live items from DB
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 📡 Fetch items from your real backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/items`);
        const data = await response.json();
        
        if (response.ok) {
          setItems(data);
        } else {
          toast.error("Failed to load campus items.");
        }
      } catch (err) {
        toast.error("Server connection error.");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // 🔍 Filter items based on the search bar
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
    <div className="space-y-12 py-8">
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
              placeholder="Search items or locations..." 
              className="w-full p-3.5 pl-12 bg-white rounded-2xl shadow-xl shadow-slate-100 border-none focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-white p-3.5 rounded-2xl shadow-xl shadow-slate-100 hover:bg-slate-50 transition border border-slate-50">
            <Filter size={20} className="text-slate-600" />
          </button>
        </div>
      </header>

      {/* Grid of Real Items from MongoDB */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.length > 0 ? filteredItems.map((item, i) => (
          <motion.div 
            key={item._id} // Using MongoDB _id
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white p-6 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-slate-50 relative overflow-hidden"
          >
            {/* Dynamic visual indicator based on status */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.category === 'electronics' ? 'from-indigo-500 to-blue-600' : 'from-rose-400 to-pink-600'} opacity-10 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-500`} />
            
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 bg-indigo-50 text-indigo-700 ring-indigo-200`}>
              {item.category}
            </span>
            
            <h3 className="text-2xl font-black text-slate-800 mt-6 group-hover:text-indigo-600 transition tracking-tight">
              {item.title}
            </h3>
            
            <p className="text-slate-500 mt-2 text-sm line-clamp-2 font-medium">
              {item.description}
            </p>

            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                <MapPin size={18} className="text-indigo-500" /> {item.location}
              </p>
              <p className="flex items-center gap-3 text-slate-400 font-bold text-xs">
                <Clock size={16} /> Reported on {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>

            <button className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-indigo-600 shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95">
              Contact to Claim <ShieldCheck size={20} />
            </button>
          </motion.div>
        )) : (
          <div className="col-span-full py-20 text-center font-bold text-slate-400">
            No items found on the board yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseItems;
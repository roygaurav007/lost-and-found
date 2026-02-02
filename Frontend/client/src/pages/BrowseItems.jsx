import { motion } from 'framer-motion';
import { MapPin, Search, Clock, ShieldCheck, Filter } from 'lucide-react';

const MOCK_ITEMS = [
  { id: 1, name: "MacBook Pro M2", type: "Lost", loc: "Library Hall", time: "2h ago", color: "from-indigo-500 to-blue-600" },
  { id: 2, name: "University ID Card", type: "Found", loc: "Canteen", time: "5h ago", color: "from-emerald-400 to-teal-500" },
  { id: 3, name: "Sony Headphones", type: "Lost", loc: "Gymnasium", time: "1d ago", color: "from-rose-400 to-pink-600" },
  { id: 4, name: "HP Pavilion Laptop", type: "Lost", loc: "Block C", time: "3h ago", color: "from-amber-400 to-orange-500" },
  { id: 5, name: "Leather Wallet", type: "Found", loc: "Student Union", time: "6h ago", color: "from-violet-400 to-purple-600" },
];

const BrowseItems = () => {
  return (
    <div className="space-y-12 py-8">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Community Board</h1>
          <p className="text-slate-500 font-medium mt-2">Real-time lost and found updates across campus.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input type="text" placeholder="Search for items..." className="w-full p-3.5 pl-12 bg-white rounded-2xl shadow-xl shadow-slate-100 border-none focus:ring-2 focus:ring-indigo-500 outline-none font-medium" />
          </div>
          <button className="bg-white p-3.5 rounded-2xl shadow-xl shadow-slate-100 hover:bg-slate-50 transition border border-slate-50">
            <Filter size={20} className="text-slate-600" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {MOCK_ITEMS.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white p-6 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-slate-50 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-20 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-500`} />
            
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ${item.type === 'Found' ? 'bg-emerald-50 text-emerald-700 ring-emerald-200' : 'bg-rose-50 text-rose-700 ring-rose-200'}`}>
              {item.type}
            </span>
            
            <h3 className="text-2xl font-black text-slate-800 mt-6 group-hover:text-indigo-600 transition tracking-tight">{item.name}</h3>
            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-3 text-slate-500 font-bold text-sm"><MapPin size={18} className="text-indigo-500" /> {item.loc}</p>
              <p className="flex items-center gap-3 text-slate-400 font-bold text-xs"><Clock size={16} /> {item.time}</p>
            </div>

            <button className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-indigo-600 shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3 active:scale-95">
              Contact to Claim <ShieldCheck size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrowseItems;
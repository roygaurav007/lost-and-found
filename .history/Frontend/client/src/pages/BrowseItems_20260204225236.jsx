import { motion } from 'framer-motion';
import { Search, MapPin, Clock, Tag } from 'lucide-react';

const Browse = ({ items }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Community Board</h2>
            <p className="text-slate-500 font-medium mt-2">All items currently reported on campus.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search items..." 
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items?.map((item, index) => (
            <motion.div 
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col items-start text-left"
            >
              <div className="w-full h-48 bg-slate-100 rounded-3xl mb-6 flex items-center justify-center text-slate-400">
                <Tag size={40} />
              </div>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-wider mb-4">
                {item.category}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-6">{item.description}</p>
              
              <div className="mt-auto w-full pt-6 border-t border-slate-50 space-y-3">
                <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
                  <MapPin size={16} className="text-indigo-500" /> {item.location}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Clock size={14} /> Reported on {new Date(item.createdAt).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
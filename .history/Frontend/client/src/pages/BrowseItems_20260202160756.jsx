import { motion } from 'framer-motion';
import { MapPin, Tag, Clock } from 'lucide-react';

const MOCK_DATA = [
  { id: 1, name: "HP Laptop", type: "Lost", loc: "Library", color: "from-rose-400 to-red-500" },
  { id: 2, name: "Wallet", type: "Found", loc: "Canteen", color: "from-teal-400 to-emerald-500" },
  { id: 3, name: "College ID", type: "Lost", loc: "Exam Hall", color: "from-amber-400 to-orange-500" },
];

const BrowseItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {MOCK_DATA.map((item, i) => (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          key={item.id} 
          className="bg-white p-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all border border-gray-100"
        >
          <div className={`h-32 w-full rounded-2xl bg-gradient-to-br ${item.color} mb-4`} />
          <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">
            {item.type}
          </span>
          <h3 className="text-xl font-bold mt-2">{item.name}</h3>
          <p className="text-gray-500 text-sm flex items-center gap-1"><MapPin size={14}/> {item.loc}</p>
          <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition">
            Contact to Claim
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default BrowseItems;
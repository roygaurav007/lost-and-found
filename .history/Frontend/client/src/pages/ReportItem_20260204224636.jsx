// src/pages/ReportItem.jsx logic stays same, update the wrapper and inputs
return (
  <div className="min-h-screen py-16 px-4 bg-[#0a0a0c] text-white">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="text-left">
          <motion.h2 
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="text-5xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent"
          >
            New Report
          </motion.h2>
          <p className="text-slate-500 font-medium mt-2">Documenting lost or found assets</p>
        </div>
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0a0a0c] bg-indigo-600 flex items-center justify-center font-bold text-xs">
              0{i}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Update Input Styles */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">General Info</label>
          <input {...register("itemName")} placeholder="Item Name" className="w-full p-5 bg-white/5 border border-white/5 rounded-[2rem] focus:border-indigo-500 outline-none transition-all placeholder:text-slate-700" />
        </div>
        
        {/* ... other inputs with similar bg-white/5 styles ... */}
        
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit" 
          className="md:col-span-2 bg-white text-black py-6 rounded-[2rem] font-black text-xl hover:bg-indigo-400 transition-colors"
        >
          Dispatch Report
        </motion.button>
      </form>
    </motion.div>
  </div>
);
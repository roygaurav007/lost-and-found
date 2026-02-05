// ... inside your Navbar component where you handle !user case
{user ? (
  <button onClick={handleLogout} className="flex items-center gap-2 text-slate-600 font-bold hover:text-rose-500 transition">
    <LogOut size={18} /> Logout
  </button>
) : (
  <div className="flex items-center gap-4">
    <Link to="/signup" className="text-slate-500 font-bold hover:text-indigo-600 transition">
      Sign Up
    </Link>
    <Link to="/login" className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-indigo-600 transition shadow-lg shadow-indigo-100">
      Sign In
    </Link>
  </div>
)}
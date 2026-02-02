const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="...">
      {/* ... logo code ... */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/browse">Browse</Link>

        {/* 🛡️ Show Admin link ONLY if Admin is logged in */}
        {user?.role === 'admin' && (
          <Link to="/admin" className="bg-rose-50 text-rose-600 px-4 py-2 rounded-xl font-black border border-rose-100 flex items-center gap-2">
            <ShieldCheck size={18} /> Admin
          </Link>
        )}

        {/* 🎓 Show Student Hub link ONLY if Student is logged in */}
        {user?.role === 'user' && (
          <Link to="/student-hub" className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl font-black border border-indigo-100 flex items-center gap-2">
            <LayoutDashboard size={18} /> Student Hub
          </Link>
        )}

        {user ? (
          <button onClick={onLogout} className="...">Logout</button>
        ) : (
          <Link to="/login" className="...">Sign In</Link>
        )}
      </div>
    </nav>
  );
};
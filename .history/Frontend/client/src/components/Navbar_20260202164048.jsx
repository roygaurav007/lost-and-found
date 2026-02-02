const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="...">
      {/* ... logo ... */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/browse">Browse</Link>
        
        {user ? (
          <>
            {user.role === 'admin' && <Link to="/admin" className="...">Admin Panel</Link>}
            <button onClick={onLogout} className="...">Logout</button>
          </>
        ) : (
          <Link to="/login" className="...">Sign In</Link>
        )}
      </div>
    </nav>
  );
};
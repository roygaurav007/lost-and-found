import { Link } from 'react-router-dom';
import { Search, PlusCircle, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Search className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tight">FindIt</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-600 font-semibold">
          <Link to="/browse" className="hover:text-blue-600 transition">Browse</Link>
          <Link to="/report" className="hover:text-blue-600 transition">Report Item</Link>
          <Link to="/login" className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-sm">
            <UserCircle size={18} />
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
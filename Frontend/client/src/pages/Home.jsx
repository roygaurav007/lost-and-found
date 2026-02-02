import { Link } from 'react-router-dom';
import { Search, PlusCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Visual Badge */}
      <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
        ✨ Trusted by 500+ Organizations
      </div>
      
      <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
        Lost Something? <br /> 
        <span className="text-blue-600">We’ll Help You Find It</span>
      </h1>
      
      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        A centralized platform for organizations to manage lost and found items. 
        Report, track, and reunite belongings with their rightful owners.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link to="/report" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          <PlusCircle size={20} />
          Report Lost Item
        </Link>
        <Link to="/browse" className="flex items-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition">
          <Search size={20} />
          Browse Found Items
        </Link>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-12 mt-20 border-t border-gray-100 pt-12">
        <div>
          <p className="text-3xl font-black text-gray-900">12K+</p>
          <p className="text-gray-500 font-medium">Items Reunited</p>
        </div>
        <div>
          <p className="text-3xl font-black text-gray-900">500+</p>
          <p className="text-gray-500 font-medium">Organizations</p>
        </div>
        <div>
          <p className="text-3xl font-black text-gray-900">98%</p>
          <p className="text-gray-500 font-medium">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
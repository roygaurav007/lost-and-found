const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-10 rounded-3xl shadow-xl shadow-blue-100 border border-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-500 mt-2">Sign in to manage your reported items</p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
          <input type="email" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition outline-none" placeholder="name@college.edu" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
          <input type="password" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition outline-none" placeholder="••••••••" />
        </div>
        <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-lg shadow-blue-100">
          Sign In
        </button>
      </form>
      
      <p className="text-center mt-6 text-gray-500 text-sm">
        Don't have an account? <span className="text-blue-600 font-bold cursor-pointer">Register now</span>
      </p>
    </div>
  );
};

export default Login;
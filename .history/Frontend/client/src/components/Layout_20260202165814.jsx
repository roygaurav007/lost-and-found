import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, user, onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Passes the 'user' and 'onLogout' props directly to the Navbar 
          so it can dynamically hide/show the Admin and Student Hub links.
      */}
      <Navbar user={user} onLogout={onLogout} />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
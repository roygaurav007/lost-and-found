const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
        <div>
          <h3 className="text-gray-900 font-black text-xl mb-4 tracking-tight">FindIt</h3>
          <p className="text-sm leading-relaxed">Making it easy to reunite people with their lost belongings through smart technology and community collaboration.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/browse" className="hover:text-blue-600 transition">Browse Items</a></li>
            <li><a href="/report" className="hover:text-blue-600 transition">Report Lost Item</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
          <p className="text-sm">support@findit.com</p>
          <p className="text-sm">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center mt-10 text-xs text-gray-400">
        © 2026 FindIt. Built with passion for students.
      </div>
    </footer>
  );
};

export default Footer;
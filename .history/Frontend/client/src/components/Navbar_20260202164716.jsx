i
          <motion.div whileHover={{ y: -2 }} whileActive={{ scale: 0.95 }}>
            <Link to="/login" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-indigo-600 transition shadow-xl shadow-slate-200">
              <UserCircle size={18} />
              Sign In
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
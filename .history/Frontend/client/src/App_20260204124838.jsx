

          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
            Create Account <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-8 text-center text-slate-500 font-bold">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('findit_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  // 🔐 Logic for safe API calls
  const handleAuthResponse = async (response) => {
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textError = await response.text();
      console.error("Non-JSON Error from Server:", textError);
      throw new Error("Server error: Check if backend is running on port 5000");
    }
    return await response.json();
  };

  const login = async (email, password) => {
    try {
      // ✅ Added '/api' prefix to match server.js
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await handleAuthResponse(response);

      if (!response.ok) throw new Error(data.message || 'Login failed');

      setUser(data.user);
      localStorage.setItem('findit_token', data.token);
      localStorage.setItem('findit_user', JSON.stringify(data.user));
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  const register = async (userData) => {
    try {
      // ✅ Added '/api' prefix to match server.js
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await handleAuthResponse(response);

      if (!response.ok) throw new Error(data.message || 'Registration failed');

      setUser(data.user);
      localStorage.setItem('findit_token', data.token);
      localStorage.setItem('findit_user', JSON.stringify(data.user));
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('findit_user');
    localStorage.removeItem('findit_token');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
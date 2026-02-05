import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Persistence: Check for an existing session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('findit_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  // 🔐 Updated Login: Now accepts credentials and talks to the API
  const login = async (email, password, role) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Login failed');

      // Success logic
      setUser(data.user);
      localStorage.setItem('findit_token', data.token); // Store the JWT token
      localStorage.setItem('findit_user', JSON.stringify(data.user));
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  // 📝 Updated Register: Sends user data to the backend
  const register = async (userData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

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
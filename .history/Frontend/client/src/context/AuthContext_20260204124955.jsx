import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Persistence: Check if a user is already logged in when the app starts
  useEffect(() => {
    const savedUser = localStorage.getItem('findit_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    // 🔌 BACKEND CONNECT POINT: Replace with real API call later
    const mockUser = { email, role, name: "Gourav" };
    setUser(mockUser);
    localStorage.setItem('findit_user', JSON.stringify(mockUser));
    return true;
  };

  const register = async (userData) => {
    // 🔌 BACKEND CONNECT POINT: axios.post('/api/register', userData)
    const mockUser = { ...userData, role: 'user' }; // Default role for sign-up
    setUser(mockUser);
    localStorage.setItem('findit_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('findit_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
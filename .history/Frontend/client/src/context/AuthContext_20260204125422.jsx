import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('findit_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const login = async (role) => {
    const mockUser = { role, email: role === 'admin' ? 'admin@college.edu' : 'student@college.edu' };
    setUser(mockUser);
    localStorage.setItem('findit_user', JSON.stringify(mockUser));
    return true;
  };

  // 🆕 Added Register Function
  const register = async (userData) => {
    // 🔌 BACKEND CONNECT POINT: Replace with axios.post('/api/register', userData) later
    const mockUser = { ...userData, role: 'user' }; // Default to 'user' role
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
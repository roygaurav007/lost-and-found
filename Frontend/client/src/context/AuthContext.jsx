import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Persistence: Keeps you logged in even if you refresh the page
  useEffect(() => {
    const savedUser = localStorage.getItem('findit_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const login = async (role) => {
    // 🔌 BACKEND CONNECT POINT:
    // Later: const res = await axios.post('/api/login', { role });
    const mockUser = { role, email: role === 'admin' ? 'admin@college.edu' : 'student@college.edu' };
    setUser(mockUser);
    localStorage.setItem('findit_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('findit_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// // // // import { createContext, useContext, useState, useEffect } from 'react';
// // // // import toast from 'react-hot-toast';

// // // // const AuthContext = createContext();

// // // // export const AuthProvider = ({ children }) => {
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   const API_URL = import.meta.env.VITE_API_URL;

// // // //   useEffect(() => {
// // // //     const savedUser = localStorage.getItem('findit_user');
// // // //     if (savedUser) {
// // // //       setUser(JSON.parse(savedUser));
// // // //     }
// // // //     setLoading(false);
// // // //   }, []);

// // // //   const handleAuthResponse = async (response) => {
// // // //     const contentType = response.headers.get('content-type');
// // // //     if (!contentType || !contentType.includes('application/json')) {
// // // //       const text = await response.text();
// // // //       console.error("NON-JSON RESPONSE:", text);
// // // //       throw new Error("Backend API path wrong or server error");
// // // //     }
// // // //     return response.json();
// // // //   };

// // // //   // ✅ LOGIN
// // // //   const login = async (email, password) => {
// // // //     try {
// // // //       const response = await fetch(`${API_URL}/api/auth/login`, {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({ email, password })
// // // //       });

// // // //       const data = await handleAuthResponse(response);

// // // //       if (!response.ok) throw new Error(data.message);

// // // //       setUser(data.user);
// // // //       localStorage.setItem('findit_token', data.token);
// // // //       localStorage.setItem('findit_user', JSON.stringify(data.user));

// // // //       toast.success('Login successful');
// // // //       return true;
// // // //     } catch (err) {
// // // //       toast.error(err.message);
// // // //       return false;
// // // //     }
// // // //   };

// // // //   // ✅ REGISTER
// // // //   const register = async (userData) => {
// // // //     try {
// // // //       const response = await fetch(`${API_URL}/api/auth/register`, {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(userData)
// // // //       });

// // // //       const data = await handleAuthResponse(response);

// // // //       if (!response.ok) throw new Error(data.message);

// // // //       setUser(data.user);
// // // //       localStorage.setItem('findit_token', data.token);
// // // //       localStorage.setItem('findit_user', JSON.stringify(data.user));

// // // //       toast.success('Registration successful');
// // // //       return true;
// // // //     } catch (err) {
// // // //       toast.error(err.message);
// // // //       return false;
// // // //     }
// // // //   };

// // // //   const logout = () => {
// // // //     setUser(null);
// // // //     localStorage.clear();
// // // //     toast.success('Logged out');
// // // //   };

// // // //   return (
// // // //     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
// // // //       {!loading && children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // };

// // // // export const useAuth = () => useContext(AuthContext);
// // // import { createContext, useContext, useState, useEffect } from 'react';
// // // import toast from 'react-hot-toast';

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   const API_URL = import.meta.env.VITE_API_URL;

// // //   useEffect(() => {
// // //     const savedUser = localStorage.getItem('findit_user');
// // //     if (savedUser) {
// // //       setUser(JSON.parse(savedUser));
// // //     }
// // //     setLoading(false);
// // //   }, []);

// // //   const handleAuthResponse = async (response) => {
// // //     const contentType = response.headers.get('content-type');
// // //     if (!contentType || !contentType.includes('application/json')) {
// // //       throw new Error('Backend API path wrong or server error');
// // //     }
// // //     return await response.json();
// // //   };

// // //   // ✅ LOGIN
// // //   const login = async (email, password) => {
// // //     try {
// // //       const response = await fetch(`${API_URL}/api/auth/login`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ email, password })
// // //       });

// // //       const data = await handleAuthResponse(response);

// // //       if (!response.ok) throw new Error(data.message);

// // //       setUser(data.user);
// // //       localStorage.setItem('findit_user', JSON.stringify(data.user));
// // //       localStorage.setItem('findit_token', data.token);

// // //       toast.success('Login successful');
// // //       return true;
// // //     } catch (error) {
// // //       toast.error(error.message);
// // //       return false;
// // //     }
// // //   };

// // //   // ✅ REGISTER
// // //   const register = async (userData) => {
// // //     try {
// // //       const response = await fetch(`${API_URL}/api/auth/register`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(userData)
// // //       });

// // //       const data = await handleAuthResponse(response);

// // //       if (!response.ok) throw new Error(data.message);

// // //       setUser(data.user);
// // //       localStorage.setItem('findit_user', JSON.stringify(data.user));
// // //       localStorage.setItem('findit_token', data.token);

// // //       toast.success('Registration successful');
// // //       return true;
// // //     } catch (error) {
// // //       toast.error(error.message);
// // //       return false;
// // //     }
// // //   };

// // //   const logout = () => {
// // //     setUser(null);
// // //     localStorage.clear();
// // //     toast.success('Logged out');
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
// // //       {!loading && children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);
// // import { createContext, useContext, useState, useEffect } from 'react';
// // import toast from 'react-hot-toast';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const API_URL = import.meta.env.VITE_API_URL;
// //   console.log("API_URL =", API_URL); // 👈 MUST log correct URL

// //   useEffect(() => {
// //     const savedUser = localStorage.getItem('findit_user');
// //     if (savedUser) setUser(JSON.parse(savedUser));
// //     setLoading(false);
// //   }, []);

// //   const login = async (email, password) => {
// //     try {
// //       const response = await fetch(`${API_URL}/api/auth/login`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, password })
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || 'Login failed');
// //       }

// //       setUser(data.user);
// //       localStorage.setItem('findit_user', JSON.stringify(data.user));
// //       localStorage.setItem('findit_token', data.token);

// //       toast.success('Login successful');
// //       return true;
// //     } catch (err) {
// //       console.error(err);
// //       toast.error(err.message);
// //       return false;
// //     }
// //   };

// //   const register = async (userData) => {
// //     try {
// //       const response = await fetch(`${API_URL}/api/auth/register`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(userData)
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || 'Registration failed');
// //       }

// //       setUser(data.user);
// //       localStorage.setItem('findit_user', JSON.stringify(data.user));
// //       localStorage.setItem('findit_token', data.token);

// //       toast.success('Registration successful');
// //       return true;
// //     } catch (err) {
// //       console.error(err);
// //       toast.error(err.message);
// //       return false;
// //     }
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     localStorage.clear();
// //     toast.success('Logged out');
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
// //       {!loading && children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);
// import { createContext, useContext, useState, useEffect } from 'react';
// import toast from 'react-hot-toast';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const API_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     const savedUser = localStorage.getItem('findit_user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   // 🔐 SAFE RESPONSE PARSER
//   const parseResponse = async (response) => {
//     const text = await response.text();

//     if (!text) {
//       throw new Error("Empty response from backend");
//     }

//     try {
//       return JSON.parse(text);
//     } catch {
//       console.error("Non-JSON response:", text);
//       throw new Error("Backend API path wrong or server error");
//     }
//   };

//   // LOGIN
//   const login = async (email, password) => {
//     try {
//       const response = await fetch(`${API_URL}/api/auth/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await parseResponse(response);

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       setUser(data.user);
//       localStorage.setItem('findit_token', data.token);
//       localStorage.setItem('findit_user', JSON.stringify(data.user));

//       toast.success("Login successful");
//       return true;
//     } catch (error) {
//       toast.error(error.message);
//       return false;
//     }
//   };

//   // REGISTER
//   const register = async (userData) => {
//     try {
//       const response = await fetch(`${API_URL}/api/auth/register`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userData)
//       });

//       const data = await parseResponse(response);

//       if (!response.ok) {
//         throw new Error(data.message || "Registration failed");
//       }

//       setUser(data.user);
//       localStorage.setItem('findit_token', data.token);
//       localStorage.setItem('findit_user', JSON.stringify(data.user));

//       toast.success("Registration successful");
//       return true;
//     } catch (error) {
//       toast.error(error.message);
//       return false;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('findit_user');
//     localStorage.removeItem('findit_token');
//     toast.success("Logged out");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();
const API = 'http://localhost:5000';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setUser(data.user);
      localStorage.setItem('token', data.token);
      toast.success('Login success');
      return true;
    } catch (e) {
      toast.error(e.message);
      return false;
    }
  };

  const register = async (userData) => {
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setUser(data.user);
      localStorage.setItem('token', data.token);
      toast.success('Registered');
      return true;
    } catch (e) {
      toast.error(e.message);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

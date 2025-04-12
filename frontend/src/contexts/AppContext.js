import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AppContext = createContext(); // ✅ Still needed

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ name: decoded.username || decoded.name });
      } catch (error) {
        console.error("Token decode failed:", error);
        logout();
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AppContext.Provider>
  );
};

// ✅ Custom hook to consume the context
export const useAppContext = () => useContext(AppContext);

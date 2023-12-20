import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (enteredPassword) => {
    if (enteredPassword === 'admin777') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const contextValue = {
    password,
    loggedIn,
    handleLogin,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

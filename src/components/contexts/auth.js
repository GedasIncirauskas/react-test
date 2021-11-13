import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  console.log(token);

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

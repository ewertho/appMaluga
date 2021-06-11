import React, { createContext } from "react";
import { signin } from "../services/Auth";

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
  async function signIn() {
    const response = await signin();
    console.log(response);
  }
  return (
    <AuthContext.Provider value={{ signed: false, user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

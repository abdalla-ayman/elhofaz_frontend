"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  //Login and SignUp Function
  const SignInUser = (resData) => {
    setAuth({ ...auth, ...resData, isAuthenticated: true });
  };

  //logout User
  const LogoutUser = () => {
    setAuth({ user: null, token: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, SignInUser, LogoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

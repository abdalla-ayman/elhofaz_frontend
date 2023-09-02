"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: false,
  });

  //Login and SignUp Function
  const SignInUser = (resData) => {
    localStorage.setItem("token", resData.token);
    setAuth({ ...auth, ...resData, isAuthenticated: true });
  };

  //logout User
  const LogoutUser = () => {
    localStorage.removeItem("token");
    setAuth({ user: null, token: null, isAuthenticated: false });
  };

  //load User
  const LoadUser = (user) => {
    setAuth({ ...auth, user, isAuthenticated: true });
  };

  return (
    <AuthContext.Provider value={{ auth, SignInUser, LogoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

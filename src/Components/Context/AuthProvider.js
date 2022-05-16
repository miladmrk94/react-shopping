import React, { useContext, useState } from "react";

const authProviderContext = React.createContext();
const authProviderDispatcher = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("Auth")));

  return (
    <authProviderContext.Provider value={auth}>
      <authProviderDispatcher.Provider value={setAuth}>
        {children}
      </authProviderDispatcher.Provider>
    </authProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(authProviderContext);
};

export const useAuthAction = () => {
  return useContext(authProviderDispatcher);
};

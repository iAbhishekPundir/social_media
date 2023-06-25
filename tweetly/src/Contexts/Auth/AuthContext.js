import React, { createContext, useContext ,useEffect,useState } from 'react';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  useEffect(()=>{console.log("inside AuthContext")}, [])
  

  const [isLoggedIn, setIsLoggedIn] = useState(token);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

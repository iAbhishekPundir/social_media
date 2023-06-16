import React, { createContext, useContext ,useState } from 'react';


export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("inside AuthContext")

  const [isLoggedIn, setIsLoggedIn] = useState(token);

  return (
    <AuthContextProvider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContextProvider>
  )
}

export const AuthState = () => useContext(AuthContext);

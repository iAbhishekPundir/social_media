import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/Auth/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    <div> {children} </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

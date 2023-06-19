import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthState } from "../Contexts/Auth/AuthContext";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = AuthState();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

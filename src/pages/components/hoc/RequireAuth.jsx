import { useLocation, Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import React from "react";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = UseAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

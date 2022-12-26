import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../context/user_context";

function Requireauth({ children }) {
  const { user, user2 } = useUserContext();
  const location = useLocation();

  if (!user && !user2) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default Requireauth;

import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  // If token (user) not found, redirect to login page
  if (!user) {
    {
      return <Navigate to='/login' replace />;
    }
  } 
  // Otherwise, return requested route
  else {
    return children;
  }
}

export default ProtectedRoute;

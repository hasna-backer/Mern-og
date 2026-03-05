// src/components/ProtectedRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  // Check auth from localStorage
  const isAuth = localStorage.getItem("auth") === "true";

  console.log("Auth Status:", isAuth);

  // If not authenticated → redirect
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}
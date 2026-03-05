// src/layouts/MainLayout.jsx

import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  console.log("Layout Rendered");

  return (
    <div>
      {/* Navigation bar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}
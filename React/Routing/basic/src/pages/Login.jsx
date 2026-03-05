// src/pages/Login.jsx

import React, { useState } from "react";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("auth", "true"); // simulate login
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn && <p>Logged In Successfully</p>}
    </div>
  );
}
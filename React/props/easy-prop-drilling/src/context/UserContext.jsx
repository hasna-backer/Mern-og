// context/UserContext.jsx

import { createContext } from "react";

// Create Context
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  
  // 🔹 Static data (same as your App)
  const role = "admin";

  return (
    // Providing static value globally
    <UserContext.Provider value={{ role }}>
      {children}
    </UserContext.Provider>
  );
};

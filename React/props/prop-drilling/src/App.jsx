// App.jsx

// Import useState hook to manage state
import { useState } from "react";

// Import Dashboard component (next level down)
import Dashboard from "./components/layout/Dashboard";

function App() {
  // 🔹 User state defined at top level
  // This is the data we will drill down
  const [user, setUser] = useState({
    name: "Hasna",
    role: "Admin",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Main App Component</h1>

      {/* 
        Passing user and setUser down to Dashboard.
        This begins the prop drilling chain.
      */}
      <Dashboard user={user} setUser={setUser} />
    </div>
  );
}

export default App;

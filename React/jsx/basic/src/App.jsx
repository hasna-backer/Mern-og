import React from "react"; // Import React

function App() {

  const user = { // Create user object
    name: "Hasna",
    role: "admin"
  };
  const notifications = ["Order placed", "Payment received"]; // Array

  return (
    <div> 
      <h1>Welcome {user.name}</h1> 
      {/* Conditional rendering using ternary */}
      <h2>
        {user.role === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </h2>

      {/* Logical AND rendering */}
      {user.role === "admin" && <p>You have full access</p>}

      <h3>Notifications:</h3>

      {/* Rendering list */}
      {notifications.map((note, index) => (
        <p key={index}>{note}</p> // key required
      ))}

    </div>
  );
}

export default App;

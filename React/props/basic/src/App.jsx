// App.js

import React from "react";

// Reusable Component
function UserCard(name="Ramesh",role="unknown") {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Team Members</h1>

      {/* Passing data via props */}
      <UserCard name="John" role="Frontend Developer" />
      <UserCard name="Sarah" role="Backend Developer" />
      <UserCard name="David" role="UI Designer" />
      <UserCard />
    </div>
  );
}

export default App;

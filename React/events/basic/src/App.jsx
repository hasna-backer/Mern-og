import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      console.log("Validation failed");
    } else {
      setError("");
      console.log("Form submitted successfully");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p style={{color: "red"}}>{error}</p>
    </form>
  );
}

export default App;

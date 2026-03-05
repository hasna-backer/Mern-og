import React from 'react'
import Parent from './components/Parent'
import Child from './components/Child'

const App = () => {
  const role="admin"
  return (
    <div>
      <Parent role={role}/>
    </div>
  )
}

export default App




















import React from "react";
import Parent from "./components/Parent";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <div>
      <h1>App Component</h1>

      {/* Wrap with Provider */}
      <UserProvider>
        <Parent />
      </UserProvider>
    </div>
  );
};

export default App;

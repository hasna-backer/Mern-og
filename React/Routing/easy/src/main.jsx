// Import React
import React from "react";

// Import ReactDOM
import ReactDOM from "react-dom/client";

// Import BrowserRouter
import { BrowserRouter } from "react-router-dom";

// Import App component
import App from "./App";

// Render application
ReactDOM.createRoot(document.getElementById("root")).render(
 // Wrap entire app with BrowserRouter
 <BrowserRouter>
   <App />
 </BrowserRouter>
);

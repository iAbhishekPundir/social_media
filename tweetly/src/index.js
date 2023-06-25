import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthContextProvider } from "./Contexts/Auth/AuthContext";
import { DataContextProvider } from "./Contexts/Data/DataContext";
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataContextProvider>
        <App />
        </DataContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);

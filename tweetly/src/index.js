import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Contexts/Auth/AuthContext";
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <AuthContextProvider> */}
        <App />
      {/* </AuthContextProvider> */}
    </Router>
  </React.StrictMode>
);

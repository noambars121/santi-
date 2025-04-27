import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TempoDevtools } from "tempo-devtools";
import App from "./App";
import "./index.css";
import { AccessibilityProvider } from "./components/AccessibilityWidget";

// Initialize Tempo Devtools
TempoDevtools.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessibilityProvider>
        <App />
      </AccessibilityProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

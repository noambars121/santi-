import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { TempoDevtools } from "tempo-devtools";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import "./index.css";
import { AccessibilityProvider } from "./components/AccessibilityWidget";
import { trackPixelEvent } from "./lib/pixel";

// Initialize Tempo Devtools
TempoDevtools.init();

// Remove hash from URL on initial load
if (window.location.hash) {
  history.pushState('', document.title, window.location.pathname + window.location.search);
}

/* // Remove the specific contact button if it exists - This might be redundant now
const removeContactButton = () => {
  const observer = new MutationObserver(() => {
    const contactButton = document.querySelector(
      "#root > div > button[aria-label='פתיחת טופס יצירת קשר']"
    );
    
    if (contactButton) {
      contactButton.remove();
      observer.disconnect();
      console.log("Contact button removed");
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
};

// Call the function to remove the contact button
removeContactButton();
*/

// PixelYourSite route change tracker component
function PixelRouteTracker() {
  const location = useLocation();
  
  useEffect(() => {
    // Track PageView on route change
    trackPixelEvent('PageView');
  }, [location]);
  
  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessibilityProvider>
        <PixelRouteTracker />
        <App />
        <Analytics />
      </AccessibilityProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

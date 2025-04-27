import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";
import AccessibilityStatement from "./components/AccessibilityStatement";
import AccessibilityWidget, {
  AccessibilityProvider,
} from "./components/AccessibilityWidget";
import { ContactFormWrapper } from "./components/ContactFormWrapper";

function App() {
  const location = useLocation();
  const [showInitialContactForm, setShowInitialContactForm] = useState(false);

  // Show contact form on initial load, but only on the home page
  useEffect(() => {
    // Check if it's the home page
    if (location.pathname === "/") {
      // Small delay to ensure the page loads first
      const timer = setTimeout(() => {
        setShowInitialContactForm(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Check for #contact hash in URL
  useEffect(() => {
    if (location.hash === "#contact") {
      const { openContactForm } =
        document.querySelector("[data-contact-wrapper]")?.[
          "__CONTACT_FORM_API"
        ] || {};
      if (typeof openContactForm === "function") {
        openContactForm();
      }
    }
  }, [location.hash]);

  return (
    <AccessibilityProvider>
      <ContactFormWrapper>
        <div className="min-h-screen">
          {/* Skip to main content link for keyboard users */}
          <a
            href="#main-content"
            className="skip-link"
            aria-label="דלג לתוכן העיקרי"
          >
            דלג לתוכן העיקרי
          </a>
          <Routes>
            <Route
              path="/accessibility-statement"
              element={<AccessibilityStatement />}
            />
            <Route
              path="/"
              element={
                <main id="main-content">
                  <Navigation />
                  <HeroSection />
                  <PackagesSection />
                  <AboutSection />
                  <GallerySection />
                  <TestimonialsSection />
                  <CTASection />
                  <Footer />
                </main>
              }
            />
          </Routes>
          
          {/* בלוק div נפרד מהמבנה הקיים, ישירות תחת ה-AccessibilityProvider */}
          <div 
            className="a11y-container" 
            style={{
              position: 'fixed',
              bottom: 0,
              right: 0,
              zIndex: 2147483647,
              visibility: 'visible',
              pointerEvents: 'none'
            }}
          >
            <AccessibilityWidget />
          </div>
        </div>
      </ContactFormWrapper>
    </AccessibilityProvider>
  );
}

export default App;

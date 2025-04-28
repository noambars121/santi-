import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AccessibilityStatement from "./components/AccessibilityStatement";
import AccessibilityWidget from "./components/AccessibilityWidget";
import AccessibilityProvider from "./components/AccessibilityProvider";

function App() {
  const location = useLocation();
  const [showInitialContactForm, setShowInitialContactForm] = useState(false);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <AccessibilityProvider>
      <>
        {/* Skip to content link for keyboard users */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:right-4 focus:p-4 focus:bg-white focus:text-[#124A34] focus:shadow-lg focus:rounded-md focus:text-lg focus:font-bold"
          tabIndex={0}
        >
          דלג לתוכן העיקרי
        </a>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main id="main-content" tabIndex={-1}>
                  <HeroSection />
                  {showInitialContactForm && (
                    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
                      <div 
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setShowInitialContactForm(false)}
                      />
                      <div 
                        className="relative bg-white rounded-lg shadow-xl p-4 max-w-md w-full z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button 
                          onClick={() => setShowInitialContactForm(false)}
                          className="absolute top-2 right-2 text-gray-500 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                          aria-label="סגור טופס"
                        >
                          ×
                        </button>
                        <ContactForm formId="popup-contact-form" onSuccessSubmit={() => setShowInitialContactForm(false)} />
                      </div>
                    </div>
                  )}
                  <PackagesSection />
                  <AboutSection />
                  <GallerySection />
                  <CTASection />
                </main>
              </>
            }
          />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
          {/* Redirect from old path to new path */}
          <Route path="/accessibility" element={<Navigate to="/accessibility-statement" replace />} />
        </Routes>
        <Footer />
        <AccessibilityWidget />
      </>
    </AccessibilityProvider>
  );
}

export default App;

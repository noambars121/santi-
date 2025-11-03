import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import BRollsSection from "./components/BRollsSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AccessibilityStatement from "./components/AccessibilityStatement";

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
                  <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4 py-6">
                    <div 
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                      onClick={() => setShowInitialContactForm(false)}
                    />
                    <div 
                      className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-md w-full mx-4 z-10 max-h-[90vh] overflow-y-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button 
                        onClick={() => setShowInitialContactForm(false)}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#d39a6a] focus:ring-offset-2 z-20"
                        aria-label="סגור טופס"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 sm:h-6 sm:w-6" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <ContactForm formId="popup-contact-form" onSuccessSubmit={() => setShowInitialContactForm(false)} />
                    </div>
                  </div>
                )}
                <PackagesSection />
                <BRollsSection />
                <AboutSection />
                <TestimonialsSection />
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
    </>
  );
}

export default App;

import { useState, useEffect, createContext, useContext } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { ContactForm } from "./components/ContactForm";

import { Routes, Route, useLocation } from "react-router-dom";
import AccessibilityStatement from "./components/AccessibilityStatement";
import AccessibilityWidget, {
  AccessibilityProvider,
} from "./components/AccessibilityWidget";

// Create a context for the contact form
export const ContactFormContext = createContext<{
  openContactForm: () => void;
}>({ openContactForm: () => {} });

// Custom hook to use the contact form context
export const useContactForm = () => useContext(ContactFormContext);

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();

  // Function to open the contact form
  const openContactForm = () => {
    setShowContactForm(true);
  };

  // Show contact form on initial load, but only on the home page
  useEffect(() => {
    // Check if it's the home page
    if (location.pathname === "/") {
      // Small delay to ensure the page loads first
      const timer = setTimeout(() => {
        setShowContactForm(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Check for #contact hash in URL
  useEffect(() => {
    if (location.hash === "#contact") {
      openContactForm();
    }
  }, [location.hash]);

  return (
    <AccessibilityProvider>
      <ContactFormContext.Provider value={{ openContactForm }}>
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
                  <HeroSection className="bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C186841034-1741481671237-11423jpg')]" />
                  <PackagesSection />
                  <AboutSection />
                  <GallerySection />
                  <TestimonialsSection />
                  <CTASection />
                  <Footer />
                </main>
              }
              className="flex"
            />
          </Routes>
          <AccessibilityWidget />

          {/* Centralized Contact Form */}
          <ContactForm
            isOpen={showContactForm}
            onClose={() => setShowContactForm(false)}
            buttonText=""
            buttonClassName="hidden"
            title="השאירו פרטים ונחזור אליכם בהקדם"
            description="מלאו את הפרטים הבאים ואנו נחזור אליכם בהקדם האפשרי"
          />
        </div>
      </ContactFormContext.Provider>
    </AccessibilityProvider>
  );
}

export default App;

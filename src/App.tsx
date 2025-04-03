import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import AccessibilityStatement from "./components/AccessibilityStatement";
import AccessibilityWidget, {
  AccessibilityProvider,
} from "./components/AccessibilityWidget";

function App() {
  return (
    <AccessibilityProvider>
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
      </div>
    </AccessibilityProvider>
  );
}

export default App;

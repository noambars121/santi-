import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PackagesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;

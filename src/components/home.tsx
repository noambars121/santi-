import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import EmergencyBanner from "./EmergencyBanner";
import PackagesSection from "./PackagesSection";
import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-white overflow-x-hidden"
      role="main"
      aria-label="דף הבית"
    >
      <Navigation />
      <HeroSection />
      <EmergencyBanner />
      <PackagesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default Home;

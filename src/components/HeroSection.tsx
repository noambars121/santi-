import { Button } from "./ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ChevronDown } from "lucide-react";
// import { useContactForm } from "../components/ContactFormWrapper";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  // const { openContactForm } = useContactForm();

  const animations = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="אזור כותרת ראשית"
      role="region"
      id="hero"
    >
      {/* Background Image with Glass Green Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
        <img
          src="/dog-hero.jpg"
          alt="כלב משחק עם מאלף כלבים בגינה"
          className="object-cover w-full h-full"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A5A40]/80 via-[#3A5A40]/90 to-[#3A5A40] backdrop-blur-[6px]" />
      </div>
      <div className="container relative px-4 py-24 max-w-[1400px] text-center mt-[60px] z-10">
        {/* Trust Badges */}
        <motion.div
          {...animations}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <Badge
            variant="secondary"
            className="bg-[#C4A484]/20 text-white hover:bg-[#C4A484]/30 text-sm py-1.5 px-3"
          >
            🎖️ מאלף מוסמך
          </Badge>
        </motion.div>

        {/* Main Content */}
        <div className="w-full max-w-[358px] mx-auto md:max-w-2xl px-4 md:px-6 lg:px-8">
          <motion.h1
            {...animations}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6 leading-tight tracking-tight"
          >
            סנטי מרזי
            <span className="mt-2 block text-4xl md:text-3xl text-[#d39a6a]">
              אילוף כלבים מקצועי
            </span>
          </motion.h1>
          <motion.p
            {...animations}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl mb-4 text-white/90 leading-relaxed"
          >
            מתמחה בפתרון בעיות התנהגות, משמעת מתקדמת ובניית קשר חזק בין הכלב
            לבעליו
          </motion.p>

          {/* Video Section */}
          <motion.div
            {...animations}
            transition={{ delay: 0.5 }}
            className="w-full max-w-[600px] mx-auto mb-8 rounded-lg overflow-hidden shadow-xl relative"
            style={{ paddingTop: "56.25%" }} /* 16:9 Aspect Ratio */
          >
            {/* Custom video player with YouTube video */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d39a6a] focus:ring-offset-2">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/OLkzLLftO6A?playsinline=1&rel=0&controls=1&showinfo=1&origin=https://santimarzi.co.il"
                className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                title="סרטון התדמית של סנטי מרזי מאלף כלבים מקצועי"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="סרטון תדמית של סנטי מרזי מאלף כלבים מקצועי"
                loading="lazy"
              ></iframe>
              
              {/* Play button overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/30 transition-colors cursor-pointer"
                onClick={() => {
                  // Find the iframe and add autoplay parameter
                  const iframe = document.querySelector('iframe');
                  if (iframe && iframe.src) {
                    if (!iframe.src.includes('autoplay=1')) {
                      iframe.src = iframe.src + '&autoplay=1';
                    }
                  }
                  // Hide this overlay
                  const overlay = document.querySelector('.group');
                  if (overlay) {
                    overlay.classList.add('hidden');
                  }
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }}
                aria-label="הפעל את הסרטון"
              >
                <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3A5A40" className="w-8 h-8" style={{ marginLeft: '2px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...animations}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a
              href="#contact"
              className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white px-6 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="מעבר לטופס יצירת קשר"
              tabIndex={0}
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              השאירו פרטים ונחזור אליכם
            </a>
          </motion.div>

          {/* Statistics */}
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hidden md:block"
            aria-hidden="true"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

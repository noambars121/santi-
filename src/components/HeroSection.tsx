import { Button } from "./ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const animations = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      aria-label="אזור כותרת ראשית"
      role="region"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/tempo-public-images/github%7C186841034-1741481671237-11423jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(0)",
          backgroundColor: "#3A5A40" /* Fallback color */,
        }}
        role="img"
        aria-label="כלב מאולף עם מאלף כלבים"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#3A5A40]/85 via-[#3A5A40]/90 to-[#3A5A40]/95 rounded-[0px] opacity-90"
          aria-hidden="true"
        />
      </div>
      <div className="container relative px-4 py-24 max-w-[1400px] text-center mt-[60px]">
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
            <span className="mt-2 block text-2xl md:text-3xl text-[#d39a6a]">
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
            className="w-full max-w-[600px] mx-auto mb-8 rounded-lg overflow-hidden shadow-xl"
          >
            <video
              className="w-full h-auto"
              controls
              poster="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80"
              aria-label="סרטון אילוף כלבים"
            >
              <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
              הדפדפן שלך אינו תומך בתגית וידאו.
            </video>
          </motion.div>

          {/* CTA Buttons */}

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

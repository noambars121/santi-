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
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('/IMG_9328.JPG')`,
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A5A40]/85 via-[#3A5A40]/90 to-[#3A5A40]/95 rounded-[0px]" />
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
            אילוף כלבים מקצועי
            <span className="text-[#C4A484] mt-2 block text-2xl md:text-3xl">
              שיטה ייחודית להצלחה מוכחת
            </span>
          </motion.h1>
          <motion.p
            {...animations}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
          >
            מתמחה בפתרון בעיות התנהגות, משמעת מתקדמת ובניית קשר חזק בין הכלב
            לבעליו
          </motion.p>
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <motion.div {...animations} transition={{ delay: 0.5 }}>
              <Button
                className="w-full bg-[#C4A484] hover:bg-[#B08D6E] text-white py-6 text-lg
                  shadow-lg active:scale-[0.98] transition-transform touch-manipulation"
                onClick={() =>
                  window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mx-2"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                שיחת ייעוץ בוואטסאפ
              </Button>
            </motion.div>

            <motion.div {...animations} transition={{ delay: 0.6 }}>
              <Button
                variant="outline"
                className="w-full border-[#C4A484] text-[#C4A484] hover:bg-[#C4A484]/10
                  py-6 text-lg active:scale-[0.98] transition-transform touch-manipulation"
                onClick={() =>
                  document
                    .getElementById("packages")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                לחבילות האימון
              </Button>
            </motion.div>
          </div>
          {/* Statistics */}

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hidden md:block"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

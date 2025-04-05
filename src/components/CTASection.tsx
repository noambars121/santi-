import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { useContactForm } from "../components/ContactFormWrapper";

export default function CTASection() {
  const { openContactForm } = useContactForm();

  return (
    <section
      className="w-full py-24 bg-gradient-to-br from-[#124A34] via-[#1a6349] to-[#124A34] relative overflow-hidden"
      id="contact"
    >
      {/* Shiny effect overlays */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.07),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm md:text-base border-white/30 text-white uppercase tracking-wider bg-white/5 backdrop-blur-sm"
            >
              בואו נתחיל
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              מוכנים להתחיל את המסע לאילוף מקצועי
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              מלאו את הפרטים בטופס ונחזור אליכם בהקדם עם פתרונות מותאמים אישית
              לכלב שלכם
            </p>
          </motion.div>

          {/* Right side - Button to open contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <button
              onClick={openContactForm}
              className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg transition-all duration-300 w-full max-w-md flex items-center justify-center gap-2"
              aria-label="פתיחת טופס יצירת קשר"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              השאירו פרטים ואחזור אליכם
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

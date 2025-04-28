import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import ContactForm from "./ContactForm";
// import { Button } from "./ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
// } from "./ui/dialog";

const CTASection = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ctaSectionRef}
      className="w-full py-24 bg-gradient-to-br from-[#124A34] via-[#1a6349] to-[#124A34] relative overflow-hidden"
      id="contact"
      style={{ position: 'relative', zIndex: 2 }}
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
              מלאו את הפרטים בטופס ונחזור אליכם בהקדם עם פתרונות מותאמים אישית לכלב שלכם
            </p>
          </motion.div>

          {/* Right side - Pop-up Contact Form */}
          <div className="flex flex-col items-center justify-center relative" style={{ zIndex: 3 }}>
            <ContactForm formId="cta-contact-form" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

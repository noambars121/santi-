import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#124A34]">
      {/* Shiny effect overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.07),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            התחל את המסע שלך לאילוף מקצועי
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            צור קשר עכשיו לשיחת ייעוץ חינם ותן לכלב שלך את ההדרכה הטובה ביותר
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#124A34] bg-white rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
          >
            דבר איתי עכשיו
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

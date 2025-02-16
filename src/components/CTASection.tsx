import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function CTASection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank");
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#124A34] via-[#1a6349] to-[#124A34] relative overflow-hidden">
      {/* Shiny effect overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.07),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 text-sm md:text-base border-white/30 text-white uppercase tracking-wider bg-white/5 backdrop-blur-sm"
          >
            בואו נתחיל
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            מוכנים להתחיל את המסע לאילוף מקצועי?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            צרו איתי קשר בוואטסאפ ונתחיל לעבוד על פתרונות מותאמים אישית לכלב
            שלכם
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white text-lg px-8 py-6 h-auto flex items-center gap-2 mx-auto rounded-xl shadow-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="flex-shrink-0"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            שלחו הודעה בוואטסאפ
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

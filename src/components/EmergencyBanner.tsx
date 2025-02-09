import { motion } from "framer-motion";
import { Button } from "./ui/button";

const EmergencyBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="z-40 text-white shadow-xl safe-area-x border-b-4 border-destructive/50 pr-[env(safe-area-inset-right)] pl-0 py-3 via-slate-700 rounded-[-74px] top-[122px] bottom-[0px] from-[#7d811e] from-[A67B5B] bg-[#a28b4b]"
    >
      <div className="container mx-auto px-4 flex sm:flex-row items-center justify-between gap-4 max-w-[1400px] flex-col">
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-3xl bg-white/20 p-2.5 rounded-full shadow-lg"
          >
            ⚡
          </motion.span>
          <div className="flex gap-1 flex-col justify-center items-start">
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-bold text-xl md:text-2xl tracking-tight"
            >
              ? בעיית התנהגות דחופה
            </motion.span>
            <span className="text-white/90 text-sm md:text-base font-medium">
              מענה מיידי לבעיות תוקפנות והתנהגות
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Button
            onClick={() =>
              window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank")
            }
            className="bg-white hover:bg-white/90 text-destructive text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-bold whitespace-nowrap flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 rounded-xl text-[3A5A40] text-[3A5A40] text-[#3c5e42]"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </motion.svg>
            צור קשר בוואטסאפ
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyBanner;

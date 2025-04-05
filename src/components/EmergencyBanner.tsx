import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { useContactForm } from "../components/ContactFormWrapper";

const EmergencyBanner = () => {
  const { openContactForm } = useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="z-40 text-white shadow-xl safe-area-x border-b-4 border-destructive/50 pr-[env(safe-area-inset-right)] pl-0 py-3 via-slate-700 rounded-[-74px] top-[122px] bottom-[0px] from-[#7d811e] from-[A67B5B] bg-[#d99c6b]"
    >
      <div className="container mx-auto px-4 flex sm:flex-row items-center justify-between gap-4 max-w-[1400px] flex-col">
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-3xl bg-white/20 p-2.5 rounded-full shadow-lg"
            aria-hidden="true"
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
          <button
            onClick={() => {
              console.log("Emergency Banner: Contact button clicked");
              setTimeout(() => {
                openContactForm();
              }, 0);
            }}
            className="hover:bg-white/90 text-destructive text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-bold whitespace-nowrap flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 rounded-xl text-[3A5A40] text-[3A5A40] bg-[#124A34] text-[#ce9464]"
            aria-label="פתיחת טופס יצירת קשר"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </motion.svg>
            השאירו פרטים ואחזור אליכם
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyBanner;

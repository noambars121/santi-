import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="bg-[#d39a6a] text-white py-8 md:py-12 safe-area-bottom safe-area-x"
      role="contentinfo"
      aria-label="פרטי קשר ומידע נוסף"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <h3 className="text-xl font-bold mb-4 text-[#124A34]">צו</h3>

            <p>נהריה, ישראל</p>
          </motion.div>
          {/* Newsletter */}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-right"
          >
            <h3 className="text-xl font-bold mb-4 text-[#124A34]">
              עקבו אחריי
            </h3>
            <div className="flex gap-4 justify-end">
              <a
                href="https://www.facebook.com/santi221"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A373] transition-colors"
              >
                פייסבוק
              </a>
              <a
                href="https://www.instagram.com/santi_dogtrainer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A373] transition-colors"
              >
                אינסטגרם
              </a>
              <a
                href="https://wa.me/message/JLTNWOHMONIZK1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A373] transition-colors"
              >
                וואטסאפ
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/20 mt-8 pt-8 text-center text-white/60"
        >
          <p>© 2024 סנטיאגו מרזי - אילוף כלבים מקצועי. כל הזכויות שמורות.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

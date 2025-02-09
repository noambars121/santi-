import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const packages = [
  {
    title: "אילוף בתנאי פנסיון",
    description:
      "הכלב שלכם מגיע אליי לפנסיון אישי, שבו הוא שוהה בין חודש לחודשיים. במהלך תקופה זו, אני עובד איתו על משמעת, הרגלים נכונים ופתרון בעיות התנהגות, תוך יצירת סביבה יציבה שתומכת בלמידה אפקטיבית.",
    features: [
      "שהייה בפנסיון אישי",
      "אילוף אינטנסיבי יומיומי",
      "עבודה על משמעת והרגלים",
      "סביבה יציבה ותומכת",
    ],
    icon: "🏡",
  },
  {
    title: "אילוף בבית הלקוח",
    description:
      "אני מגיע עד אליכם הביתה כדי לאבחן את הכלב בסביבה הטבעית שלו ולבנות תוכנית עבודה מותאמת אישית לצרכים שלכם. השיטה הזו מאפשרת לכם ללמוד יחד עם הכלב איך להתמודד עם אתגרים יומיומיים ולחזק את הקשר ביניכם.",
    features: [
      "אבחון בסביבה הטבעית",
      "תוכנית אישית מותאמת",
      "הדרכה לבעלים",
      "חיזוק הקשר המשפחתי",
    ],
    icon: "🏠",
  },
  {
    title: "חבילת משמעת מתקדמת",
    description:
      "תוכנית אילוף מקיפה לכלבים שצריכים חיזוק פקודות משמעת, עבודה בסביבה עם גירויים גבוהים, ושיפור הרגלי ההתנהגות שלהם.",
    features: [
      "חיזוק פקודות משמעת",
      "עבודה בסביבת גירויים",
      "שיפור הרגלי התנהגות",
      "ליווי מקצועי צמוד",
    ],
    icon: "🎯",
  },
];

export default function PackagesSection() {
  return (
    <section className="w-full py-24 bg-[#3A5A40]" id="packages">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 text-sm md:text-base border-[#C4A484] text-[#C4A484] uppercase tracking-wider"
          >
            תוכניות אילוף
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#C4A484]">
            בחרו את המסלול המתאים לכם
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            כל כלב הוא מיוחד, ולכן התאמתי מסלולים שונים שיתאימו לצרכים הייחודיים
            שלכם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rtl"
            >
              <div className="h-full bg-[#243028]/50 backdrop-blur-sm border border-[#C4A484]/20 rounded-2xl overflow-hidden hover:border-[#C4A484] transition-all duration-300 group">
                <div className="p-8">
                  <div className="text-5xl mb-8 text-center">{pkg.icon}</div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#C4A484] text-right">
                    {pkg.title}
                  </h3>
                  <p className="text-white/90 mb-8 text-right leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-8 flex justify-center items-center flex-col">
                    {pkg.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 text-white/90 group-hover:text-white transition-colors"
                        whileHover={{ x: -8 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <span className="text-[#C4A484] order-2">✓</span>
                        <span className="order-1">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-[#C4A484] hover:bg-[#B08D6E] text-white transition-colors font-semibold py-6"
                    asChild
                  >
                    <a
                      href="https://wa.me/message/JLTNWOHMONIZK1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                      לפרטים נוספים בוואטסאפ
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

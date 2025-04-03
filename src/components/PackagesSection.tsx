import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ContactForm } from "./ContactForm";

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
    <section
      className="w-full py-24 bg-gradient-to-br from-[#124A34] via-[#1a6349] to-[#124A34] relative overflow-hidden"
      id="packages"
      aria-label="חבילות אילוף"
      role="region"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 text-sm md:text-base border-white/30 text-white uppercase tracking-wider bg-white/5 backdrop-blur-sm"
          >
            תוכניות אילוף
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            בחרו את המסלול המתאים לכם
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
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
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.07)]">
                <div className="p-8">
                  <div className="text-5xl mb-8 text-center" aria-hidden="true">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-center text-[#d39a6a]">
                    {pkg.title}
                  </h3>
                  <p className="text-white mb-8 text-center leading-relaxed h-[124px] w-[362.8px] font-[600]">
                    {pkg.description}
                  </p>
                  <ul className="space-y-4 mb-8 flex flex-col justify-center items-center">
                    {pkg.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 text-white group-hover:text-white transition-colors text-center"
                        whileHover={{ x: -8 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <span
                          className="order-2 text-[#d39a6a]"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span className="order-1">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <ContactForm
                    buttonText="לפרטים נוספים על החבילה"
                    buttonClassName="w-full bg-[#124A34] hover:bg-[#124A34]/90 text-white transition-colors font-semibold py-6 text-base flex items-center justify-center gap-2 rounded-md"
                    buttonIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    }
                    title={`פרטים נוספים על חבילת ${pkg.title}`}
                    description="השאירו פרטים ונחזור אליכם בהקדם האפשרי עם מידע מפורט"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

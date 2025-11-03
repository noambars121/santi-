import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
// import { useContactForm } from "../components/ContactFormWrapper";

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
  // const { openContactForm } = useContactForm();

  return (
    <section
      className="w-full py-24 bg-gradient-to-br from-[#d39a6a] via-[#c89060] to-[#d39a6a] relative overflow-hidden"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rtl"
            >
              <div className="h-full bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300 group shadow-2xl">
                <div className="p-6 md:p-8 flex flex-col items-center">
                  <div className="text-4xl md:text-5xl mb-6 md:mb-8" aria-hidden="true">
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#124A34] text-center w-full">
                    {pkg.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#124A34] mb-6 md:mb-8 text-center leading-relaxed font-[600] mx-auto px-2 md:px-4 w-full min-h-[160px] md:min-h-[124px]">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 w-full flex flex-col items-center">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base text-[#124A34] w-full"
                      >
                        <span className="text-[#d39a6a] text-base md:text-lg" aria-hidden="true">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="w-full bg-[#124A34] hover:bg-[#1a6349] text-white transition-colors font-semibold py-4 md:py-6 text-sm md:text-base flex items-center justify-center gap-2 rounded-md shadow-lg"
                    aria-label={`מעבר לטופס יצירת קשר לחבילת ${pkg.title}`}
                    tabIndex={0}
                    onClick={e => {
                      e.preventDefault();
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
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
                    השאירו פרטים ואחזור אליכם
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

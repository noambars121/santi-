import { motion } from "framer-motion";
import { Button } from "./ui/button";

const packages = [
  {
    title: "אילוף בתנאי פנסיון",
    description:
      "הכלב שלכם מגיע אליי לפנסיון אישי, שבו הוא שוהה בין חודש לחודשיים. במהלך תקופה זו, אני עובד איתו על משמעת, הרגלים נכונים ופתרון בעיות התנהגות, תוך יצירת סביבה יציבה שתומכת בלמידה אפקטיבית.",
    price: "₪1,200",
    features: [
      "שהייה בפנסיון אישי",
      "אילוף אינטנסיבי יומיומי",
      "עבודה על משמעת והרגלים",
      "סביבה יציבה ותומכת",
    ],
    icon: "🏠",
  },
  {
    title: "אילוף בבית הלקוח",
    description:
      "אני מגיע עד אליכם הביתה כדי לאבחן את הכלב בסביבה הטבעית שלו ולבנות תוכנית עבודה מותאמת אישית לצרכים שלכם. השיטה הזו מאפשרת לכם ללמוד יחד עם הכלב איך להתמודד עם אתגרים יומיומיים ולחזק את הקשר ביניכם.",
    price: "₪900",
    features: [
      "אבחון בסביבה הטבעית",
      "תוכנית אישית מותאמת",
      "הדרכה לבעלים",
      "חיזוק הקשר המשפחתי",
    ],
    icon: "🏡",
  },
  {
    title: "חבילת משמעת מתקדמת",
    description:
      "תוכנית אילוף מקיפה לכלבים שצריכים חיזוק פקודות משמעת, עבודה בסביבה עם גירויים גבוהים, ושיפור הרגלי ההתנהגות שלהם.",
    price: "₪800",
    features: [
      "חיזוק פקודות משמעת",
      "עבודה בסביבת גירויים",
      "שיפור הרגלי התנהגות",
      "ליווי מקצועי צמוד",
    ],
    icon: "✨",
  },
];

export default function PackagesSection() {
  return (
    <section className="w-full py-16 bg-[#243028]" id="packages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C4A484] mb-4">
            חבילות אילוף
          </h2>
          <p className="text-lg text-[#E5E5E5]">
            בחרו את החבילה המתאימה ביותר עבורכם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full bg-[#1E2B1F] border border-[#C4A484]/20 rounded-xl overflow-hidden hover:border-[#C4A484] transition-colors">
                <div className="p-6">
                  <div className="text-3xl mb-4">{pkg.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#C4A484]">
                    {pkg.title}
                  </h3>
                  <div className="text-2xl font-bold mb-4 text-[#C4A484]">
                    {pkg.price}
                  </div>
                  <p className="text-[#E5E5E5] mb-6 text-right leading-relaxed text-sm">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-[#E5E5E5] text-sm"
                      >
                        <span className="text-[#C4A484]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-[#C4A484] hover:bg-[#B08D6E] text-white transition-colors"
                    asChild
                  >
                    <a href="https://wa.me/+972000000000">להזמנת חבילה</a>
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

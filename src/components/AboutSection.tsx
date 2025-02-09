import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#1E2B1F]" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C4A484] mb-4">
              קצת עליי
            </h2>
            <p className="text-xl text-[#C4A484]">מאלף כלבים מקצועי</p>
          </div>

          {/* Main content */}
          <div className="space-y-8 text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed text-[#E5E5E5]">
                מאז שאני זוכר את עצמי, כלבים תמיד היו חלק בלתי נפרד מהחיים שלי.
                תמיד הרגשתי שיש לי חיבור מיוחד איתם – החיבור הזה בין הפשטות
                הטבעית של הכלב למורכבות שבתהליך האילוף. הבנתי שזו לא רק עבודה
                בשבילי – זו אהבה אמיתית. ❤️
              </p>
              <p className="text-lg leading-relaxed text-[#E5E5E5]">
                לפני כשנתיים החלטתי להפוך את האהבה הזו למקצוע, והשקעתי את כל
                כולי בלימודים כדי להפוך למאלף כלבים מקצועי. היום אני כאן כדי
                לעזור לכם ולחבר הכי טוב שלכם להתמודד עם האתגרים היום-יומיים
                ולהפוך את החיים שלכם יחד לטובים יותר.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What I Offer */}
              <div className="bg-[#243028] p-6 rounded-xl border border-[#C4A484]/20">
                <h3 className="text-xl font-semibold mb-4 text-[#C4A484]">
                  מה אני מציע
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      icon: "🐶",
                      text: "אילוף גורים – כי התחלה טובה היא התחלה חזקה",
                    },
                    { icon: "🐕", text: "תיקון בעיות התנהגות" },
                    { icon: "🐾", text: "אילוף כלבים בוגרים" },
                    { icon: "❤️", text: "חיזוק הקשר עם הכלב" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 group"
                      whileHover={{ x: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-xl mt-1">{item.icon}</span>
                      <span className="text-[#E5E5E5] text-sm">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* My Approach */}
              <div className="bg-[#243028] p-6 rounded-xl border border-[#C4A484]/20">
                <h3 className="text-xl font-semibold mb-4 text-[#C4A484]">
                  הגישה שלי
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: "✨", text: "שיעורים פרטיים אחד על אחד" },
                    { icon: "✨", text: "תוכניות אילוף מותאמות אישית" },
                    { icon: "✨", text: "ליווי מלא לאורך כל הדרך" },
                    { icon: "✨", text: "גישה מקצועית ואוהבת" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 group"
                      whileHover={{ x: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-xl mt-1 text-[#C4A484]">
                        {item.icon}
                      </span>
                      <span className="text-[#E5E5E5] text-sm">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function AboutSection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden"
      id="about"
      aria-label="אודות סנטיאגו מרזי"
      role="region"
    >
      {/* Chromatic Gold Glass Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-[#d39a6a]/80 via-[#d39a6a]/90 to-[#d39a6a] backdrop-blur-[6px]"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center relative mb-12 md:mb-16"
          >
            {/* Profile Image */}
            <div className="relative flex justify-center mx-auto mb-8 md:mb-10">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
                {/* Decorative frame */}
                <div className="relative bg-gradient-to-br from-[#124A34] to-[#1a6349] p-1.5 rounded-3xl shadow-2xl">
                  <div className="bg-white p-2 rounded-3xl">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src="https://storage.googleapis.com/tempo-public-images/github%7C186841034-1739107866047-11317jpg"
                        alt="סנטיאגו מרזי - מאלף כלבים מקצועי עומד עם כלב לאבריצ'ה שחור במהלך אימון בפארק"
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#124A34]/30 to-[#d39a6a]/30 blur-3xl -z-10 rounded-3xl" />
              </div>
            </div>

            <div className="flex justify-center mb-4 md:mb-6">
              <Badge
                variant="outline"
                className="inline-block px-6 py-2 text-sm md:text-base border-2 border-[#124A34] text-[#124A34] tracking-wide font-bold bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all"
              >
                אז מי אני?
              </Badge>
            </div>
            
            <div className="inline-block mb-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-[#124A34] tracking-tight drop-shadow-lg">
                סנטיאגו מרזי
              </h2>
              <div className="h-2 bg-gradient-to-r from-transparent via-[#d39a6a] to-transparent rounded-full mx-auto"></div>
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-black drop-shadow-md mb-8">
              מאלף כלבים מקצועי
            </p>
          </motion.div>

          {/* Main Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 md:mb-20"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-[#124A34]/20">
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#124A34]">
                  מאז שאני זוכר את עצמי, כלבים תמיד היו חלק בלתי נפרד מהחיים שלי.
                  תמיד הרגשתי שיש לי חיבור מיוחד איתם,<br /> החיבור הזה בין הפשטות
                  הטבעית של הכלב למורכבות שבתהליך האילוף. הבנתי שזו לא רק עבודה
                  בשבילי.<br /> זו אהבה אמיתית.
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#124A34] to-[#d39a6a] mx-auto rounded-full shadow-md"></div>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#124A34]">
                  לפני כשנתיים החלטתי להפוך את האהבה הזו למקצוע, והשקעתי את כל
                  כולי בלימודים כדי להפוך למאלף כלבים מקצועי. <br /> היום אני כאן כדי
                  לעזור לכם ולחבר הכי טוב שלכם להתמודד עם האתגרים היום-יומיים
                  ולהפוך את החיים שלכם יחד לטובים יותר!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          >
            {/* What I Offer */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#124A34]/10 hover:border-[#124A34]/30 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#124A34] to-[#1a6349] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🐶</span>
                </div>
                <div className="inline-block">
                  <h3 className="text-2xl md:text-3xl font-black text-[#124A34] mb-2 drop-shadow-sm">
                    מה אני מציע
                  </h3>
                  <div className="h-1.5 bg-gradient-to-r from-transparent via-[#124A34] to-transparent rounded-full"></div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    icon: "🐶",
                    text: "אילוף גורים - התחלה טובה היא התחלה חזקה",
                  },
                  { icon: "🐕", text: "תיקון בעיות התנהגות" },
                  { icon: "🐾", text: "אילוף כלבים בוגרים" },
                  { icon: "❤️", text: "חיזוק הקשר עם הכלב" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-right"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span
                      className="text-2xl flex-shrink-0 mt-1 drop-shadow-sm"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span className="text-[#124A34] text-base md:text-lg leading-relaxed">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#124A34]/10 hover:border-[#124A34]/30 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#d39a6a] to-[#c08a5a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌟</span>
                </div>
                <div className="inline-block">
                  <h3 className="text-2xl md:text-3xl font-black text-[#124A34] mb-2 drop-shadow-sm">
                    החזון שלי
                  </h3>
                  <div className="h-1.5 bg-gradient-to-r from-transparent via-[#d39a6a] to-transparent rounded-full"></div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: "🌟", text: "יצירת קשר חזק בין כלבים ובעליהם" },
                  { icon: "🤝", text: "בניית אמון והבנה הדדית" },
                  { icon: "🎯", text: "פיתוח כלים להצלחה ארוכת טווח" },
                  { icon: "💫", text: "העצמת הקשר המיוחד שבין אדם לכלבו" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-right"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span
                      className="text-2xl flex-shrink-0 mt-1 drop-shadow-sm"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span className="text-[#124A34] text-base md:text-lg leading-relaxed">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* My Approach */}
            <motion.div 
              className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#124A34]/10 hover:border-[#124A34]/30 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1a6349] to-[#124A34] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✨</span>
                </div>
                <div className="inline-block">
                  <h3 className="text-2xl md:text-3xl font-black text-[#124A34] mb-2 drop-shadow-sm">
                    הגישה שלי
                  </h3>
                  <div className="h-1.5 bg-gradient-to-r from-transparent via-[#124A34] to-transparent rounded-full"></div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: "✨", text: "שיעורים פרטיים אחד על אחד" },
                  { icon: "📋", text: "תוכניות אילוף מותאמות אישית" },
                  { icon: "🤗", text: "ליווי מלא לאורך כל הדרך" },
                  { icon: "💚", text: "גישה מקצועית ואוהבת" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-right"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span
                      className="text-2xl flex-shrink-0 mt-1 drop-shadow-sm"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span className="text-[#124A34] text-base md:text-lg leading-relaxed">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

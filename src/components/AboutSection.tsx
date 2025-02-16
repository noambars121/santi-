import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function AboutSection() {
  return (
    <section className="py-32 bg-[#d39a6a] font-heebo" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 relative"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute top-20 left-10 w-32 h-32 bg-[#124A34] rounded-full blur-[100px]" />
              <div className="absolute top-20 right-10 w-32 h-32 bg-[#124A34] rounded-full blur-[100px]" />
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center mx-auto max-w-[280px]">
              <div className="relative h-[280px] mx-auto mb-10 z-10 w-[202px]">
                <div className="absolute inset-0 rounded-full border-[12px] border-[#124A34]/30"></div>
                <div className="absolute inset-0 overflow-hidden border-[3px] border-[#124A34] rounded-full">
                  <img
                    src="https://storage.googleapis.com/tempo-public-images/github%7C186841034-1739107866047-11317jpg"
                    alt="Santiago Merzi"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -inset-3 rounded-full bg-[#124A34] blur-[40px] opacity-10 -z-10" />
              </div>
            </div>

            <Badge
              variant="outline"
              className="mb-8 px-8 py-2.5 text-base md:text-lg border-[#124A34] text-[#124A34] tracking-wider font-light bg-white/10 backdrop-blur-sm"
            >
              ? מי אני
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-[#124A34] tracking-tight">
              סנטיאגו מרזי
            </h2>
            <p className="text-2xl md:text-3xl text-white font-light">
              מאלף כלבים מקצועי
            </p>
          </motion.div>

          {/* Main content */}
          <div className="space-y-16 text-right relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 max-w-4xl mr-auto"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-white font-light">
                מאז שאני זוכר את עצמי, כלבים תמיד היו חלק בלתי נפרד מהחיים שלי.
                תמיד הרגשתי שיש לי חיבור מיוחד איתם – החיבור הזה בין הפשטות
                הטבעית של הכלב למורכבות שבתהליך האילוף. הבנתי שזו לא רק עבודה
                בשבילי – זו .אהבה אמיתית{" "}
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-white font-light">
                לפני כשנתיים החלטתי להפוך את האהבה הזו למקצוע, והשקעתי את כל
                כולי בלימודים כדי להפוך למאלף כלבים מקצועי. היום אני כאן כדי
                לעזור לכם ולחבר הכי טוב שלכם להתמודד עם האתגרים היום-יומיים
                ולהפוך את החיים שלכם יחד לטובים יותר.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {/* What I Offer */}
              <div className="bg-[#124A34]/10 backdrop-blur-sm p-10 rounded-2xl border border-[#124A34]/20 hover:border-[#124A34] transition-all duration-500 shadow-lg group">
                <h3 className="text-3xl font-bold mb-8 text-[#124A34] group-hover:text-[#124A34] transition-colors text-right">
                  מה אני מציע
                </h3>
                <ul className="space-y-6">
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
                      className="flex items-start gap-6 group/item justify-end"
                      whileHover={{ x: -8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-white group-hover/item:text-white transition-colors text-xl font-light text-right">
                        {item.text}
                      </span>
                      <span className="text-3xl mt-1 opacity-90 group-hover/item:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Vision */}
              <div className="bg-[#124A34]/10 backdrop-blur-sm p-10 rounded-2xl border border-[#124A34]/20 hover:border-[#124A34] transition-all duration-500 shadow-lg group">
                <h3 className="text-3xl font-bold mb-8 text-[#124A34] group-hover:text-[#124A34] transition-colors text-right">
                  החזון שלי
                </h3>
                <ul className="space-y-6">
                  {[
                    { icon: "🌟", text: "יצירת קשר חזק בין כלבים ובעליהם" },
                    { icon: "🤝", text: "בניית אמון והבנה הדדית" },
                    { icon: "🎯", text: "פיתוח כלים להצלחה ארוכת טווח" },
                    { icon: "💫", text: "העצמת הקשר המיוחד שבין אדם לכלבו" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-6 group/item justify-end"
                      whileHover={{ x: -8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-white group-hover/item:text-white transition-colors text-xl font-light text-right">
                        {item.text}
                      </span>
                      <span className="text-3xl mt-1 text-[#124A34] opacity-90 group-hover/item:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* My Approach */}
              <div className="bg-[#124A34]/10 backdrop-blur-sm p-10 rounded-2xl border border-[#124A34]/20 hover:border-[#124A34] transition-all duration-500 shadow-lg group">
                <h3 className="text-3xl font-bold mb-8 text-[#124A34] group-hover:text-[#124A34] transition-colors text-right">
                  הגישה שלי
                </h3>
                <ul className="space-y-6">
                  {[
                    { icon: "✨", text: "שיעורים פרטיים אחד על אחד" },
                    { icon: "✨", text: "תוכניות אילוף מותאמות אישית" },
                    { icon: "✨", text: "ליווי מלא לאורך כל הדרך" },
                    { icon: "✨", text: "גישה מקצועית ואוהבת" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-6 group/item justify-end"
                      whileHover={{ x: -8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-white group-hover/item:text-white transition-colors text-xl font-light text-right">
                        {item.text}
                      </span>
                      <span className="text-3xl mt-1 text-[#124A34] opacity-90 group-hover/item:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

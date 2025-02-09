import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function AboutSection() {
  return (
    <section
      className="py-32 bg-gradient-to-b from-[#3A5A40] to-[#2d4632] font-heebo"
      id="about"
    >
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
              <div className="absolute top-20 left-10 w-32 h-32 bg-[#C4A484] rounded-full blur-[100px]" />
              <div className="absolute top-20 right-10 w-32 h-32 bg-[#C4A484] rounded-full blur-[100px]" />
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center">
              <div className="h-56 md:w-64 md:h-64 mx-auto mb-10 overflow-hidden border-4 border-[#C4A484] shadow-[0_0_30px_rgba(196,164,132,0.3)] relative z-10 bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C186841034-1739107866047-11317jpg')] rounded-[9791px] w-[217px] shrink-0 grow-0 flex justify-center items-center px-0">
                <img
                  src="https://storage.googleapis.com/tempo-public-images/github%7C186841034-1739107115124-11337jpg"
                  alt="סנטיאגו מרזי עם כלב"
                  className="w-full h-full object-cover object-[center_top] scale-[1.3]"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-[#C4A484] blur-[40px] opacity-20" />
            </div>

            <Badge
              variant="outline"
              className="mb-8 px-8 py-2.5 text-base md:text-lg border-[#C4A484] text-[#C4A484] tracking-wider font-light bg-[#3A5A40]/50 backdrop-blur-sm"
            >
              ברוכים הבאים
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-[#C4A484] tracking-tight">
              סנטיאגו מרזי
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 font-light">
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
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                מאז שאני זוכר את עצמי, כלבים תמיד היו חלק בלתי נפרד מהחיים שלי.
                תמיד הרגשתי שיש לי חיבור מיוחד איתם – החיבור הזה בין הפשטות
                הטבעית של הכלב למורכבות שבתהליך האילוף. הבנתי שזו לא רק עבודה
                בשבילי – זו אהבה אמיתית. ❤️
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
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
              <div className="bg-gradient-to-br from-[#3A5A40]/80 to-[#2d4632]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#C4A484]/20 hover:border-[#C4A484] transition-all duration-500 shadow-[0_0_25px_rgba(58,90,64,0.3)] group">
                <h3 className="text-3xl font-bold mb-8 text-[#C4A484] group-hover:text-[#d4b494] transition-colors text-right">
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
                      <span className="text-white/80 group-hover/item:text-white transition-colors text-xl font-light text-right">
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
              <div className="bg-gradient-to-br from-[#3A5A40]/80 to-[#2d4632]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#C4A484]/20 hover:border-[#C4A484] transition-all duration-500 shadow-[0_0_25px_rgba(58,90,64,0.3)] group">
                <h3 className="text-3xl font-bold mb-8 text-[#C4A484] group-hover:text-[#d4b494] transition-colors text-right">
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
                      <span className="text-white/80 group-hover/item:text-white transition-colors text-xl font-light text-right">
                        {item.text}
                      </span>
                      <span className="text-3xl mt-1 text-[#C4A484] opacity-90 group-hover/item:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* My Approach */}
              <div className="bg-gradient-to-br from-[#3A5A40]/80 to-[#2d4632]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#C4A484]/20 hover:border-[#C4A484] transition-all duration-500 shadow-[0_0_25px_rgba(58,90,64,0.3)] group">
                <h3 className="text-3xl font-bold mb-8 text-[#C4A484] group-hover:text-[#d4b494] transition-colors text-right">
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
                      <span className="text-white/80 group-hover/item:text-white transition-colors text-xl font-light text-right">
                        {item.text}
                      </span>
                      <span className="text-3xl mt-1 text-[#C4A484] opacity-90 group-hover/item:opacity-100 transition-opacity">
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

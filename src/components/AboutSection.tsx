import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#3A5A40]" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Profile Image */}
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#C4A484] shadow-xl">
              <img
                src="/profile.jpg"
                alt="סנטיאגו מרזי"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=santiago";
                }}
              />
            </div>
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm md:text-base border-[#C4A484] text-[#C4A484] uppercase tracking-wider"
            >
              קצת עליי
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#C4A484]">
              סנטיאגו מרזי
            </h2>
            <p className="text-xl text-white/90">מאלף כלבים מקצועי</p>
          </motion.div>

          {/* Main content */}
          <div className="space-y-12 text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                מאז שאני זוכר את עצמי, כלבים תמיד היו חלק בלתי נפרד מהחיים שלי.
                תמיד הרגשתי שיש לי חיבור מיוחד איתם – החיבור הזה בין הפשטות
                הטבעית של הכלב למורכבות שבתהליך האילוף. הבנתי שזו לא רק עבודה
                בשבילי – זו אהבה אמיתית. ❤️
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* What I Offer */}
              <div className="bg-[#3A5A40]/30 backdrop-blur-sm p-8 rounded-2xl border border-[#C4A484]/20 hover:border-[#C4A484] transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-[#C4A484]">
                  מה אני מציע
                </h3>
                <ul className="space-y-4">
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
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-2xl mt-1">{item.icon}</span>
                      <span className="text-white/90 group-hover:text-[#C4A484] transition-colors">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* My Approach */}
              <div className="bg-[#3A5A40]/30 backdrop-blur-sm p-8 rounded-2xl border border-[#C4A484]/20 hover:border-[#C4A484] transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-[#C4A484]">
                  הגישה שלי
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: "✨", text: "שיעורים פרטיים אחד על אחד" },
                    { icon: "✨", text: "תוכניות אילוף מותאמות אישית" },
                    { icon: "✨", text: "ליווי מלא לאורך כל הדרך" },
                    { icon: "✨", text: "גישה מקצועית ואוהבת" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-2xl mt-1 text-[#C4A484]">
                        {item.icon}
                      </span>
                      <span className="text-white/90 group-hover:text-[#C4A484] transition-colors">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#3A5A40]/30 backdrop-blur-sm p-8 rounded-2xl border border-[#C4A484]/20 hover:border-[#C4A484] transition-colors mt-12"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#C4A484]">
                החזון שלי
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-white/90">
                  החזון שלי הוא ליצור עולם שבו כל כלב וכל בעלים יכולים לחיות
                  בהרמוניה מלאה. אני מאמין שכל כלב ראוי לחיים מאושרים ומאוזנים,
                  וכל בעלים ראוי להבין ולתקשר עם החבר הכי טוב שלו בצורה הטובה
                  ביותר.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      title: "הבנה הדדית",
                      description: "יצירת תקשורת ברורה בין הכלב לבעלים",
                      icon: "🤝",
                    },
                    {
                      title: "איזון רגשי",
                      description: "פיתוח ביטחון עצמי וחוסן נפשי אצל הכלב",
                      icon: "⚖️",
                    },
                    {
                      title: "חיים מאושרים",
                      description: "בניית מערכת יחסים בריאה ומספקת",
                      icon: "🌟",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4">
                      <span className="text-3xl mb-4 block">{item.icon}</span>
                      <h4 className="text-[#C4A484] font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

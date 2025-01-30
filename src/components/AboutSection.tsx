import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const AboutSection = () => {
  const about = {
    title: "קצת עליי",
    description: [
      "עם ניסיון בתחום אימון הכלבים, אני מתמחה בפתרון בעיות התנהגות ובבניית קשר חזק בין הכלב לבעליו.",
      "הגישה שלי מבוססת על הבנה עמוקה של פסיכולוגיית כלבים ושימוש בשיטות חיוביות ויעילות.",
    ],
    features: [
      "הסמכה באימון כלבים",
      "מומחה בטיפול בבעיות התנהגות",
      "ניסיון עם עשרות כלבים",
    ],
  };

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-white"
      role="region"
      aria-label="אודות"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 flex justify-center"
          >
            <img
              src="/IMG_9328.JPG"
              alt="Dog trainer"
              loading="eager"
              decoding="async"
              className="shadow-lg md:h-[400px] object-cover w-[325px] h-[343px] opacity-[100%] rounded-[37px] bg-gray-100"
            />
          </motion.div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <Badge
                variant="outline"
                className="mb-4 px-3 py-1 text-sm md:text-base border-[#D4A373] text-[#D4A373]"
              >
                הכירו אותי
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A5A40] mb-6">
                {about.title}
              </h2>
              {about.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-gray-600 mb-4 text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              <ul className="space-y-3 mt-6">
                {about.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-[#3A5A40]"
                  >
                    <span className="text-[#D4A373]">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "רוני מהקריות",
      text: "הגישה המקצועית והסבלנית של סנטיאגו עשתה פלאים. הכלב שלי עבר שינוי מדהים תוך זמן קצר!",
      avatar: "RK",
      rank: "בעל כלב מרוצה",
      rating: 5,
      date: "לפני שבוע",
    },
    {
      name: "משפחת לוי",
      text: "סנטיאגו הפך את הרוטווילר שלנו מכלב תוקפני לחבר אמיתי של המשפחה. הניסיון המקצועי שלו באמת ניכר.",
      avatar: "ML",
      rank: "משפחה מתל אביב",
      rating: 5,
      date: "לפני חודשיים",
    },
    {
      name: "דנה כהן",
      text: "בתור בעלת כלב ראשון, סנטיאגו נתן לי את הכלים והביטחון להיות מובילה אמיתית. ממליצה בחום!",
      avatar: "DC",
      rank: "בעלת כלב ראשון",
      rating: 5,
      date: "לפני 3 חודשים",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-12 md:py-20 bg-gradient-to-b from-[#3A5A40]/5 to-white"
      role="region"
      aria-label="המלצות"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm md:text-base border-[#D4A373] text-[#D4A373]"
          >
            המלצות מלקוחות מרוצים
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3A5A40] mb-4">
            הסיפורים האמיתיים מאחורי ההצלחות
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            מה אומרים עלינו הלקוחות שכבר עברו את התהליך
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white border-[#D4A373]/20 h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {testimonial.date}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="mb-6 text-gray-700 text-lg leading-relaxed flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#D4A373]/20">
                      <Avatar className="w-12 h-12 border-2 border-[#3A5A40]/10">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                        />
                        <AvatarFallback className="bg-[#3A5A40]/5">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-[#3A5A40]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[#D4A373]">
                          {testimonial.rank}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

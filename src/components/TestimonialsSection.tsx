import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  dogName?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "אסתר",
    location: "",
    rating: 5,
    text: "וואו כל הכבוד! אתה גדול ❤️ הגור שלי היה אצלך רק שבוע בפנסיון אילוף, ואני בהלם מהשינוי!"
  },
  {
    id: 2,
    name: "קירה ובעליה",
    location: "",
    rating: 5,
    text: "בוקר טוב ❤️ קודם כל אני אפתח בתודה על המקום הבטוח שהיה לקירה להיות בו. אתה היית הבחירה הראשונה שלי ואין ספק שזו הבחירה הכי טובה 🙂 אין עלייך! רק חמישה ימים בפנסיון, וכבר רואים שינוי ענק בהתנהגות!",
    dogName: "קירה"
  },
  {
    id: 3,
    name: "נועה",
    location: "",
    rating: 5,
    text: "אני כבר מאושרת אחרי פגישה אחת מזזזזה 😍 אין עליך! שתדע שהיא כבר עושה שב וארצה נדיררר 😍 גם קצת יותר רגועה ❤️ פגישה אחת - ותוצאות שמדברות בעד עצמן."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#124A34] via-[#1a6349] to-[#124A34] relative overflow-hidden" id="testimonials">
      {/* Shiny effect overlays */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.07),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            🐾 מהלקוחות שלנו
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                      {testimonial.location && (
                        <p className="text-sm text-white/70">{testimonial.location}</p>
                      )}
                      {testimonial.dogName && (
                        <p className="text-sm text-[#d39a6a] font-medium">בעל/ת {testimonial.dogName}</p>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed text-right">
                    {testimonial.text}
                  </p>
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

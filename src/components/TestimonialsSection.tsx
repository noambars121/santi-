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

  return <></>;
};

export default TestimonialsSection;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  onSelect?: () => void;
  badge?: string;
}

const PackageCard = ({
  title = "חבילה בסיסית",
  price = "₪1,200",
  description = "התחלה מצוינת לאימון בסיסי",
  features = ["✓ 4 מפגשים פרטיים", "✓ ייעוץ טלפוני"],
  highlight = false,
  onSelect = () =>
    window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank"),
  badge,
}: PackageCardProps) => {
  return (
    <Card
      className={`w-full relative ${highlight ? "border-accent border-2 md:scale-105 md:translate-y-[-10px] z-10" : "border border-primary/10"} 
        shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white touch-manipulation rounded-xl overflow-hidden max-w-[380px] mx-auto`}
    >
      {/* Badge */}
      {badge && (
        <div
          className={
            `absolute -top-4 right-1/2 transform translate-x-1/2 ${highlight ? "bg-primary" : "bg-accent"} text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold whitespace-nowrap shadow-md z-20` +
            " top-[7px]"
          }
        >
          {badge}
        </div>
      )}
      <CardHeader className="pb-4 pt-10 md:pb-6 md:pt-12">
        <CardTitle
          className={
            `text-xl md:text-2xl font-bold text-center ${highlight ? "text-primary" : ""}` +
            " top-[0px] bottom-[0px]"
          }
        >
          {title}
        </CardTitle>
        <CardDescription className="text-center text-sm md:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center pb-4">
        <motion.div
          className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-primary"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {price}
        </motion.div>

        <ul className="space-y-2 md:space-y-3 text-right">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center justify-end gap-2 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-gray-700 text-sm md:text-base">
                {feature.slice(2)}
              </span>
              <span
                className={`${feature.startsWith("✓") ? "text-primary" : "text-red-500/70"} text-base md:text-lg`}
                aria-hidden="true"
              >
                {feature.charAt(0)}
              </span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSelect}
          className={`w-full ${highlight ? "bg-primary" : "bg-accent"} 
            hover:opacity-90 text-white py-4 md:py-6 text-base md:text-lg font-semibold
            touch-manipulation active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg
            flex items-center justify-center gap-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="flex-shrink-0"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          בחר חבילה זו
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;

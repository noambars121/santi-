import PackageCard from "./PackageCard";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { Check, X, Sparkles } from "lucide-react";

const PackagesSection = () => {
  const comparisonFeatures = [
    { name: "מפגשים פרטיים", basic: "4", advanced: "8 + 2", premium: "12" },
    { name: "ייעוץ טלפוני", basic: "✓", advanced: "✗", premium: "✗" },
    { name: "ליווי WhatsApp 24/7", basic: "✗", advanced: "✓", premium: "✓" },
    { name: "אימון בבית הלקוח", basic: "✗", advanced: "✗", premium: "✓" },
  ];

  const packages = [
    {
      title: "אימון בסיסי",
      price: "₪1,200",
      description: "התחלה מצוינת לאימון בסיסי",
      features: [
        "✓ 4 מפגשים פרטיים",
        "✓ ייעוץ טלפוני 24/7",
        "✓ חוברת הדרכה דיגיטלית",
        "✗ אימון בבית הלקוח",
      ],
      highlight: false,
      badge: "חבילה בסיסית",
      onSelect: () =>
        window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank"),
    },
    {
      title: "אימון מתקדם",
      price: "₪2,400",
      description: "האימון המקיף והמומלץ ביותר",
      features: [
        "✓ 8 מפגשים + 2 מפגשי תחזוקה",
        "✓ ליווי WhatsApp 24/7",
        "✓ חוברת הדרכה דיגיטלית",
        "✗ אימון בבית הלקוח",
      ],
      highlight: true,
      badge: "הכי פופולרי",
      onSelect: () =>
        window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank"),
    },
    {
      title: "אימון פרימיום",
      price: "₪3,600",
      description: "אימון אינטנסיבי מקיף",
      features: [
        "✓ 12 מפגשים אינטנסיביים",
        "✓ ליווי WhatsApp 24/7",
        "✓ אימון בבית הלקוח",
        "✓ חוברת הדרכה דיגיטלית",
      ],
      highlight: false,
      badge: "VIP",
      onSelect: () =>
        window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank"),
    },
  ];

  return (
    <section
      id="packages"
      className="relative py-12 md:py-20 bg-gradient-to-b from-[#3A5A40]/5 to-white overflow-hidden"
      role="region"
      aria-label="חבילות אימון"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm md:text-base border-[#D4A373] text-[#D4A373]"
          >
            חבילות אימון מותאמות אישית
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3A5A40] mb-4 md:mb-6">
            בחר את החבילה המתאימה לך
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            כל החבילות כוללות שיטות אימון מקצועיות ומוכחות
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-500">
            <span>* ניתן לשלם בתשלומים</span>
            <span className="hidden md:inline">•</span>
            <span>מחירים כוללים מע"מ</span>
          </div>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mt-12 md:mt-32 max-w-5xl mx-auto"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <Badge className="bg-[#3A5A40] text-white px-4 py-1.5 text-sm md:text-base">
              <Sparkles className="w-4 h-4 mr-2" />
              השוואת חבילות מפורטת
            </Badge>
          </div>
          <div className="rounded-xl">
            <div className="bg-white shadow-2xl border border-[#3A5A40]/10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right text-xs md:text-lg font-bold text-[#3A5A40] p-2 md:p-6">
                      תכונות
                    </TableHead>
                    <TableHead className="text-center text-xs md:text-lg font-bold p-2 md:p-6">
                      בסיסי
                    </TableHead>
                    <TableHead className="text-center text-xs md:text-lg font-bold bg-[#3A5A40]/5 p-2 md:p-6 text-[#3A5A40]">
                      מתקדם
                    </TableHead>
                    <TableHead className="text-center text-xs md:text-lg font-bold p-2 md:p-6">
                      פרימיום
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonFeatures.map((feature, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-right p-2 md:p-6 text-xs md:text-base">
                        {feature.name}
                      </TableCell>
                      <TableCell className="text-center p-2 md:p-6">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className={
                            feature.basic === "✗"
                              ? "text-red-500/70"
                              : "text-[#3A5A40]"
                          }
                        >
                          {feature.basic === "✓" ? (
                            <Check className="w-4 h-4 md:w-6 md:h-6 mx-auto text-[#3A5A40]" />
                          ) : feature.basic === "✗" ? (
                            <X className="w-4 h-4 md:w-6 md:h-6 mx-auto text-red-500/70" />
                          ) : (
                            <span className="font-semibold text-xs md:text-lg">
                              {feature.basic}
                            </span>
                          )}
                        </motion.span>
                      </TableCell>
                      <TableCell className="text-center bg-[#3A5A40]/5 p-2 md:p-6">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className={
                            feature.advanced === "✗"
                              ? "text-red-500/70"
                              : "text-[#3A5A40]"
                          }
                        >
                          {feature.advanced === "✓" ? (
                            <Check className="w-4 h-4 md:w-6 md:h-6 mx-auto text-[#3A5A40]" />
                          ) : feature.advanced === "✗" ? (
                            <X className="w-4 h-4 md:w-6 md:h-6 mx-auto text-red-500/70" />
                          ) : (
                            <span className="font-semibold text-xs md:text-lg">
                              {feature.advanced}
                            </span>
                          )}
                        </motion.span>
                      </TableCell>
                      <TableCell className="text-center p-2 md:p-6">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className={
                            feature.premium === "✗"
                              ? "text-red-500/70"
                              : "text-[#3A5A40]"
                          }
                        >
                          {feature.premium === "✓" ? (
                            <Check className="w-4 h-4 md:w-6 md:h-6 mx-auto text-[#3A5A40]" />
                          ) : feature.premium === "✗" ? (
                            <X className="w-4 h-4 md:w-6 md:h-6 mx-auto text-red-500/70" />
                          ) : (
                            <span className="font-semibold text-xs md:text-lg">
                              {feature.premium}
                            </span>
                          )}
                        </motion.span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;

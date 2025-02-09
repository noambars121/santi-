import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySection = () => {
  const galleryItems = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      title: "אימון משמעת מקצועי",
      description: "טכניקות אימון מתקדמות",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
      title: "לפני ואחרי",
      description: "שינוי דרמטי תוך שבועיים",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1601758282760-b6cc3d07523d",
      title: "אימון משפחתי",
      description: "שיטות מותאמות למשפחה",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1601758174114-e9b8c2b6f8f4",
      title: "אימון מתקדם",
      description: "טכניקות ייחודיות לכל כלב",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-32 bg-[#F5F5DC]"
      role="region"
      aria-label="גלריה"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-8 px-8 py-2.5 text-base md:text-lg border-[#a28b4b] text-[#a28b4b] tracking-wider font-light bg-[--31771e-] bg-[--31771e-] bg-[#378123]"
          >
            גלריית הצלחות
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-[#31771e]">
            תוצאות אמיתיות
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-[--31771e-]">
            תוצאות אמיתיות מאימונים
          </p>
        </motion.div>

        <Carousel className="w-full max-w-[358px] sm:max-w-[600px] md:max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="relative p-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[300px] md:h-[500px] object-cover rounded-xl bg-gray-100"
                  />
                  <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-[#3A5A40]" />
          <CarouselNext className="text-[#3A5A40]" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;

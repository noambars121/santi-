import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GallerySection() {
  return (
    <section className="py-32 bg-[#124A34]">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-8 px-8 py-2.5 text-base md:text-lg border-[#BC8034] text-[#BC8034] tracking-wider font-light"
            >
              גלריה
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight">
              תמונות מהאימונים
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              צפו בתמונות מאימונים קודמים והתרשמו מהתוצאות
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                "https://images.unsplash.com/photo-1601758124277-f0086d5ab050",
                "https://images.unsplash.com/photo-1534361960057-19889db9621e",
                "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
                "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48",
                "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
                "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c",
              ].map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-[#BC8034] hover:bg-[#BC8034]/90 text-white" />
            <CarouselNext className="-right-12 bg-[#BC8034] hover:bg-[#BC8034]/90 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

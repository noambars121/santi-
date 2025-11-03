import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";
import { useState } from "react";

const bRolls = [
  {
    id: 1,
    title: "אימון משמעת בסיסי",
    videoUrl: "/Video-9.mp4",
    description: "למידת פקודות בסיסיות ומשמעת יומיומית"
  },
  {
    id: 2,
    title: "תיקון בעיות התנהגות",
    videoUrl: "/Video-551.mp4",
    description: "פתרון בעיות נביחות, משיכה ועוד"
  },
  {
    id: 3,
    title: "אילוף גורים",
    videoUrl: "/Video-477.mp4",
    description: "התחלה נכונה עם הגור שלכם"
  },
  {
    id: 4,
    title: "עבודה עם כלבים בוגרים",
    videoUrl: "/Video-574.mp4",
    description: "חיזוק מיומנויות וביטחון"
  }
];

export default function BRollsSection() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#124A34] via-[#1a6349] to-[#124A34]"
      id="b-rolls"
      aria-label="סרטוני אימונים"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex justify-center mb-6 md:mb-8">
              <Badge
                variant="outline"
                className="inline-flex items-center px-6 py-2 text-sm md:text-base border-2 border-white/30 text-white tracking-wide font-bold bg-white/5 backdrop-blur-sm shadow-lg hover:bg-white/10 transition-all"
              >
                סרטונים מהשטח
              </Badge>
            </div>

            <div className="inline-block mb-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-white tracking-tight drop-shadow-lg">
                קצת ממה שאני עושה
              </h2>
              <div className="h-2 bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto"></div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              צפו בסרטונים מאימונים אמיתיים וראו את התוצאות המדהימות
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bRolls.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer h-full"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-[#124A34]/30 h-full flex flex-col">
                  {/* Video Preview */}
                  <div className="relative aspect-video overflow-hidden bg-gray-900">
                    <video
                      src={`${video.videoUrl}#t=0.1`}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      muted
                      playsInline
                      poster=""
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#124A34] mr-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl font-black text-[#124A34] mb-2 group-hover:text-[#1a6349] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 flex-1">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="סגור וידאו"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <video
              src={bRolls.find(v => v.id === selectedVideo)?.videoUrl}
              className="w-full h-full"
              controls
              autoPlay
              playsInline
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}


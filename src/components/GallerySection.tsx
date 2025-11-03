export default function GallerySection() {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-[#d39a6a] via-[#c89060] to-[#d39a6a] relative overflow-hidden"
      id="gallery"
      aria-label="גלריה"
      role="region"
    >
      {/* Shiny effect overlays */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.07),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
    </section>
  );
}

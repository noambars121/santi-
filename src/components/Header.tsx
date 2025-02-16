import { Button } from "./ui/button";

export default function Header() {
  const menuItems = [
    { label: "בית", href: "/" },
    { label: "חבילות אימון", href: "#packages" },
    { label: "אודות", href: "#about" },
    { label: "המלצות", href: "#testimonials" },
    { label: "צור קשר", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-[#124A34]">סנטיאגו מרזי</div>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="text-[#124A34] hover:text-[#d39a6a] hover:bg-transparent transition-colors"
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            שיחת ייעוץ חינם
          </Button>
        </nav>
      </div>
    </header>
  );
}

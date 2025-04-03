import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  const menuItems = [
    { label: "בית", href: "/", isExternal: false },
    { label: "חבילות אימון", href: "#packages", isExternal: false },
    { label: "אודות", href: "#about", isExternal: false },
    { label: "המלצות", href: "#testimonials", isExternal: false },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-[#124A34]">
            סנטיאגו מרזי
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) =>
              item.href.startsWith("#") ? (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="text-[#124A34] hover:text-[#d39a6a] hover:bg-transparent transition-colors"
                  onClick={() => scrollToSection(item.href)}
                  aria-label={`ניווט ל${item.label}`}
                >
                  {item.label}
                </Button>
              ) : (
                <Link key={item.label} to={item.href}>
                  <Button
                    variant="ghost"
                    className="text-[#124A34] hover:text-[#d39a6a] hover:bg-transparent transition-colors"
                    aria-label={`ניווט ל${item.label}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ),
            )}
          </div>

          <Button
            className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white"
            onClick={() =>
              window.open("https://wa.me/message/JLTNWOHMONIZK1", "_blank")
            }
            aria-label="פתיחת שיחת ייעוץ חינם בוואטסאפ"
          >
            שיחת ייעוץ חינם
          </Button>
        </nav>
      </div>
    </header>
  );
}

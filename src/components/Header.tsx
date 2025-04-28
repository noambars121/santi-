import { Button } from "./ui/button";
import { Link } from "react-router-dom";
// import { useContactForm } from "../components/ContactFormWrapper";

export default function Header() {
  // const { openContactForm } = useContactForm();
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

          <a
            href="#contact"
            className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white px-6 py-2 rounded-xl shadow-lg transition-all duration-300 text-lg font-medium"
            aria-label="מעבר לטופס יצירת קשר"
            tabIndex={0}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            השאירו פרטים ואחזור אליכם
          </a>
        </nav>
      </div>
    </header>
  );
}

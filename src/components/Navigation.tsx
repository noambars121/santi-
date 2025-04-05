import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useContactForm } from "../components/ContactFormWrapper";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { openContactForm } = useContactForm();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setIsOpen(false); // Close mobile menu if open
    console.log("Navigation: Contact button clicked");
    setTimeout(() => {
      openContactForm();
    }, 0);
  };

  return (
    <nav
      className="bg-white shadow-lg fixed w-full z-50"
      role="navigation"
      aria-label="תפריט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://storage.googleapis.com/tempo-public-images/github%7C186841034-1739185595925-Logo3png"
                alt="לוגו סנטיאגו מרזי"
                className="h-16 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
              aria-label="דף הבית"
            >
              בית
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium bg-transparent"
              aria-label="אודות סנטיאגו מרזי"
            >
              עליי
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium bg-transparent"
              aria-label="חבילות אילוף"
            >
              חבילות
            </button>

            <button
              onClick={handleContactClick}
              className="bg-[#0B4619] text-white hover:bg-[#083612] px-4 py-2 rounded-md text-lg font-medium"
              aria-label="פתיחת טופס יצירת קשר"
            >
              השאירו פרטים ואחזור אליכם
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0B4619] hover:text-[#083612] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0B4619]"
            >
              <span className="sr-only">פתח תפריט ראשי</span>
              {isOpen ? (
                <>
                  <X className="block h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">סגור תפריט</span>
                </>
              ) : (
                <>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">פתח תפריט</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium text-right"
              aria-label="דף הבית"
              onClick={() => setIsOpen(false)}
            >
              בית
            </Link>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium text-right w-full text-right bg-transparent"
              aria-label="חבילות אילוף"
            >
              חבילות
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium text-right w-full text-right bg-transparent"
              aria-label="אודות סנטיאגו מרזי"
            >
              עליי
            </button>

            <button
              onClick={handleContactClick}
              className="bg-[#0B4619] text-white hover:bg-[#083612] block px-3 py-2 rounded-md text-base font-medium text-center w-full"
              aria-label="פתיחת טופס יצירת קשר"
            >
              השאירו פרטים ואחזור אליכם
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

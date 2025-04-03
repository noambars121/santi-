import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white shadow-lg fixed w-full z-50"
      role="navigation"
      aria-label="תפריט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/tempo-public-images/github%7C186841034-1739185595925-Logo3png"
              alt="לוגו סנטיאגו מרזי"
              className="h-16 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
              loading="eager"
            />
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
            <Link
              to="/about"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
              aria-label="אודות סנטיאגו מרזי"
            >
              עליי
            </Link>
            <Link
              to="/packages"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
              aria-label="חבילות אילוף"
            >
              חבילות
            </Link>

            <Link
              to="/contact"
              className="bg-[#0B4619] text-white hover:bg-[#083612] px-4 py-2 rounded-md text-lg font-medium"
              aria-label="צור קשר"
            >
              צור קשר
            </Link>
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
            >
              בית
            </Link>
            <Link
              to="/packages"
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium text-right"
              aria-label="חבילות אילוף"
            >
              חבילות
            </Link>
            <Link
              to="/about"
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium text-right"
              aria-label="אודות סנטיאגו מרזי"
            >
              עליי
            </Link>

            <Link
              to="/contact"
              className="bg-[#0B4619] text-white hover:bg-[#083612] block px-3 py-2 rounded-md text-base font-medium text-center"
              aria-label="צור קשר בוואטסאפ"
            >
              צור קשר בוואטסאפ{" "}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

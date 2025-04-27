import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-[#0B4619]"
          >
            <img
              src="/logo.png"
              alt="Santiago Merzi Logo"
              className="h-12 w-auto"
            />
            סנטיאגו מרזי
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-[#0B4619]">
              עליי
            </a>
            <a href="#packages" className="text-gray-600 hover:text-[#0B4619]">
              חבילות
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-[#0B4619]">
              גלריה
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-[#0B4619]"
            >
              המלצות
            </a>
            <Button
              variant="default"
              className="bg-[#0B4619] hover:bg-[#0B4619]/90 text-white"
            >
              צור קשר
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="md:hidden py-4 fixed inset-0 z-50 bg-white/95 flex flex-col items-center justify-center focus:outline-none"
            aria-label="תפריט ניווט ראשי"
            onKeyDown={(e) => {
              if (e.key === 'Escape') setIsMenuOpen(false);
            }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="סגור תפריט"
              className="absolute top-4 left-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0B4619]"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsMenuOpen(false);
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col gap-4 mt-8" aria-label="קישורי ניווט">
              <a
                href="#about"
                className="text-gray-600 hover:text-[#0B4619] py-2 focus:outline-none focus:ring-2 focus:ring-[#0B4619]"
                tabIndex={0}
                aria-label="עליי"
                onClick={() => setIsMenuOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsMenuOpen(false);
                }}
              >
                עליי
              </a>
              <a
                href="#packages"
                className="text-gray-600 hover:text-[#0B4619] py-2 focus:outline-none focus:ring-2 focus:ring-[#0B4619]"
                tabIndex={0}
                aria-label="חבילות"
                onClick={() => setIsMenuOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsMenuOpen(false);
                }}
              >
                חבילות
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-[#0B4619] py-2 focus:outline-none focus:ring-2 focus:ring-[#0B4619]"
                tabIndex={0}
                aria-label="גלריה"
                onClick={() => setIsMenuOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsMenuOpen(false);
                }}
              >
                גלריה
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-[#0B4619] py-2 focus:outline-none focus:ring-2 focus:ring-[#0B4619]"
                tabIndex={0}
                aria-label="המלצות"
                onClick={() => setIsMenuOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsMenuOpen(false);
                }}
              >
                המלצות
              </a>
              <Button
                variant="default"
                className="bg-[#0B4619] hover:bg-[#0B4619]/90 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#0B4619]"
                onClick={() => setIsMenuOpen(false)}
                aria-label="צור קשר"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsMenuOpen(false);
                }}
              >
                צור קשר
              </Button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

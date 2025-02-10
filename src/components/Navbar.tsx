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
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-gray-600 hover:text-[#0B4619] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                עליי
              </a>
              <a
                href="#packages"
                className="text-gray-600 hover:text-[#0B4619] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                חבילות
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-[#0B4619] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                גלריה
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-[#0B4619] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                המלצות
              </a>
              <Button
                variant="default"
                className="bg-[#0B4619] hover:bg-[#0B4619]/90 text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

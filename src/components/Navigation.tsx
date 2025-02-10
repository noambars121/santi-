import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/tempo-public-images/github%7C186841034-1739185595925-Logo3png"
              alt="Santiago Merzi Logo"
              className="h-16 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
            >
              בית
            </Link>
            <Link
              to="/about"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
            >
              עליי
            </Link>
            <Link
              to="/packages"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
            >
              חבילות
            </Link>
            <Link
              to="/videos"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
            >
              סרטונים
            </Link>
            <Link
              to="/reviews"
              className="text-[#0B4619] hover:text-[#083612] px-3 py-2 rounded-md text-lg font-medium"
            >
              ביקורות
            </Link>
            <Link
              to="/contact"
              className="bg-[#0B4619] text-white hover:bg-[#083612] px-4 py-2 rounded-md text-lg font-medium"
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
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
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
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium"
            >
              בית
            </Link>
            <Link
              to="/about"
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium"
            >
              עליי
            </Link>
            <Link
              to="/packages"
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium"
            >
              חבילות
            </Link>
            <Link
              to="/videos"
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium"
            >
              סרטונים
            </Link>
            <Link
              to="/reviews"
              className="text-[#0B4619] hover:text-[#083612] block px-3 py-2 rounded-md text-base font-medium"
            >
              ביקורות
            </Link>
            <Link
              to="/contact"
              className="bg-[#0B4619] text-white hover:bg-[#083612] block px-3 py-2 rounded-md text-base font-medium"
            >
              צור קשר
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

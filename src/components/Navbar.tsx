import { useState } from "react";
import { Menu, X, User, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual form submission logic here
    alert('תודה! נחזור אליך בהקדם');
    setFormData({ name: '', email: '', message: '' });
    setIsContactFormOpen(false);
  };

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
            <a href="/contact">
              <Button
                variant="default"
                className="bg-[#0B4619] hover:bg-[#0B4619]/90 text-white"
              >
                צור קשר
              </Button>
            </a>
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
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                aria-label="צור קשר"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsMenuOpen(false);
                }}
              >
                <Button
                  variant="default"
                  className="bg-[#0B4619] hover:bg-[#0B4619]/90 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#0B4619]"
                >
                  צור קשר
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsContactFormOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#0B4619]">צור קשר</h2>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="סגור טופס"
                  tabIndex={0}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 text-right" dir="rtl">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0B4619] focus:ring-[#0B4619] sm:text-sm"
                    tabIndex={0}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    דוא"ל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0B4619] focus:ring-[#0B4619] sm:text-sm"
                    tabIndex={0}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0B4619] focus:ring-[#0B4619] sm:text-sm"
                    tabIndex={0}
                  />
                </div>
                
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0B4619] hover:bg-[#0B4619]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B4619]"
                    tabIndex={0}
                  >
                    שלח הודעה
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsContactFormOpen(false)}
                    className="mr-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B4619]"
                    tabIndex={0}
                  >
                    ביטול
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

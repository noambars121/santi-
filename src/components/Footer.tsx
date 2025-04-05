import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { useContactForm } from "../components/ContactFormWrapper";

export default function Footer() {
  const { openContactForm } = useContactForm();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="py-8 border-t bg-[#d39a6a]"
      role="contentinfo"
      aria-label="פוטר"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div>
            <Link
              to="/"
              className="text-white font-bold text-xl hover:text-[#124A34] transition-colors"
            >
              סנטיאגו מרזי - אילוף כלבים מקצועי
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#124A34] transition-colors bg-transparent"
              aria-label="מעבר לאודות"
            >
              עליי
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-white hover:text-[#124A34] transition-colors bg-transparent"
              aria-label="מעבר לחבילות"
            >
              חבילות
            </button>
            <Link
              to="/accessibility-statement"
              className="text-white hover:text-[#124A34] transition-colors"
              aria-label="מעבר להצהרת נגישות"
            >
              הצהרת נגישות
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/santiago.trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#124A34] transition-colors"
              aria-label="פייסבוק"
            >
              <Facebook size={24} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/santiago.trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#124A34] transition-colors"
              aria-label="אינסטגרם"
            >
              <Instagram size={24} aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@dog_trainer_santi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#124A34] transition-colors"
              aria-label="טיקטוק"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <button
              onClick={openContactForm}
              className="text-white hover:text-[#124A34] transition-colors p-0 bg-transparent hover:bg-transparent flex items-center justify-center"
              aria-label="פתיחת טופס יצירת קשר"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-white">
            © 2024 סנטיאגו מרזי. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}

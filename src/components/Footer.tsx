import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com",
      label: "Youtube",
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "054-123-4567",
      href: "tel:+972541234567",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "contact@santiago.co.il",
      href: "mailto:contact@santiago.co.il",
    },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="bg-[#d39a6a] text-white safe-area-bottom safe-area-x"
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-2">סנטיאגו מרזי</h3>
            <p className="text-white/90">אילוף כלבים מקצועי ומשפחתי</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 rounded-full w-10 h-10"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Credits Section */}
        <div className="border-t border-white/20 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {new Date().getFullYear()} סנטיאגו מרזי. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-2">
              <span>עיצוב ופיתוח:</span>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Your Studio Name
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

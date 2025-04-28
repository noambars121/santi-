import { createContext, useContext } from "react";

// Remove all modal logic and context

// Convenience component for contact buttons
interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function ContactButton({
  className = "bg-[#124A34] text-white rounded-xl px-6 py-3 shadow-lg hover:bg-[#0f3e2c]",
  children = "השאירו פרטים ואחזור אליכם",
}: ContactButtonProps) {
  return (
    <a
      href="#contact"
      className={className}
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
      {children}
    </a>
  );
}

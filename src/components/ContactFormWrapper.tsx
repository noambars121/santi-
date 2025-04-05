import { useState, createContext, useContext, useRef, useEffect } from "react";
import { ContactForm } from "./ContactForm";
import { Button } from "./ui/button";

// Create a context for the contact form
type ContactFormContextType = {
  openContactForm: () => void;
};

const ContactFormContext = createContext<ContactFormContextType>({
  openContactForm: () => {},
});

// Custom hook to use the contact form context
export const useContactForm = () => useContext(ContactFormContext);

interface ContactFormWrapperProps {
  children: React.ReactNode;
}

export function ContactFormWrapper({ children }: ContactFormWrapperProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const openContactForm = () => {
    console.log("Opening contact form");
    setIsContactOpen(true);
  };

  // Expose the openContactForm method to the DOM for hash navigation
  useEffect(() => {
    if (wrapperRef.current) {
      // @ts-ignore - Adding custom property to DOM element
      wrapperRef.current["__CONTACT_FORM_API"] = { openContactForm };
    }
  }, []);

  return (
    <ContactFormContext.Provider value={{ openContactForm }}>
      <div ref={wrapperRef} data-contact-wrapper>
        {children}

        {/* Render the ContactForm once at the root level */}
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => {
            console.log("Closing contact form");
            setIsContactOpen(false);
          }}
          buttonText="" // Buttons will open it from outside
          buttonClassName="hidden"
          title="השאירו פרטים ונחזור אליכם בהקדם"
          description="מלאו את הפרטים הבאים ואנו נחזור אליכם בהקדם האפשרי"
        />
      </div>
    </ContactFormContext.Provider>
  );
}

// Convenience component for contact buttons
export function ContactButton({
  className = "bg-[#124A34] text-white rounded-xl px-6 py-3 shadow-lg hover:bg-[#0f3e2c]",
  children = "השאירו פרטים ואחזור אליכם",
}) {
  const { openContactForm } = useContactForm();

  const handleClick = () => {
    console.log("Contact button clicked");
    openContactForm();
  };

  return (
    <Button onClick={handleClick} className={className}>
      {children}
    </Button>
  );
}

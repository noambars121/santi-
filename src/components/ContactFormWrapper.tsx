import { useState, createContext, useContext, useRef, useEffect, useCallback, useMemo } from "react";
import { ContactForm } from "./ContactForm";
import { Button } from "./ui/button";

// Create a context for the contact form
type ContactFormContextType = {
  openContactForm: () => void;
  closeContactForm: () => void;
};

const ContactFormContext = createContext<ContactFormContextType>({
  openContactForm: () => {},
  closeContactForm: () => {}
});

// Custom hook to use the contact form context
export const useContactForm = () => useContext(ContactFormContext);

interface ContactFormWrapperProps {
  children: React.ReactNode;
}

export function ContactFormWrapper({ children }: ContactFormWrapperProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // משופר - שומר את הפונקציה בין רינדורים
  const openContactForm = useCallback(() => {
    console.log("Opening contact form");
    setIsContactOpen(true);
  }, []);

  // פונקציה ברורה לסגירת הטופס
  const closeContactForm = useCallback(() => {
    console.log("Closing contact form from wrapper");
    setIsContactOpen(false);
  }, []);

  // Expose the openContactForm method to the DOM for hash navigation
  useEffect(() => {
    if (wrapperRef.current) {
      // @ts-ignore - Adding custom property to DOM element
      wrapperRef.current["__CONTACT_FORM_API"] = { 
        openContactForm,
        closeContactForm
      };
    }
  }, [openContactForm, closeContactForm]);

  // Context value קבוע בין רינדורים
  const contextValue = useMemo(() => ({
    openContactForm,
    closeContactForm
  }), [openContactForm, closeContactForm]);

  return (
    <ContactFormContext.Provider value={contextValue}>
      <div ref={wrapperRef} data-contact-wrapper>
        {children}

        {/* Render the ContactForm once at the root level */}
        <ContactForm
          isOpen={isContactOpen}
          onClose={closeContactForm}
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
    // חשוב - מונע מהאירוע להמשיך בבאבלינג
    return false;
  };

  return (
    <Button 
      onClick={handleClick} 
      className={className}
      type="button"
    >
      {children}
    </Button>
  );
}

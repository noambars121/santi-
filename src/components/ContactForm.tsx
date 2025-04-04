import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import {
  CheckCircle,
  Send,
  User,
  Phone,
  Mail,
  MessageSquare,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "./ui/dialog";
import { motion } from "framer-motion";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "שם חייב להכיל לפחות 2 תווים" }),
  phone: z
    .string()
    .min(9, { message: "מספר טלפון חייב להכיל לפחות 9 ספרות" })
    .regex(/^\d+$/, { message: "מספר טלפון חייב להכיל ספרות בלבד" }),
  email: z
    .string()
    .email({ message: "כתובת אימייל לא תקינה" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(5, { message: "הודעה חייבת להכיל לפחות 5 תווים" })
    .max(500, { message: "הודעה לא יכולה להכיל יותר מ-500 תווים" }),
  notifications: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  buttonText?: string;
  buttonClassName?: string;
  buttonIcon?: React.ReactNode;
  title?: string;
  description?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

// Reusable form field component
const FormField = ({
  id,
  label,
  icon: Icon,
  required = false,
  register,
  errors,
  type = "text",
  placeholder,
  inputRef = null,
}: {
  id: "name" | "phone" | "email" | "message";
  label: string;
  icon: React.ElementType;
  required?: boolean;
  register: any;
  errors: any;
  type?: string;
  placeholder: string;
  inputRef?: React.RefObject<HTMLInputElement> | null;
}) => {
  const isTextarea = id === "message";
  const InputComponent = isTextarea ? Textarea : Input;
  const inputProps = {
    id,
    type,
    placeholder,
    ...register(id),
    className: `rounded-lg border py-1.5 px-3 focus:border-[#124A34] focus:ring-[#124A34]/20 transition-all duration-300 text-sm ${errors[id] ? "border-[#d39a6a] bg-[#d39a6a]/5" : "border-gray-200"}`,
    dir: "rtl",
    ...(isTextarea
      ? {
          className: `min-h-[60px] rounded-lg border py-1.5 px-3 focus:border-[#124A34] focus:ring-[#124A34]/20 transition-all duration-300 text-sm ${errors[id] ? "border-[#d39a6a] bg-[#d39a6a]/5" : "border-gray-200"}`,
        }
      : {}),
    ...(inputRef ? { ref: inputRef } : {}),
  };

  return (
    <div className="space-y-1">
      <Label
        htmlFor={id}
        className="text-right block text-[#124A34] text-xs font-medium flex items-center gap-1.5 mb-0.5"
      >
        <Icon className="h-3.5 w-3.5 text-[#d39a6a]" />
        {label}{" "}
        {required && <span className="text-[#d39a6a] font-bold">*</span>}
      </Label>
      <InputComponent {...inputProps} />
      {errors[id] && (
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[#d39a6a] text-xs flex items-center gap-1 mt-0.5"
        >
          <span className="inline-block">⚠️</span> {errors[id].message}
        </motion.p>
      )}
    </div>
  );
};

export function ContactForm({
  buttonText = "צור קשר",
  buttonClassName = "",
  buttonIcon,
  title = "השאירו פרטים ונחזור אליכם בהקדם",
  description = "מלאו את הפרטים הבאים ואנו נחזור אליכם בהקדם האפשרי",
  onClose,
  isOpen: externalIsOpen,
}: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(externalIsOpen || false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync with external isOpen prop when it changes
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen);
    }
  }, [externalIsOpen]);

  // Manage body scrolling and focus
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      // Focus the first input field after dialog is fully rendered
      if (!isSubmitted && nameInputRef.current) {
        setTimeout(() => nameInputRef.current?.focus(), 100);
      }
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Handle escape key to close the dialog
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) handleClose();
    };
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, isSubmitted]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      notifications: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();

    // Reset form state after dialog is closed
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal={true}>
      <DialogTrigger asChild>
        <Button
          className={buttonClassName}
          onClick={() => setIsOpen(true)}
          aria-label="פתיחת טופס יצירת קשר"
        >
          {buttonIcon}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogOverlay className="bg-black/70 backdrop-blur-md fixed inset-0 z-50" />
      <DialogContent className="w-[95%] max-w-[380px] sm:max-w-[420px] p-0 rounded-xl overflow-hidden border border-[#d39a6a]/20 shadow-2xl mx-auto max-h-[85vh] h-auto z-50 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {/* Close button repositioned to top-right corner with better styling */}
        <Button
          type="button"
          onClick={handleClose}
          className="absolute top-2 right-2 h-7 w-7 p-0 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 shadow-sm transition-colors duration-200 flex items-center justify-center"
          aria-label="סגור טופס"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Header with premium gradient background */}
        <div className="bg-gradient-to-r from-[#0d3626] via-[#124A34] to-[#1a6349] p-4 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center mb-1.5 flex items-center justify-center gap-2">
              {title}
            </DialogTitle>
            <DialogDescription className="text-center text-white/90 text-sm">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-4 bg-white">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-4 text-center"
            >
              <div className="bg-[#124A34]/10 rounded-full p-2.5 mb-3">
                <CheckCircle className="w-10 h-10 text-[#124A34]" />
              </div>
              <h3 className="text-lg font-bold mb-1.5 text-[#124A34]">
                תודה על פנייתך!
              </h3>
              <p className="text-gray-600 mb-4 max-w-sm text-xs">
                קיבלנו את הפרטים שלך ונחזור אליך בהקדם האפשרי.
              </p>
              <Button
                onClick={handleClose}
                className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white px-5 py-1.5 rounded-full transition-all duration-300 shadow-md text-sm"
              >
                סגור
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  id="name"
                  label="שם מלא"
                  icon={User}
                  required
                  register={register}
                  errors={errors}
                  placeholder="הכנס את שמך המלא"
                  inputRef={nameInputRef}
                />

                <FormField
                  id="phone"
                  label="טלפון"
                  icon={Phone}
                  required
                  register={register}
                  errors={errors}
                  placeholder="מספר טלפון"
                />
              </div>

              <FormField
                id="email"
                label="אימייל"
                icon={Mail}
                register={register}
                errors={errors}
                type="email"
                placeholder="כתובת אימייל"
              />

              <FormField
                id="message"
                label="הודעה"
                icon={MessageSquare}
                required
                register={register}
                errors={errors}
                placeholder="כתוב את הודעתך כאן"
              />

              <div className="flex items-center space-x-2 space-x-reverse rtl:space-x-reverse pt-1">
                <Checkbox
                  id="notifications"
                  {...register("notifications")}
                  className="border-[#124A34] h-4 w-4 data-[state=checked]:bg-[#124A34] data-[state=checked]:text-white"
                />
                <Label
                  htmlFor="notifications"
                  className="text-[10px] text-gray-700 cursor-pointer flex-1 text-right"
                >
                  אני מאשר/ת קבלת הודעות תזכורת ותוכן פרסומי
                </Label>
              </div>

              <div className="pt-3 flex justify-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#124A34] to-[#1a6349] hover:from-[#0f3e2c] hover:to-[#155a40] w-full py-2 text-sm font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>שולח...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 group-hover:translate-x-[-4px] transition-transform duration-300" />
                      <span>שלח פרטים</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center text-[10px] text-gray-500 pt-1">
                <p>
                  המידע שתמסור ישמש אותנו ליצירת קשר בלבד ולא יועבר לצד שלישי
                </p>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

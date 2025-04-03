import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  CheckCircle,
  Send,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { motion } from "framer-motion";

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

  // Sync with external isOpen prop when it changes
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen);
    }
  }, [externalIsOpen]);

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

  // Handle escape key to close the dialog
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
      <DialogContent className="sm:max-w-[500px] p-0 rounded-2xl overflow-hidden border-2 border-[#d39a6a]/30 shadow-xl">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#124A34] to-[#1a6349] p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2 flex items-center justify-center gap-2">
              {title}
            </DialogTitle>
            <DialogDescription className="text-center text-white/90 text-base">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 bg-white">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <div className="bg-[#124A34]/10 rounded-full p-4 mb-6">
                <CheckCircle className="w-16 h-16 text-[#124A34]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#124A34]">
                תודה על פנייתך!
              </h3>
              <p className="text-gray-600 mb-8 max-w-sm">
                קיבלנו את הפרטים שלך ונחזור אליך בהקדם האפשרי. אנו מעריכים את
                פנייתך ונשמח לעזור לך.
              </p>
              <Button
                onClick={handleClose}
                className="bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white px-8 py-2 rounded-full transition-all duration-300 shadow-md"
              >
                סגור
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-right block text-[#124A34] font-medium flex items-center gap-2"
                >
                  <User className="h-4 w-4 text-[#d39a6a]" />
                  שם מלא <span className="text-[#d39a6a] font-bold">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="הכנס את שמך המלא"
                  {...register("name")}
                  className={`rounded-lg border-2 focus:border-[#124A34] focus:ring-[#124A34]/20 transition-all duration-300 ${errors.name ? "border-[#d39a6a] bg-[#d39a6a]/5" : "border-gray-200"}`}
                  dir="rtl"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#d39a6a] text-sm flex items-center gap-1 mt-1"
                  >
                    <span className="inline-block">⚠️</span>{" "}
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-right block text-[#124A34] font-medium flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-[#d39a6a]" />
                  טלפון <span className="text-[#d39a6a] font-bold">*</span>
                </Label>
                <Input
                  id="phone"
                  placeholder="הכנס את מספר הטלפון שלך"
                  {...register("phone")}
                  className={`rounded-lg border-2 focus:border-[#124A34] focus:ring-[#124A34]/20 transition-all duration-300 ${errors.phone ? "border-[#d39a6a] bg-[#d39a6a]/5" : "border-gray-200"}`}
                  dir="rtl"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#d39a6a] text-sm flex items-center gap-1 mt-1"
                  >
                    <span className="inline-block">⚠️</span>{" "}
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-right block text-[#124A34] font-medium flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-[#d39a6a]" />
                  אימייל
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="הכנס את כתובת האימייל שלך"
                  {...register("email")}
                  className={`rounded-lg border-2 focus:border-[#124A34] focus:ring-[#124A34]/20 transition-all duration-300 ${errors.email ? "border-[#d39a6a] bg-[#d39a6a]/5" : "border-gray-200"}`}
                  dir="rtl"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#d39a6a] text-sm flex items-center gap-1 mt-1"
                  >
                    <span className="inline-block">⚠️</span>{" "}
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-right block text-[#124A34] font-medium flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4 text-[#d39a6a]" />
                  הודעה <span className="text-[#d39a6a] font-bold">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="כתוב את הודעתך כאן"
                  {...register("message")}
                  className={`min-h-[120px] rounded-lg border-2 focus:border-[#124A34] focus:ring-[#124A34]/20 transition-all duration-300 ${errors.message ? "border-[#d39a6a] bg-[#d39a6a]/5" : "border-gray-200"}`}
                  dir="rtl"
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#d39a6a] text-sm flex items-center gap-1 mt-1"
                  >
                    <span className="inline-block">⚠️</span>{" "}
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <div className="pt-4 flex justify-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#124A34] to-[#1a6349] hover:from-[#0f3e2c] hover:to-[#155a40] w-full py-6 text-lg rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>שולח...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-[-4px] transition-transform duration-300" />
                      <span>שלח פרטים</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center text-xs text-gray-500 pt-2">
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

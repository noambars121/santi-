import { useState, useRef, FormEvent, ChangeEvent, FocusEvent, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  notifications?: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  form?: string;
}

interface ContactFormProps {
  onSuccessSubmit?: () => void;
  formId?: string;
}

const ContactForm = ({ onSuccessSubmit, formId = 'contact-form' }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    notifications: false
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  // Focus on name input when component mounts
  useEffect(() => {
    if (initialFocusRef.current) {
      console.log(`[${formId}] Focusing name input`);
      initialFocusRef.current.focus();
    }
  }, []);

  const validateForm = (data: FormData): FormErrors => {
    const errors: FormErrors = {};
    if (!data.name || data.name.trim() === '') {
      errors.name = 'שם מלא הוא שדה חובה';
    }
    
    if (!data.email || data.email.trim() === '') {
      errors.email = 'כתובת אימייל היא שדה חובה';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.email = 'נא להזין כתובת אימייל תקינה';
      }
    }
    
    if (!data.phone || !/^0\d{1,2}[-\s]?\d{7,8}$/.test(data.phone)) {
      errors.phone = 'נא להזין מספר טלפון תקין';
    }
    return errors;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    console.log(`[${formId}] Input change: ${name} = ${value}`);

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear specific error when user types in a field
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data from state
    const errors = validateForm(formData);
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Send to Telegram API endpoint
      const response = await fetch('/api/sendToTelegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          notifications: false
        });
        
        if (formRef.current) {
          formRef.current.reset();
        }
        
        // Call the onSuccessSubmit callback if provided
        if (onSuccessSubmit) {
          onSuccessSubmit();
        }
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.error || 'אירעה שגיאה בשליחת הטופס');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('אירעה שגיאה בשליחת הטופס, נסה שוב מאוחר יותר');
      setFormErrors({
        form: 'אירעה שגיאה בשליחת הטופס, נסה שוב מאוחר יותר'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use the formId to create unique identifiers for form elements
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const phoneId = `${formId}-phone`;
  const messageId = `${formId}-message`;
  const notificationsId = `${formId}-notifications`;

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto p-6 rtl">
      <div className="text-right">
        <h2 className="text-2xl font-bold mb-6 text-[#d39a6a]">השאירו פרטים</h2>
        
        {submitSuccess ? (
          <div 
            className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
            role="alert"
            aria-live="polite"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-green-800">תודה רבה!</h3>
            <p className="text-green-700 mt-1">פרטיך נשלחו בהצלחה. נחזור אליך בהקדם.</p>
          </div>
        ) : (
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-4"
            noValidate
            id={formId}
          >
            {formErrors.form && (
              <div 
                className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm mb-4"
                role="alert"
                aria-live="assertive"
              >
                {formErrors.form}
              </div>
            )}
            
            <div>
              <label htmlFor={nameId} className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
              <input
                ref={initialFocusRef}
                type="text"
                id={nameId}
                name="name"
                autoComplete="name"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
                  formErrors.name 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-[#d39a6a] focus:border-[#d39a6a]'
                }`}
                placeholder="שם מלא"
                disabled={isSubmitting}
                value={formData.name}
                onChange={handleInputChange}
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? `${nameId}-error` : undefined}
                required
              />
              {formErrors.name && (
                <p 
                  id={`${nameId}-error`}
                  className="mt-1 text-sm text-red-600"
                  aria-live="polite"
                >
                  {formErrors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor={emailId} className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
              <input
                type="email"
                id={emailId}
                name="email"
                autoComplete="email"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
                  formErrors.email 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-[#d39a6a] focus:border-[#d39a6a]'
                }`}
                placeholder="your@email.com"
                disabled={isSubmitting}
                dir="ltr"
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? `${emailId}-error` : undefined}
                required
              />
              {formErrors.email && (
                <p 
                  id={`${emailId}-error`}
                  className="mt-1 text-sm text-red-600"
                  aria-live="polite"
                >
                  {formErrors.email}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor={phoneId} className="block text-sm font-medium text-gray-700 mb-1">טלפון</label>
              <input
                type="tel"
                id={phoneId}
                name="phone"
                autoComplete="tel"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
                  formErrors.phone 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-[#d39a6a] focus:border-[#d39a6a]'
                }`}
                placeholder="050-0000000"
                disabled={isSubmitting}
                dir="ltr"
                value={formData.phone}
                onChange={handleInputChange}
                aria-invalid={!!formErrors.phone}
                aria-describedby={formErrors.phone ? `${phoneId}-error` : undefined}
                required
              />
              {formErrors.phone && (
                <p 
                  id={`${phoneId}-error`}
                  className="mt-1 text-sm text-red-600"
                  aria-live="polite"
                >
                  {formErrors.phone}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor={messageId} className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
              <textarea
                id={messageId}
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d39a6a] focus:border-[#d39a6a] outline-none transition-all"
                placeholder="איך אוכל לעזור לך?"
                disabled={isSubmitting}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="flex items-center space-x-2 space-x-reverse rtl:space-x-reverse pt-1">
              <input
                type="checkbox"
                id={notificationsId}
                name="notifications"
                className="border-[#124A34] h-4 w-4 text-[#124A34] rounded focus:ring-[#124A34] focus:border-[#124A34]"
                checked={formData.notifications}
                onChange={handleInputChange}
                tabIndex={0}
                aria-label="אישור קבלת הודעות תזכורת ותוכן פרסומי"
              />
              <label htmlFor={notificationsId} className="text-[10px] text-gray-700 cursor-pointer flex-1 text-right select-none">
                אני מאשר/ת קבלת הודעות תזכורת ותוכן פרסומי
              </label>
            </div>
            
            <button
              type="submit"
              className="mt-6 w-full bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white font-medium rounded-xl px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#d39a6a] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  שולח...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" className="mr-2">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                  </svg>
                  השאירו פרטים ואחזור אליכם
                </>
              )}
            </button>
            
            <div className="text-center text-[10px] text-gray-500 pt-1">
              <p>
                המידע שתמסור ישמש אותנו ליצירת קשר בלבד ולא יועבר לצד שלישי
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm; 
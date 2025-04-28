import { useState, useRef } from 'react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef(null);
  const initialFocusRef = useRef(null);

  const validateForm = (data) => {
    const errors = {};
    
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    const errors = validateForm(data);
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    try {
      console.log('Sending form data:', data);
      
      // Direct call to Telegram API
      // NOTE: This exposes your bot token in client-side code, only use for personal projects
      const TELEGRAM_TOKEN = '7696008604:AAGdsTP2G2yV2h-7f-4QOFQ2RN0xk0yruLE';
      const TELEGRAM_CHAT_ID = '-1002675016076';
      
      // First send contact info as a structured message
      const messageText = `New Contact Form Submission:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message || 'No message provided'}
Notifications: ${data.notifications === 'on' ? 'Yes' : 'No'}`;
      
      const messageResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: messageText,
          parse_mode: 'Markdown',
        }),
      });
      
      const messageResponseData = await messageResponse.json();
      console.log('Telegram API message response:', messageResponseData);
      
      if (!messageResponseData.ok) {
        throw new Error(messageResponseData.description || 'Failed to submit form');
      }
      
      // Then send the contact as a Telegram contact object
      if (data.phone) {
        const contactResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendContact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            phone_number: data.phone,
            first_name: data.name.split(' ')[0] || data.name,
            last_name: data.name.split(' ').slice(1).join(' ') || '',
            vcard: `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
TEL;TYPE=CELL:${data.phone}
EMAIL:${data.email}
END:VCARD`
          }),
        });
        
        const contactResponseData = await contactResponse.json();
        console.log('Telegram API contact response:', contactResponseData);
        
        if (!contactResponseData.ok) {
          console.error('Failed to send contact, but form was submitted:', contactResponseData.description);
          // Continue flow since the main message was sent
        }
      }
      
      setSubmitSuccess(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({
        form: 'אירעה שגיאה בשליחת הטופס, נסה שוב מאוחר יותר'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto p-6 rtl">
      <div className="text-right">
        <h2 className="text-2xl font-bold mb-6 text-[#d39a6a]">השאירו פרטים</h2>
        
        {submitSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-green-800">תודה רבה!</h3>
            <p className="text-green-700 mt-1">פרטיך נשלחו בהצלחה. נחזור אליך בהקדם.</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {formErrors.form && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm mb-4">
                {formErrors.form}
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
              <input
                ref={initialFocusRef}
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
                  formErrors.name 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-[#d39a6a] focus:border-[#d39a6a]'
                }`}
                placeholder="שם מלא"
                disabled={isSubmitting}
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? "name-error" : undefined}
              />
              {formErrors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">{formErrors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
                  formErrors.email 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-[#d39a6a] focus:border-[#d39a6a]'
                }`}
                placeholder="example@example.com"
                disabled={isSubmitting}
                dir="ltr"
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? "email-error" : undefined}
              />
              {formErrors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">טלפון</label>
              <input
                type="tel"
                id="phone"
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
                aria-invalid={!!formErrors.phone}
                aria-describedby={formErrors.phone ? "phone-error" : undefined}
              />
              {formErrors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d39a6a] focus:border-[#d39a6a] outline-none transition-all"
                placeholder="איך אוכל לעזור לך?"
                disabled={isSubmitting}
              />
            </div>
            {/* Checkbox for notifications */}
            <div className="flex items-center space-x-2 space-x-reverse rtl:space-x-reverse pt-1">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                className="border-[#124A34] h-4 w-4 text-[#124A34] rounded focus:ring-[#124A34] focus:border-[#124A34]"
                tabIndex={0}
                aria-label="אישור קבלת הודעות תזכורת ותוכן פרסומי"
              />
              <label htmlFor="notifications" className="text-[10px] text-gray-700 cursor-pointer flex-1 text-right select-none">
                אני מאשר/ת קבלת הודעות תזכורת ותוכן פרסומי
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-[#d39a6a] hover:bg-[#d39a6a]/90 text-white font-medium rounded-xl px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#d39a6a] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            {/* Privacy disclaimer */}
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
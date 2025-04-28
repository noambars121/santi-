import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const AccessibilityStatement = () => {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl" role="main" id="main-content">
      <Button
        onClick={() => navigate(-1)}
        className="mb-6 bg-[#d39a6a] hover:bg-[#d39a6a]/90 focus:ring-2 focus:ring-offset-2 focus:ring-[#d39a6a] focus:outline-none"
        aria-label="חזרה לדף הקודם"
      >
        חזרה
      </Button>

      <h1 className="text-3xl font-bold mb-6 text-[#d39a6a]">הצהרת נגישות</h1>

      <article className="space-y-6 text-lg">
        <p>
          אנו בסנטיאגו מרזי - אילוף כלבים מקצועי, מאמינים כי לכל אדם מגיעה הזכות
          לגשת למידע באינטרנט. אנו מחויבים לאפשר שימוש באתר שלנו לאנשים עם
          מוגבלויות ועושים כל מאמץ לוודא שהאתר שלנו עומד בתקנים המקובלים.
        </p>

        <section aria-labelledby="standards-heading">
          <h2 id="standards-heading" className="text-2xl font-semibold text-[#d39a6a] mt-8">
            תקן הנגישות שלנו
          </h2>
          <p>
            אתר זה נבנה תוך שאיפה לעמוד בדרישות תקן הנגישות הישראלי (ת"י 5568)
            המבוסס על הנחיות WCAG 2.1 ברמה AA. אנו ממשיכים לעבוד על שיפור הנגישות
            ומבצעים בדיקות תקופתיות לוודא עמידה בתקנים אלו.
          </p>
        </section>

        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-semibold text-[#d39a6a] mt-8">
            מה עשינו כדי להנגיש את האתר?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>הוספנו תיאורים חלופיים (alt text) לכל התמונות והאלמנטים הגרפיים באתר</li>
            <li>וידאנו שהאתר ניתן לניווט מלא באמצעות המקלדת באמצעות מקש Tab</li>
            <li>הקפדנו על ניגודיות צבעים העומדת בתקן (יחס של לפחות 4.5:1 לטקסט רגיל)</li>
            <li>יצרנו מבנה כותרות היררכי וברור (h1, h2, h3, וכו')</li>
            <li>הוספנו תכונות ARIA ומזהי אזורים (landmarks) לשיפור הנגישות עבור טכנולוגיות מסייעות</li>
            <li>הוספנו אפשרות להגדלת הטקסט ושינוי ניגודיות דרך תפריט הנגישות</li>
            <li>הוספנו תמיכה בפונט מותאם לדיסלקטים באמצעות OpenDyslexic</li>
            <li>הוספנו אפשרות להפחתת אנימציות עבור משתמשים עם רגישות לתנועה</li>
            <li>הוספנו מצב גווני אפור לעיוורי צבעים</li>
            <li>הוספנו קיצורי מקלדת לניווט מהיר באתר:
              <ul className="list-disc list-inside space-y-1 mr-6 mt-2">
                <li>מקש <kbd className="bg-gray-200 px-1 py-0.5 rounded">Esc</kbd> - סגירת חלונות קופצים</li>
                <li>מקש <kbd className="bg-gray-200 px-1 py-0.5 rounded">Tab</kbd> - מעבר בין אלמנטים</li>
                <li>מקש <kbd className="bg-gray-200 px-1 py-0.5 rounded">Enter</kbd> או <kbd className="bg-gray-200 px-1 py-0.5 rounded">Space</kbd> - לחיצה על כפתורים וקישורים</li>
              </ul>
            </li>
            <li>וידאנו תאימות לתוכנות הקראה (screen readers) נפוצות</li>
          </ul>
        </section>

        <section aria-labelledby="issues-heading">
          <h2 id="issues-heading" className="text-2xl font-semibold text-[#d39a6a] mt-8">
            דיווח על בעיות נגישות
          </h2>
          <p>
            אנו מתחייבים לשפר את נגישות האתר שלנו באופן מתמיד. אם נתקלתם בבעיית
            נגישות באתר, אנא צרו איתנו קשר:
          </p>
          <div className="mt-2">
            <p><strong>טלפון:</strong> <a href="tel:0529599490" className="text-[#0B4619] underline hover:text-[#083612] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B4619]">052-9599490</a></p>
            <p><strong>דוא"ל:</strong> <a href="mailto:santiago@dogtraining.co.il" className="text-[#0B4619] underline hover:text-[#083612] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B4619]">santiago@dogtraining.co.il</a></p>
          </div>
        </section>

        <section aria-labelledby="update-heading">
          <h2 id="update-heading" className="text-2xl font-semibold text-[#d39a6a] mt-8">
            תאריך עדכון אחרון
          </h2>
          <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: 11 ביולי 2024.</p>
        </section>
      </article>
    </main>
  );
};

export default AccessibilityStatement;

import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const AccessibilityStatement = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Button
        onClick={() => navigate(-1)}
        className="mb-6 bg-[#d39a6a] hover:bg-[#d39a6a]/90"
        aria-label="חזרה לדף הקודם"
      >
        חזרה
      </Button>

      <h1 className="text-3xl font-bold mb-6 text-[#d39a6a]">הצהרת נגישות</h1>

      <div className="space-y-6 text-lg">
        <p>
          אנו בסנטיאגו מרזי - אילוף כלבים מקצועי, מאמינים כי לכל אדם מגיעה הזכות
          לגשת למידע באינטרנט. אנו מחויבים לאפשר שימוש באתר שלנו לאנשים עם
          מוגבלויות.
        </p>

        <h2 className="text-2xl font-semibold text-[#d39a6a] mt-8">
          תקן הנגישות שלנו
        </h2>
        <p>
          אתר זה נבנה תוך שאיפה לעמוד בדרישות תקן הנגישות הישראלי (ת"י 5568)
          המבוסס על הנחיות WCAG 2.1 ברמה AA.
        </p>

        <h2 className="text-2xl font-semibold text-[#d39a6a] mt-8">
          מה עשינו כדי להנגיש את האתר?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>הוספנו תיאורים חלופיים (alt text) לכל התמונות באתר</li>
          <li>וידאנו שהאתר ניתן לניווט מלא באמצעות המקלדת</li>
          <li>הקפדנו על ניגודיות צבעים מספקת בין הטקסט לרקע</li>
          <li>יצרנו מבנה כותרות היררכי וברור</li>
          <li>הוספנו תכונות ARIA לשיפור הנגישות עבור טכנולוגיות מסייעות</li>
          <li>הוספנו אפשרות להגדלת הטקסט ושינוי ניגודיות</li>
          <li>הוספנו תמיכה בפונט מותאם לדיסלקטים</li>
          <li>הוספנו אפשרות להפחתת אנימציות</li>
          <li>הוספנו מצב גווני אפור לעיוורי צבעים</li>
          <li>הוספנו קיצורי מקלדת לניווט מהיר</li>
          <li>וידאנו תאימות מלאה לתקן ת"י 5568</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#d39a6a] mt-8">
          דיווח על בעיות נגישות
        </h2>
        <p>
          אנו מתחייבים לשפר את נגישות האתר שלנו באופן מתמיד. אם נתקלתם בבעיית
          נגישות באתר, אנא צרו איתנו קשר:
        </p>
        <p className="mt-2">
          <strong>טלפון:</strong> 052-9599490
          <br />
          <strong>דוא"ל:</strong> santiago@dogtraining.co.il
        </p>

        <h2 className="text-2xl font-semibold text-[#d39a6a] mt-8">
          תאריך עדכון אחרון
        </h2>
        <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: 16 בפברואר 2024.</p>
      </div>
    </div>
  );
};

export default AccessibilityStatement;

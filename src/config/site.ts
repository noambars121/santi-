export const siteConfig = {
  name: "סנטיאגו מרזי",
  title: "סנטיאגו מרזי - אילוף כלבים מקצועי",
  description:
    "אימון כלבים מקצועי עם שיטה ייחודית להצלחה מוכחת. מתמחה בפתרון בעיות התנהגות ובניית קשר חזק בין הכלב לבעליו.",
  phone: "050-1234567",
  whatsapp: "", // Removed WhatsApp link in favor of contact form
  email: "santiago@dogtraining.co.il",
  location: "נהריה, ישראל",
  social: {
    facebook: "https://www.facebook.com/santi221",
    instagram: "https://www.instagram.com/santi_dogtrainer/",
    tiktok: "https://www.tiktok.com/@dog_trainer_santi?lang=he-IL",
    youtube: "#",
  },
  images: {
    hero: "/IMG_9328.JPG",
    about: "/IMG_9328.JPG",
    gallery: [
      {
        url: "/IMG_9328.JPG",
        title: "אימון משמעת מקצועי",
        description: "טכניקות אימון מתקדמות",
      },
      {
        url: "/IMG_9328.JPG",
        title: "לפני ואחרי",
        description: "שינוי דרמטי תוך שבועיים",
      },
      {
        url: "/IMG_9328.JPG",
        title: "אימון משפחתי",
        description: "שיטות מותאמות למשפחה",
      },
      {
        url: "/IMG_9328.JPG",
        title: "אימון מתקדם",
        description: "טכניקות ייחודיות לכל כלב",
      },
    ],
  },
  packages: [
    {
      title: "אימון בסיסי",
      price: "₪1,200",
      description: "התחלה מצוינת לאימון בסיסי",
      features: [
        "✓ 4 מפגשים פרטיים",
        "✓ ייעוץ טלפוני 24/7",
        "✓ חוברת הדרכה דיגיטלית",
        "✗ אימון בבית הלקוח",
      ],
      highlight: false,
      badge: "חבילה בסיסית",
    },
    {
      title: "אימון מתקדם",
      price: "₪2,400",
      description: "האימון המקיף והמומלץ ביותר",
      features: [
        "✓ 8 מפגשים + 2 מפגשי תחזוקה",
        "✓ ליווי WhatsApp 24/7",
        "✓ חוברת הדרכה דיגיטלית",
        "✗ אימון בבית הלקוח",
      ],
      highlight: true,
      badge: "הכי פופולרי",
    },
    {
      title: "אימון פרימיום",
      price: "₪3,600",
      description: "אימון אינטנסיבי מקיף",
      features: [
        "✓ 12 מפגשים אינטנסיביים",
        "✓ ליווי WhatsApp 24/7",
        "✓ אימון בבית הלקוח",
        "✓ חוברת הדרכה דיגיטלית",
      ],
      highlight: false,
      badge: "VIP",
    },
  ],
  testimonials: [
    {
      name: "רוני מהקריות",
      text: "הגישה המקצועית והסבלנית של סנטיאגו עשתה פלאים. הכלב שלי עבר שינוי מדהים תוך זמן קצר!",
      avatar: "RK",
      rank: "בעל כלב מרוצה",
      rating: 5,
      date: "לפני שבוע",
    },
    {
      name: "משפחת לוי",
      text: "סנטיאגו הפך את הרוטווילר שלנו מכלב תוקפני לחבר אמיתי של המשפחה. הניסיון המקצועי שלו באמת ניכר.",
      avatar: "ML",
      rank: "משפחה מתל אביב",
      rating: 5,
      date: "לפני חודשיים",
    },
    {
      name: "דנה כהן",
      text: "בתור בעלת כלב ראשון, סנטיאגו נתן לי את הכלים והביטחון להיות מובילה אמיתית. ממליצה בחום!",
      avatar: "DC",
      rank: "בעלת כלב ראשון",
      rating: 5,
      date: "לפני 3 חודשים",
    },
  ],
  stats: [
    { number: "50+", label: "כלבים מאומנים" },
    { number: "98%", label: "לקוחות מרוצים" },
  ],
  about: {
    title: "קצת עליי",
    description: [
      "עם ניסיון בתחום אימון הכלבים, אני מתמחה בפתרון בעיות התנהגות ובבניית קשר חזק בין הכלב לבעליו.",
      "הגישה שלי מבוססת על הבנה עמוקה של פסיכולוגיית כלבים ושימוש בשיטות חיוביות ויעילות.",
    ],
    features: [
      "הסמכה באימון כלבים",
      "מומחה בטיפול בבעיות התנהגות",
      "ניסיון עם עשרות כלבים",
    ],
  },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-white overflow-hidden"
      role="region"
      aria-label="אודות"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/IMG_9328.JPG"
              alt="Dog trainer"
              className="shadow-lg md:h-[400px] object-cover w-[325px] h-[343px] opacity-[100%] rounded-[37px]"
            />
          </div>
          <div className="lg:w-1/2 text-right">
            <h2 className="text-4xl font-bold mb-6">קצת עליי</h2>
            <div className="flex items-center justify-end gap-4 mb-6">
              <span className="bg-[#D4A373] text-white px-4 py-2 rounded-full text-sm">
                מאלף כלבים מוסמך
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm">4.9/5</span>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              עם ניסיון בתחום אימון הכלבים, אני מתמחה בפתרון בעיות התנהגות
              ובבניית קשר חזק בין הכלב לבעליו.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              הגישה שלי מבוססת על הבנה עמוקה של פסיכולוגיית כלבים ושימוש בשיטות
              חיוביות ויעילות.
            </p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex items-center justify-end gap-2">
                <span>הסמכה באימון כלבים</span>
                <span className="text-green-600">✓</span>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>מומחה בטיפול בבעיות התנהגות</span>
                <span className="text-green-600">✓</span>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>ניסיון עם עשרות כלבים</span>
                <span className="text-green-600">✓</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

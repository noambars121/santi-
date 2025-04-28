import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "צור קשר - סנטיאגו מרזי",
  description: "צור איתי קשר למידע נוסף או לתיאום פגישה",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24 md:py-32">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#0B4619]">צור קשר</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          אשמח לענות על כל שאלה או לקבוע פגישת היכרות לדיון בפרויקט שלך
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#0B4619]">פרטי התקשרות</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 bg-[#0B4619]/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#0B4619]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">טלפון</h3>
                <p className="text-gray-600">054-1234567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 bg-[#0B4619]/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#0B4619]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">דואר אלקטרוני</h3>
                <p className="text-gray-600">santiago@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 bg-[#0B4619]/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#0B4619]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">מיקום</h3>
                <p className="text-gray-600">תל אביב והסביבה</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 bg-[#0B4619]/10 p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#0B4619]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">שעות עבודה</h3>
                <ul className="text-gray-600">
                  <li>ראשון - חמישי: 9:00 - 18:00</li>
                  <li>שישי: 9:00 - 13:00</li>
                  <li>שבת: סגור</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#0B4619]">טופס יצירת קשר</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
} 
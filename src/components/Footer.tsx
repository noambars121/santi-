import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/santiago.trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#d39a6a] transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/santiago.trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#d39a6a] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@santiago.trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#d39a6a] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 סנטיאגו מרזי. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}

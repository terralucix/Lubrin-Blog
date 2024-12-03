import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-6 w-6 text-blue-600" />
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'es' 
                ? 'Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra '
                : 'We use cookies to enhance your experience. By continuing to browse, you accept our '}
              <Link 
                to="/cookies-policy" 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {language === 'es' ? 'política de cookies' : 'cookies policy'}
              </Link>
              .
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'es' ? 'Aceptar' : 'Accept'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
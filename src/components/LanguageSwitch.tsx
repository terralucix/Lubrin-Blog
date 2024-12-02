import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../types';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
    >
      <Globe className="h-4 w-4" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitch from './LanguageSwitch';
import ThemeToggle from './ThemeToggle';
import Chatbot from './Chatbot';
import CalendarButton from './calendar/CalendarButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">

            <Link to="/" className="flex-shrink-0 flex items-center px-5">
                <img src="/images/L2.png" className="logo"></img>
            </Link>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white"> Lubrin Blog</h1>
            </Link>
            <div className=" hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className=" text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                {t.home}
              </Link>
              <Link to="/categories" className=" text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                {t.categories}
              </Link>
              <Link to="/about" className=" text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                {t.about}
              </Link>
              <Link to="/services" className=" text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                {t.services}
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitch />
            <CalendarButton />
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle chat"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mr-2"
              aria-label="Toggle chat"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              {t.home}
            </Link>
            <Link
              to="/categories"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              {t.categories}
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              {t.about}
            </Link>
            <Link
              to="/services"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              {t.services}
            </Link>
            <div className="pl-3 pr-4 py-2 flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSwitch />
              <CalendarButton />
            </div>
          </div>
        </div>
      )}

      {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
    </header>
  );
}

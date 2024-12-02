import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import Calendar from './Calendar';
import { events } from '../../data/events';
import { useLanguage } from '../../context/LanguageContext';

export default function CalendarButton() {
  const [showCalendar, setShowCalendar] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <button
        onClick={() => setShowCalendar(true)}
        className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        aria-label={language === 'es' ? 'Abrir calendario' : 'Open calendar'}
      >
        <CalendarIcon className="h-5 w-5" />
      </button>

      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-auto">
            <div className="p-4">
              <Calendar events={events} />
            </div>
            <div className="border-t dark:border-gray-700 p-4 flex justify-end">
              <button
                onClick={() => setShowCalendar(false)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
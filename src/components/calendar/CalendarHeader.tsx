import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useLanguage } from '../../context/LanguageContext';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export default function CalendarHeader({ currentDate, onPrevMonth, onNextMonth }: CalendarHeaderProps) {
  const { language } = useLanguage();
  
  return (
    <div className="flex items-center justify-between mb-8">
      <button
        onClick={onPrevMonth}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <h2 className="text-2xl font-bold">
        {format(currentDate, 'MMMM yyyy', {
          locale: language === 'es' ? es : undefined
        })}
      </h2>
      
      <button
        onClick={onNextMonth}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
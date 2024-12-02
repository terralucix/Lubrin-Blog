import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { X } from 'lucide-react';
import { CalendarEvent } from '../../types/calendar';
import { useLanguage } from '../../context/LanguageContext';
import EventList from './EventList';

interface EventModalProps {
  date: Date;
  events: CalendarEvent[];
  onClose: () => void;
}

export default function EventModal({ date, events, onClose }: EventModalProps) {
  const { language } = useLanguage();
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-xl font-semibold">
            {format(date, 'PP', { locale: language === 'es' ? es : undefined })}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <EventList events={events} selectedDate={date} />
        </div>
      </div>
    </div>
  );
}
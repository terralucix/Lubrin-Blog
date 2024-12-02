import React from 'react';
import { format, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarEvent, eventCategories } from '../../types/calendar';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

interface EventListProps {
  events: CalendarEvent[];
  selectedDate: Date | null;
}

export default function EventList({ events, selectedDate }: EventListProps) {
  const { language } = useLanguage();
  const locale = language === 'es' ? es : undefined;

  const filteredEvents = selectedDate
    ? events.filter(event => isSameDay(event.date, selectedDate))
    : events;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        {language === 'es' ? 'Eventos' : 'Events'}
        {selectedDate && (
          <span className="text-gray-600 dark:text-gray-300 ml-2">
            {format(selectedDate, 'PP', { locale })}
          </span>
        )}
      </h3>

      {filteredEvents.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">
          {language === 'es'
            ? 'No hay eventos programados'
            : 'No events scheduled'}
        </p>
      ) : (
        <div className="space-y-4">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
            >
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${eventCategories[event.category].color}`} />
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">{event.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{format(event.date, 'PP', { locale })}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
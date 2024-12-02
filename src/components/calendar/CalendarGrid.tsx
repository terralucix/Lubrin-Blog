import React from 'react';
import { format, isToday, isSameMonth, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { useLanguage } from '../../context/LanguageContext';
import { MonthData, CalendarEvent } from '../../types/calendar';
import DayCell from './DayCell';

interface CalendarGridProps {
  monthData: MonthData;
  selectedDate: Date | null;
  onDateClick: (date: Date) => void;
  getDayEvents: (date: Date) => CalendarEvent[];
}

export default function CalendarGrid({ 
  monthData, 
  selectedDate, 
  onDateClick,
  getDayEvents 
}: CalendarGridProps) {
  const { language } = useLanguage();
  const locale = language === 'es' ? es : undefined;

  const weekDays = Array.from({ length: 7 }, (_, i) => 
    format(new Date(2024, 0, i + 1), 'EEEE', { locale })
  );

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="text-center text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            {format(new Date(2024, 0, index + 1), 'EEEEEE', { locale })}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {monthData.days.map((date, index) => (
          <DayCell
            key={index}
            date={date}
            events={getDayEvents(date)}
            isToday={isToday(date)}
            isCurrentMonth={isSameMonth(date, new Date(monthData.year, monthData.month))}
            isSelected={selectedDate ? isSameDay(date, selectedDate) : false}
            onClick={() => onDateClick(date)}
          />
        ))}
      </div>
    </div>
  );
}
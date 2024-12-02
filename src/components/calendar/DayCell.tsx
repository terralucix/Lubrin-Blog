import React from 'react';
import { format } from 'date-fns';
import { CalendarEvent, eventCategories } from '../../types/calendar';

interface DayCellProps {
  date: Date;
  events: CalendarEvent[];
  isToday: boolean;
  isCurrentMonth: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export default function DayCell({
  date,
  events,
  isToday,
  isCurrentMonth,
  isSelected,
  onClick
}: DayCellProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full aspect-square p-1 relative
        ${isCurrentMonth ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}
        ${isSelected ? 'ring-2 ring-blue-500' : ''}
        hover:bg-gray-100 dark:hover:bg-gray-700
        rounded-lg transition-colors
      `}
    >
      <div
        className={`
          text-sm font-medium
          ${isToday ? 'bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto' : ''}
          ${!isCurrentMonth ? 'text-gray-400 dark:text-gray-600' : ''}
        `}
      >
        {format(date, 'd')}
      </div>

      {events.length > 0 && (
        <div className="absolute bottom-1 left-1 right-1 flex gap-1">
          {events.slice(0, 3).map((event, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 rounded-full
                ${eventCategories[event.category].color}
              `}
            />
          ))}
          {events.length > 3 && (
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
          )}
        </div>
      )}
    </button>
  );
}
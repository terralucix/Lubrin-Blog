import React, { useState } from 'react';
import { format, addMonths, subMonths, isSameMonth, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { es } from 'date-fns/locale';
import { useLanguage } from '../../context/LanguageContext';
import { CalendarEvent, MonthData } from '../../types/calendar';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventList from './EventList';
import EventModal from './EventModal';
import { events } from '../../data/events';

export default function Calendar() {
  const { language } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const getMonthData = (date: Date): MonthData => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    const days = eachDayOfInterval({ start, end });
    const monthEvents = events.filter(event => 
      isSameMonth(new Date(event.date), date)
    );

    return {
      month: date.getMonth(),
      year: date.getFullYear(),
      days,
      events: monthEvents
    };
  };

  const monthData = getMonthData(currentDate);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowEventModal(true);
  };

  const getDayEvents = (date: Date): CalendarEvent[] => {
    return events.filter(event => isSameDay(new Date(event.date), date));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CalendarGrid
            monthData={monthData}
            selectedDate={selectedDate}
            onDateClick={handleDateClick}
            getDayEvents={getDayEvents}
          />
        </div>

        <div>
          <EventList
            events={monthData.events}
            selectedDate={selectedDate}
          />
        </div>
      </div>

      {showEventModal && selectedDate && (
        <EventModal
          date={selectedDate}
          events={getDayEvents(selectedDate)}
          onClose={() => setShowEventModal(false)}
        />
      )}
    </div>
  );
}
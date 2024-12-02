export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  time?: string;
  location?: string;
  category: 'cultural' | 'festive' | 'religious' | 'other';
}

export interface MonthData {
  month: number;
  year: number;
  days: Date[];
  events: CalendarEvent[];
}

export const eventCategories = {
  cultural: {
    color: 'bg-blue-500',
    label: {
      es: 'Cultural',
      en: 'Cultural'
    }
  },
  festive: {
    color: 'bg-green-500',
    label: {
      es: 'Festivo',
      en: 'Festive'
    }
  },
  religious: {
    color: 'bg-purple-500',
    label: {
      es: 'Religioso',
      en: 'Religious'
    }
  },
  other: {
    color: 'bg-gray-500',
    label: {
      es: 'Otro',
      en: 'Other'
    }
  }
};
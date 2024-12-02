import { CalendarEvent } from '../types/calendar';
import { religiousEvents } from './religiousEvents';
import { saintsEvents } from './saintsEvents';

export const events: CalendarEvent[] = [
  ...religiousEvents,
  ...saintsEvents
];
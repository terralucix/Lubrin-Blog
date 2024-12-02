import { CalendarEvent } from '../types/calendar';

export class GoogleCalendarService {
  private baseUrl = 'https://www.googleapis.com/calendar/v3';
  private token: string | null = null;

  async authorize(token: string) {
    this.token = token;
  }

  async getEvents(timeMin: Date, timeMax: Date): Promise<CalendarEvent[]> {
    if (!this.token) {
      throw new Error('Not authorized');
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/calendars/primary/events?` + new URLSearchParams({
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          singleEvents: 'true',
          orderBy: 'startTime'
        }), {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const data = await response.json();
      
      return (data.items || []).map((event: any) => ({
        id: event.id || '',
        title: event.summary || '',
        description: event.description || '',
        date: new Date(event.start?.dateTime || event.start?.date || ''),
        time: event.start?.dateTime ? new Date(event.start.dateTime).toLocaleTimeString() : undefined,
        location: event.location,
        category: this.determineCategory(event.summary || '')
      }));
    } catch (error) {
      console.error('Error fetching Google Calendar events:', error);
      throw error;
    }
  }

  private determineCategory(title: string): 'cultural' | 'festive' | 'religious' | 'other' {
    const lowercase = title.toLowerCase();
    if (lowercase.includes('festival') || lowercase.includes('concierto')) return 'cultural';
    if (lowercase.includes('fiesta') || lowercase.includes('celebración')) return 'festive';
    if (lowercase.includes('misa') || lowercase.includes('procesión')) return 'religious';
    return 'other';
  }
}
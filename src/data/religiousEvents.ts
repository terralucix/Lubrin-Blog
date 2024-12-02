import { CalendarEvent } from '../types/calendar';

export const religiousEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'San Sebastián',
    description: 'Fiesta del patrón de Lubrín',
    date: new Date(2024, 0, 20), // January 20
    time: '11:00',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  },
  {
    id: '2',
    title: 'Miércoles de Ceniza',
    description: 'Inicio de la Cuaresma',
    date: new Date(2024, 1, 14), // February 14, 2024
    time: '19:00',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  },
  {
    id: '3',
    title: 'Domingo de Ramos',
    description: 'Procesión y bendición de ramos',
    date: new Date(2024, 2, 24), // March 24, 2024
    time: '11:00',
    location: 'Plaza de la Iglesia',
    category: 'religious'
  },
  {
    id: '4',
    title: 'Jueves Santo',
    description: 'Última Cena y Procesión',
    date: new Date(2024, 2, 28), // March 28, 2024
    time: '19:00',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  },
  {
    id: '5',
    title: 'Viernes Santo',
    description: 'Vía Crucis y Procesión del Silencio',
    date: new Date(2024, 2, 29), // March 29, 2024
    time: '20:00',
    location: 'Calles del pueblo',
    category: 'religious'
  },
  {
    id: '6',
    title: 'Domingo de Resurrección',
    description: 'Misa de Pascua',
    date: new Date(2024, 2, 31), // March 31, 2024
    time: '11:00',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  },
  {
    id: '7',
    title: 'Corpus Christi',
    description: 'Procesión del Santísimo Sacramento',
    date: new Date(2024, 5, 6), // June 6, 2024
    time: '19:00',
    location: 'Calles del pueblo',
    category: 'religious'
  },
  {
    id: '8',
    title: 'Asunción de la Virgen',
    description: 'Celebración de la Asunción de María',
    date: new Date(2024, 7, 15), // August 15
    time: '11:00',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  },
  {
    id: '9',
    title: 'Todos los Santos',
    description: 'Celebración de Todos los Santos',
    date: new Date(2024, 10, 1), // November 1
    time: '11:00',
    location: 'Iglesia y Cementerio',
    category: 'religious'
  },
  {
    id: '10',
    title: 'Inmaculada Concepción',
    description: 'Celebración de la Inmaculada Concepción',
    date: new Date(2024, 11, 8), // December 8
    time: '11:00',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  },
  {
    id: '11',
    title: 'Nochebuena',
    description: 'Misa del Gallo',
    date: new Date(2024, 11, 24), // December 24
    time: '23:30',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  },
  {
    id: '12',
    title: 'Navidad',
    description: 'Misa de Navidad',
    date: new Date(2024, 11, 25), // December 25
    time: '11:00',
    location: 'Iglesia de Nuestra Señora del Rosario',
    category: 'religious'
  }
];
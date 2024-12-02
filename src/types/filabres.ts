export interface FilabresContent {
  introduction: string;
  geography: string;
  climate: string;
  flora: string[];
  fauna: string[];
  villages: Array<{
    name: string;
    description: string;
  }>;
}

export const fallbackContent: Record<string, FilabresContent> = {
  es: {
    introduction: 'La Comarca de los Filabres es una región montañosa situada en el corazón de Almería, caracterizada por sus impresionantes paisajes y rica biodiversidad.',
    geography: 'La Sierra de los Filabres forma parte del Sistema Penibético, con altitudes que superan los 2.000 metros sobre el nivel del mar.',
    climate: 'Clima mediterráneo continental, con veranos cálidos e inviernos fríos. Las precipitaciones son moderadas y la nieve es común en las cumbres durante el invierno.',
    flora: [
      'Pino laricio',
      'Encina',
      'Tomillo',
      'Romero',
      'Esparto'
    ],
    fauna: [
      'Águila real',
      'Cabra montés',
      'Búho real',
      'Zorro rojo',
      'Perdiz roja'
    ],
    villages: [
      {
        name: 'Lubrín',
        description: 'Pueblo tradicional conocido por su arquitectura típica y producción de aceite de oliva.'
      },
      {
        name: 'Serón',
        description: 'Famoso por su jamón serrano y su patrimonio minero histórico.'
      },
      {
        name: 'Bacares',
        description: 'Pintoresco pueblo de montaña con importantes recursos forestales.'
      }
    ]
  },
  en: {
    introduction: 'The Filabres Region is a mountainous area located in the heart of Almería, characterized by its impressive landscapes and rich biodiversity.',
    geography: 'The Sierra de los Filabres is part of the Penibetic System, with altitudes exceeding 2,000 meters above sea level.',
    climate: 'Continental Mediterranean climate, with warm summers and cold winters. Precipitation is moderate, and snow is common on the peaks during winter.',
    flora: [
      'Black pine',
      'Holm oak',
      'Thyme',
      'Rosemary',
      'Esparto grass'
    ],
    fauna: [
      'Golden eagle',
      'Spanish ibex',
      'Eagle owl',
      'Red fox',
      'Red-legged partridge'
    ],
    villages: [
      {
        name: 'Lubrín',
        description: 'Traditional village known for its typical architecture and olive oil production.'
      },
      {
        name: 'Serón',
        description: 'Famous for its cured ham and historical mining heritage.'
      },
      {
        name: 'Bacares',
        description: 'Picturesque mountain village with important forest resources.'
      }
    ]
  }
};
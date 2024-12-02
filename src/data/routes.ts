import { Route } from '../types/routes';

export const routes: Record<string, Route[]> = {
  en: [
    {
      id: 'THE LUBRÍN FOUNTAINS TRAIL',
      title: 'THE LUBRÍN FOUNTAINS TRAIL',
      description: 'Journey through ancient olive groves and traditional oil mills.',
      imageUrl: '/images/sendero las fuentes de lubrin.png',
      difficulty: 'MEDIUN',
      duration: '5 hrs',
      distance: '13,9 km',
      startPoint: 'Lubrín Town Square',
      endPoint: 'Fountains',
      highlights: [
        'old washhouse',
        'Fountains',
        'Old waterwheels and mills',
       
      ],
      recommendations: [
        'Comfortable walking shoes',
        'Water bottle',
        'Sun protection',
        'Camera'
      ],
      seasons: {
        spring: true,
        summer: false,
        autumn: true,
        winter: true
      },
      type: 'cultural',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/pr-a-92-sendero-las-fuentes-de-lubrin-lubrin-144080308'
    },
    {
      id: 'STONE CLIFF PATH TRAIL',
      title: 'STONE CLIFF PATH TRAIL',
      description: 'Panoramic route with spectacular views of the region and surrounding mountains.',
      imageUrl: '/images/sendero risco la piedra.png',
      difficulty: 'Medium',
      duration: '3.15 hrs',
      distance: '7,9 km',
      startPoint: 'El Chive',
      endPoint: 'Mountain Viewpoint',
      highlights: [
        'Panoramic mountain views',
        'Native flora and fauna',
        'Historical shepherd paths',
        'Natural springs'
      ],
      recommendations: [
        'Hiking boots',
        'Plenty of water',
        'Snacks',
        'First aid kit',
        'Mountain appropriate clothing'
      ],
      seasons: {
        spring: true,
        summer: false,
        autumn: true,
        winter: false
      },
      type: 'hiking',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/el-chivelubrin-sendero-del-risco-de-la-piedrasl-a-182-las-moletassl-a-17la-atalaya-16383679'
    },
    {
      id: 'Las Moletas',
      title: 'Las Moletas - El Chive',
      description: 'Discover the native fauna and nature',
      imageUrl: '/images/moletas.png',
      difficulty: 'Mediun',
      duration: '3.30 hrs',
      distance: '13,2 km',
      startPoint: 'El Campico',
      endPoint: ' El chive',
      highlights: [
        'Nature  ',
        'Mountains',
        'Fauna and flora',
      
      ],
      recommendations: [
        'Comfortable shoes',
        'Camera',
        'Water bottle',
        'Guide book'
      ],
      seasons: {
        spring: true,
        summer: true,
        autumn: true,
        winter: true
      },
      type: 'cultural',
      wikiloc: 'https://www.alltrails.com/es/ruta/spain/almeria/sl-a-17-las-moletas'
    }
  ],
  es: [
    {
      id: 'SENDERO LAS FUENTES DE LUBRÍN',
      title: 'SENDERO LAS FUENTES DE LUBRÍN',
      description: 'Recorrido por antiguos fuentes y norias.',
      imageUrl: '/images/sendero las fuentes de lubrin.png',
      difficulty: 'Fácil',
      duration: '5 hrs',
      distance: '13,7 km',
      startPoint: 'Plaza Mayor de Lubrín',
      endPoint: 'Fuente de ARRIBA',
      highlights: [
       'antiguo lavadero',
       'fuentes',
       'viejas norias y molinos'
      ],
      recommendations: [
        'Calzado cómodo',
        'Botella de agua',
        'Protección solar',
        'Cámara'
      ],
      seasons: {
        spring: true,
        summer: false,
        autumn: true,
        winter: true
      },
      type: 'cultural',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/pr-a-92-sendero-las-fuentes-de-lubrin-lubrin-144080308'
    },
    {
      id: 'SENDERO CAMINO DEL RISCO DE LA PIEDRA',
      title: 'SENDERO CAMINO DEL RISCO DE LA PIEDRA',
      description: 'Ruta panorámica con vistas espectaculares de la región y las montañas circundantes.',
      imageUrl: '/images/sendero risco la piedra.png',
      difficulty: 'Media',
      duration: '3.15 hrs',
      distance: '7,9 km',
      startPoint: 'El Chive',
      endPoint: 'Mirador de Montaña',
      highlights: [
        'Vistas panorámicas de montaña',
        'Flora y fauna autóctona',
        'Senderos históricos de pastores',
        'Fuentes naturales'
      ],
      recommendations: [
        'Botas de montaña',
        'Abundante agua',
        'Aperitivos',
        'Botiquín',
        'Ropa adecuada para montaña'
      ],
      seasons: {
        spring: true,
        summer: false,
        autumn: true,
        winter: false
      },
      type: 'hiking',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/el-chivelubrin-sendero-del-risco-de-la-piedrasl-a-182-las-moletassl-a-17la-atalaya-16383679'
    },
    {
      id: 'Las Moletas',
      title: 'Las Moletas - El Chive',
      description: 'Descubre la fauna y naturaleza autoctona',
      imageUrl: '/images/moletas.png',
      difficulty: 'Medio',
      duration: '3.30 hrs',
      distance: '13,2 km',
      startPoint: 'El Campico',
      endPoint: ' El chive',
      highlights: [
        'Naturaleza ',
        'Montañas',
        'Flora y Fauna',
      ],
      recommendations: [
        'Calzado cómodo',
        'Cámara',
        'Botella de agua',
        'Guía turística'
      ],
      seasons: {
        spring: true,
        summer: true,
        autumn: true,
        winter: true
      },
      type: 'hiking',
      wikiloc: 'https://www.alltrails.com/es/ruta/spain/almeria/sl-a-17-las-moletas'
    }
  ]
};
import { useLanguage } from '../../context/LanguageContext';
import Carousel from '../../components/Carousel';
import ItemCard from '../../components/ItemCard';
import Map from '../../components/Map';
import ImageGalleryLocal from '../../components/Gallery local';


export default function LocalLifePage() {
  const { language } = useLanguage();

  const localLifeImages = [
    {
      url: '/images/lubrin10.jpg',
      alt: 'Plaza de Lubrín',
      title: language === 'es' ? 'Vida en la Plaza' : 'Life in the Square',
      description: language === 'es'
        ? 'El corazón de la vida social en Lubrín'
        : 'The heart of social life in Lubrín'
    },
    {
      url: '/images/cabra.jpg',
      alt: 'Campos de Lubrín',
      title: language === 'es' ? 'Agricultura Local' : 'Local Agriculture',
      description: language === 'es'
        ? 'Tradiciones agrícolas que perduran'
        : 'Enduring agricultural traditions'
    },
    {
      url: '/images/museo.jpg',
      alt: 'Calles de Lubrín',
      title: language === 'es' ? 'Calles Tradicionales' : 'Traditional Streets',
      description: language === 'es'
        ? 'Arquitectura tradicional que define nuestro pueblo'
        : 'Traditional architecture that defines our town'
    }
  ];

  const dailyActivities = [
    {
      title: language === 'es' ? 'Mercado Local' : 'Local Market',
      description: language === 'es'
        ? 'Los martes y sábados, el mercado local cobra vida con productos frescos y artesanales.'
        : 'On Tuesdays and Saturdays, the local market comes alive with fresh and artisanal products.',
      imageUrl: '/images/local-life.jpg',
      details: [
        {
          label: language === 'es' ? 'Horario' : 'Hours',
          value: '8:00 - 14:00'
        },
        {
          label: language === 'es' ? 'Ubicación' : 'Location',
          value: language === 'es' ? 'Plaza del Mercado' : 'Market Square'
        }
      ]
    },
    {
      title: language === 'es' ? 'Vida en la Plaza' : 'Square Life',
      description: language === 'es'
        ? 'La Plaza Mayor es el punto de encuentro donde los vecinos se reúnen para charlar y disfrutar del día.'
        : 'The Main Square is the meeting point where neighbors gather to chat and enjoy the day.',
      imageUrl: '/images/lubrin10.jpg',
      details: [
        {
          label: language === 'es' ? 'Ambiente' : 'Atmosphere',
          value: language === 'es' ? 'Social y acogedor' : 'Social and welcoming'
        }
      ]
    }
  ];

  const communitySpaces = [
    {
      title: language === 'es' ? 'Centro Cultural' : 'Cultural Center',
      description: language === 'es'
        ? 'Espacio dedicado a actividades culturales, talleres y eventos comunitarios.'
        : 'Space dedicated to cultural activities, workshops, and community events.',
      imageUrl: '/images/heritage.jpg',
      details: [
        {
          label: language === 'es' ? 'Actividades' : 'Activities',
          value: language === 'es' ? 'Talleres, exposiciones, clases' : 'Workshops, exhibitions, classes'
        }
      ]
    },
    {
      title: language === 'es' ? 'Biblioteca Municipal' : 'Municipal Library',
      description: language === 'es'
        ? 'Un espacio tranquilo para la lectura y el estudio, con una colección de historia local.'
        : 'A quiet space for reading and study, with a local history collection.',
      imageUrl: '/images/heritage.jpg',
      details: [
        {
          label: language === 'es' ? 'Horario' : 'Hours',
          value: '10:00 - 20:00'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'es' ? 'Vida Local en Lubrín' : 'Local Life in Lubrín'}
      </h1>

      <Carousel images={localLifeImages} className="mb-12" />

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'es'
            ? 'Descubre el encanto de la vida cotidiana en Lubrín, donde las tradiciones y la modernidad se encuentran en perfecta armonía.'
            : 'Discover the charm of daily life in Lubrín, where traditions and modernity meet in perfect harmony.'}
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Vida Cotidiana' : 'Daily Life'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dailyActivities.map((activity, index) => (
              <ItemCard key={index} {...activity} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Espacios Comunitarios' : 'Community Spaces'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communitySpaces.map((space, index) => (
              <ItemCard key={index} {...space} />
            ))}
          </div>
        </section>

        
        <section className="mb-16">
        <ImageGalleryLocal/>
      </section>
        <section>
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Ubicación' : 'Location'}
          </h2>
          <div className="h-96 mb-4">
            <Map lat={37.2156} lng={-2.0678} zoom={15} className="w-full h-full rounded-lg" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            {language === 'es'
              ? 'Lubrín se encuentra en el corazón de la Sierra de los Filabres'
              : 'Lubrín is located in the heart of the Sierra de los Filabres'}
          </p>
        </section>
      </div>
    </div>
  );
}
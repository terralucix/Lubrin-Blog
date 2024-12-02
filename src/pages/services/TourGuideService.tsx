import { useLanguage } from '../../context/LanguageContext';
import { Compass, Map, Users, Calendar, Shield, Star } from 'lucide-react';
import SectionHero from '../../components/SectionHero';

export default function TourGuideService() {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Compass className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Guías Expertos Locales' : 'Expert Local Guides',
      description: language === 'es'
        ? 'Guías nativos con profundo conocimiento de la historia y cultura de Lubrín'
        : 'Native guides with deep knowledge of Lubrín\'s history and culture'
    },
    {
      icon: <Map className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Rutas Personalizadas' : 'Custom Routes',
      description: language === 'es'
        ? 'Itinerarios adaptados a tus intereses y nivel de actividad'
        : 'Itineraries adapted to your interests and activity level'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Grupos Reducidos' : 'Small Groups',
      description: language === 'es'
        ? 'Máximo 8 personas para una experiencia más personal'
        : 'Maximum 8 people for a more personal experience'
    }
  ];

  const tours = [
    {
      title: language === 'es' ? 'Ruta del Aceite' : 'Olive Oil Route',
      duration: language === 'es' ? '4 horas' : '4 hours',
      price: '45€',
      rating: 5,
      includes: [
        language === 'es' ? 'Visita a almazara tradicional' : 'Traditional oil mill visit',
        language === 'es' ? 'Cata de aceites' : 'Oil tasting',
        language === 'es' ? 'Degustación de productos locales' : 'Local products tasting'
      ]
    },
    {
      title: language === 'es' ? 'Ruta Histórica' : 'Historical Route',
      duration: language === 'es' ? '3 horas' : '3 hours',
      price: '35€',
      rating: 5,
      includes: [
        language === 'es' ? 'Centro histórico' : 'Historic center',
        language === 'es' ? 'Iglesia del siglo XVI' : '16th century church',
        language === 'es' ? 'Arquitectura tradicional' : 'Traditional architecture'
      ]
    },
    {
      title: language === 'es' ? 'Ruta de Senderismo' : 'Hiking Route',
      duration: language === 'es' ? '5 horas' : '5 hours',
      price: '40€',
      rating: 5,
      includes: [
        language === 'es' ? 'Sierra de los Filabres' : 'Filabres Mountains',
        language === 'es' ? 'Flora y fauna local' : 'Local flora and fauna',
        language === 'es' ? 'Picnic con productos locales' : 'Picnic with local products'
      ]
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Servicio de Guías Turísticos' : 'Tour Guide Service'}
        description={language === 'es'
          ? 'Descubre Lubrín con guías locales expertos que te mostrarán los secretos mejor guardados de nuestra tierra'
          : 'Discover Lubrín with expert local guides who will show you the best-kept secrets of our land'}
        imageUrl="/images/pexels-apasaric-3423860.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === 'es' ? 'Nuestros Tours' : 'Our Tours'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold dark:text-white">{tour.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {tour.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(tour.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {tour.duration}
                  </div>
                  <ul className="space-y-2">
                    {tour.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Shield className="h-4 w-4 mr-2 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
            {language === 'es' ? '¿Cómo Reservar?' : 'How to Book?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {language === 'es' ? 'Contacto Directo' : 'Direct Contact'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {language === 'es'
                  ? 'Reserva directamente con nosotros para una atención personalizada:'
                  : 'Book directly with us for personalized attention:'}
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>📞 +34 XXX XXX XXX</p>
                <p>✉️ tours@lubrin.com</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {language === 'es' ? 'Información Importante' : 'Important Information'}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {language === 'es' ? 'Reserva con 24h de antelación' : 'Book 24h in advance'}</li>
                <li>• {language === 'es' ? 'Grupos mínimo 2 personas' : 'Minimum 2 people per group'}</li>
                <li>• {language === 'es' ? 'Disponible todo el año' : 'Available all year round'}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
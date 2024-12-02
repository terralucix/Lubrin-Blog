import { useLanguage } from '../context/LanguageContext';
import Carousel from '../components/Carousel';
import RouteCard from '../components/routes/RouteCard';
import { routes } from './../data/routes.ts';
import { MapPin, AlertTriangle, Compass } from 'lucide-react';

export default function TouristRoutesPage() {
  const { language } = useLanguage();

  const routesImages = [
    {
      url: '/images/10272531Master.jpg',
      alt: 'Mountain Routes',
      title: language === 'es' ? 'Rutas de Montaña' : 'Mountain Routes',
      description: language === 'es'
        ? 'Senderos que te llevan a vistas espectaculares'
        : 'Trails that lead you to spectacular views'
    },
    {
      url: '/images/10272559Master.jpg',
      alt: 'Nature Trails',
      title: language === 'es' ? 'Senderos Naturales' : 'Nature Trails',
      description: language === 'es'
        ? 'Descubre la flora y fauna local'
        : 'Discover local flora and fauna'
    },
    {
      url: '/images/91128782Master.jpg',
      alt: 'Cultural Routes',
      title: language === 'es' ? 'Rutas Culturales' : 'Cultural Routes',
      description: language === 'es'
        ? 'Explora nuestro patrimonio cultural'
        : 'Explore our cultural heritage'
    }
  ];

  const safetyTips = [
    {
      icon: <Compass className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Planifica tu Ruta' : 'Plan your Route',
      description: language === 'es'
        ? 'Estudia el recorrido y lleva un mapa'
        : 'Study the route and carry a map'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Equipo Adecuado' : 'Proper Equipment',
      description: language === 'es'
        ? 'Usa calzado y ropa apropiada'
        : 'Use appropriate footwear and clothing'
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Mantente Comunicado' : 'Stay Connected',
      description: language === 'es'
        ? 'Informa a alguien de tu ruta'
        : 'Let someone know your route'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'es' ? 'Rutas Turísticas' : 'Tourist Routes'}
      </h1>
      
      <Carousel images={routesImages} className="mb-12" />

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'es'
            ? 'Descubre los mejores senderos y rutas para explorar nuestra región.'
            : 'Discover the best trails and routes to explore our region.'}
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Rutas Destacadas' : 'Featured Routes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes[language].map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Consejos de Seguridad' : 'Safety Tips'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyTips.map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-900 rounded-full mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{tip.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
}
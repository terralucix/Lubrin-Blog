import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { routes } from '../../data/routes';
import { ChevronLeft, MapPin, Calendar, AlertTriangle, Clock, Ruler, ExternalLink } from 'lucide-react';
import Map from '../../components/Map';

export default function RouteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const route = routes[language].find(r => r.id === id);

  if (!route) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? 'Ruta no encontrada' : 'Route not found'}
          </h1>
          <button
            onClick={() => navigate('/routes')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            {language === 'es' ? 'Volver a rutas' : 'Back to routes'}
          </button>
        </div>
      </div>
    );
  }

  const getSeasonLabel = (season: string) => {
    const labels = {
      spring: language === 'es' ? 'Primavera' : 'Spring',
      summer: language === 'es' ? 'Verano' : 'Summer',
      autumn: language === 'es' ? 'Otoño' : 'Autumn',
      winter: language === 'es' ? 'Invierno' : 'Winter'
    };
    return labels[season as keyof typeof labels];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate('/routes')}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        {language === 'es' ? 'Volver a rutas' : 'Back to routes'}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <img
                src={route.imageUrl}
                alt={route.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{route.title}</h1>
                <p className="text-lg text-white/90">{route.description}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language === 'es' ? 'Duración' : 'Duration'}
                    </p>
                    <p className="font-medium dark:text-white">{route.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language === 'es' ? 'Distancia' : 'Distance'}
                    </p>
                    <p className="font-medium dark:text-white">{route.distance}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language === 'es' ? 'Dificultad' : 'Difficulty'}
                    </p>
                    <p className="font-medium dark:text-white">{route.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language === 'es' ? 'Inicio' : 'Start'}
                    </p>
                    <p className="font-medium dark:text-white">{route.startPoint}</p>
                  </div>
                </div>
              </div>

              {route.wikiloc && (
                <div className="mb-8">
                  <a
                    href={route.wikiloc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    {language === 'es' ? 'Ver ruta en Wikiloc' : 'View route on Wikiloc'}
                  </a>
                </div>
              )}

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4 dark:text-white">
                    {language === 'es' ? 'Puntos Destacados' : 'Highlights'}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {route.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 dark:text-white">
                    {language === 'es' ? 'Recomendaciones' : 'Recommendations'}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {route.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 dark:text-white">
                    {language === 'es' ? 'Mejor Temporada' : 'Best Season'}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(route.seasons).map(([season, available]) => (
                      <span
                        key={season}
                        className={`px-4 py-2 rounded-full text-sm ${
                          available
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                        }`}
                      >
                        {getSeasonLabel(season)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              {language === 'es' ? 'Ubicación' : 'Location'}
            </h3>
            <div className="h-64 rounded-lg overflow-hidden mb-4">
              <Map lat={37.2156} lng={-2.0678} zoom={15} />
            </div>
            <div className="flex items-start text-gray-600 dark:text-gray-300">
              <MapPin className="h-5 w-5 mr-2 mt-1" />
              <div>
                <p className="font-medium">{route.startPoint}</p>
                <p className="text-sm">
                  {language === 'es' ? 'Punto de inicio' : 'Starting point'}
                </p>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
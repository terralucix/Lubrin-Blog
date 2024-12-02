import { Link } from 'react-router-dom';
import { Clock, MapPin, Ruler, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { RouteCardProps } from '../../types/routes';

export default function RouteCard({ route, showDetails = false }: RouteCardProps) {
  const { language } = useLanguage();

  const getSeasonLabel = (season: string) => {
    const labels = {
      spring: language === 'es' ? 'Primavera' : 'Spring',
      summer: language === 'es' ? 'Verano' : 'Summer',
      autumn: language === 'es' ? 'Otoño' : 'Autumn',
      winter: language === 'es' ? 'Invierno' : 'Winter'
    };
    return labels[season as keyof typeof labels];
  };

  const cardContent = (
    <>
      <div className="relative h-48">
        <img
          src={route.imageUrl}
          alt={route.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{route.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{route.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="h-5 w-5 mr-2" />
            <span>{route.duration}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Ruler className="h-5 w-5 mr-2" />
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span>{route.difficulty}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{route.startPoint}</span>
          </div>
        </div>

        {showDetails && (
          <>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">
                {language === 'es' ? 'Puntos Destacados' : 'Highlights'}
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {route.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">
                {language === 'es' ? 'Recomendaciones' : 'Recommendations'}
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {route.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                {language === 'es' ? 'Mejor Temporada' : 'Best Season'}
              </h4>
              <div className="flex gap-2">
                {Object.entries(route.seasons).map(([season, available]) => (
                  <span
                    key={season}
                    className={`px-3 py-1 rounded-full text-sm ${
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
          </>
        )}

        {!showDetails && (
          <div className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-4">
            {language === 'es' ? 'Ver detalles' : 'View details'} →
          </div>
        )}
      </div>
    </>
  );

  return showDetails ? (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {cardContent}
    </div>
  ) : (
    <Link 
      to={`/routes/${route.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      {cardContent}
    </Link>
  );
}
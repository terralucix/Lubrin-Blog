import React from 'react';
import { MapPin, Users, Mountain } from 'lucide-react';
import { Village } from '../../types/filabres';
import { useLanguage } from '../../context/LanguageContext';

interface VillagesSectionProps {
  villages: Village[];
}

export default function VillagesSection({ villages }: VillagesSectionProps) {
  const { language } = useLanguage();

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        {language === 'es' ? 'Pueblos de la Comarca' : 'Villages of the Region'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {villages.map((village, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 dark:text-white">{village.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{village.description}</p>
              
              <div className="space-y-2 mb-4">
                {village.population && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{language === 'es' ? 'Población:' : 'Population:'} {village.population}</span>
                  </div>
                )}
                {village.altitude && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Mountain className="h-4 w-4 mr-2" />
                    <span>{language === 'es' ? 'Altitud:' : 'Altitude:'} {village.altitude}m</span>
                  </div>
                )}
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                  <a
                    href={village.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {language === 'es' ? 'Ver en Wikipedia' : 'View on Wikipedia'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
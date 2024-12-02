import React from 'react';
import { Camera, Globe, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function AuthorSection() {
  const { language } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-4">
        <Camera className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold dark:text-white">
          {language === 'es' ? 'Sobre el Fotógrafo' : 'About the Photographer'}
        </h3>
      </div>

      <div className="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="David Leiva"
          className="w-full h-48 object-cover rounded-lg"
        />
        
        <div>
          <h4 className="text-xl font-bold mb-2 dark:text-white">David Leiva</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {language === 'es' 
              ? 'Fotógrafo profesional especializado en paisajes y arquitectura, capturando la esencia y belleza de Lubrín y la Sierra de los Filabres.'
              : 'Professional photographer specializing in landscapes and architecture, capturing the essence and beauty of Lubrín and Sierra de los Filabres.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-blue-600" />
          <a 
            href="https://dleiva.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
          >
            dleiva.com
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          {language === 'es'
            ? 'Todas las imágenes © David Leiva. Todos los derechos reservados.'
            : 'All images © David Leiva. All rights reserved.'}
        </div>
      </div>
    </div>
  );
}
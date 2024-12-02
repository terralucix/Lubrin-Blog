import React from 'react';
import Masonry from 'react-masonry-css';
import { useLanguage } from '../../context/LanguageContext';

interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'horizontal' | 'vertical';
}

export default function Gallery() {
  const { language } = useLanguage();

  const breakpointColumns = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1
  };

  const galleryImages: GalleryImage[] = [
    {
      src: '/images/landscape.jpg',
      alt: language === 'es' ? 'Paisaje de Lubrín' : 'Lubrín Landscape',
      orientation: 'horizontal'
    },
    {
      src: '/images/heritage.jpg',
      alt: language === 'es' ? 'Patrimonio Cultural' : 'Cultural Heritage',
      orientation: 'horizontal'
    },
    {
      src: '/images/gastronomy.jpg',
      alt: language === 'es' ? 'Gastronomía Local' : 'Local Gastronomy',
      orientation: 'horizontal'
    },
    {
      src: '/images/hiking.jpg',
      alt: language === 'es' ? 'Rutas de Senderismo' : 'Hiking Trails',
      orientation: 'vertical'
    },
    {
      src: '/images/products.jpg',
      alt: language === 'es' ? 'Productos Locales' : 'Local Products',
      orientation: 'horizontal'
    },
    {
      src: '/images/services.jpg',
      alt: language === 'es' ? 'Servicios Turísticos' : 'Tourist Services',
      orientation: 'horizontal'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {language === 'es' ? 'Galería de Imágenes' : 'Image Gallery'}
      </h2>
      
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-full"
        columnClassName="pl-4 bg-clip-padding"
      >
        {galleryImages.map((image, index) => (
          <div key={index} className="mb-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-auto object-cover ${
                image.orientation === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]'
              }`}
              loading="lazy"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-300">{image.alt}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
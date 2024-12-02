import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Carousel from '../Carousel';

export default function FilabresHero() {
  const { language } = useLanguage();

  const carouselImages = [
    {
      url: '/images/10272559Master.jpg',
      alt: 'Sierra de los Filabres',
      title: language === 'es' ? 'Sierra de los Filabres' : 'Filabres Mountains',
      description: language === 'es'
        ? 'Majestuosas montañas que definen nuestra comarca'
        : 'Majestic mountains that define our region'
    },
    {
      url: '/images/lubrin-buena.webp',
      alt: 'Pueblos Tradicionales',
      title: language === 'es' ? 'Pueblos Tradicionales' : 'Traditional Villages',
      description: language === 'es'
        ? 'Descubre el encanto de nuestros pueblos'
        : 'Discover the charm of our villages'
    },
    {
      url: '/images/museo.jpg',
      alt: 'Patrimonio Cultural',
      title: language === 'es' ? 'Patrimonio Cultural' : 'Cultural Heritage',
      description: language === 'es'
        ? 'Historia y tradiciones vivas'
        : 'Living history and traditions'
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'es' ? 'Comarca de los Filabres' : 'Filabres Region'}
      </h1>
      <Carousel images={carouselImages} className="mb-12" />
    </>
  );
}
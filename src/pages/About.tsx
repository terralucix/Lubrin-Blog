import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Carousel from '../components/Carousel';
import ItemCard from '../components/ItemCard';


export default function About() {
  const { language } = useLanguage();

  const carouselImages = [
    {
      url: '/images/lubrin-buena.webp',
      alt: 'Regional Landscape',
      title: language === 'es' ? 'Nuestra Región' : 'Our Region',
      description: language === 'es'
        ? 'Un viaje por la tradición y la naturaleza'
        : 'A journey through tradition and nature'
    },
    {
      url: '/images/lubrin_patron.jpg',
      alt: 'Cultural Heritage',
      title: language === 'es' ? 'Cultura y Tradiciones' : 'Culture and Traditions',
      description: language === 'es'
        ? 'Preservando nuestra historia y tradiciones'
        : 'Preserving our history and traditions'
    },
    {
      url: '/images/lubrin10.jpg',
      alt: 'Local Life',
      title: language === 'es' ? 'Vida Local' : 'Local Life',
      description: language === 'es'
        ? 'Experiencias auténticas y momentos únicos'
        : 'Authentic experiences and unique moments'
    }
  ];

  const sections = [
    {
      title: language === 'es' ? 'Comarca de los Filabres' : 'Filabres Region',
      description: language === 'es'
        ? 'Coleccion de Noticias sobre Lubrin y la Comarca de los Filabres, por IA Gemini'
        : 'News Collection about Lubrin and the Filabres Region, by IA Gemini',
      imageUrl: '/images/F07-Lubrin-Almeria.jpg',
      link: '/about/filabres'
    },
    {
      title: language === 'es' ? 'Nuestra Región' : 'Our Region',
      description: language === 'es'
        ? 'Descubre la belleza y diversidad de nuestro entorno'
        : 'Discover the beauty and diversity of our surroundings',
      imageUrl: '/images/10272559Master.jpg',
      link: '/about/region'
    },
    {
      title: language === 'es' ? 'Cultura y Tradiciones' : 'Culture and Traditions',
      description: language === 'es'
        ? 'Explora nuestras raíces y patrimonio cultural'
        : 'Explore our roots and cultural heritage',
      imageUrl:  '/images/lubrin-lavadero.jpg',
      link: '/about/culture'
    },
    {
      title: language === 'es' ? 'Vida Local' : 'Local Life',
      description: language === 'es'
        ? 'Conoce el día a día de nuestra comunidad'
        : 'Experience the daily life of our community',
      imageUrl: '/images/F18-Lubrin-Almeria.jpg',
      link: '/about'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          {language === 'es' ? 'Descubriendo Nuestra Tierra' : 'Discovering Our Land'}
        </h1>
        <p className="text-3xl text-gray-600 max-w-3xl mx-auto mb-8">
          {language === 'es'
            ? 'Un viaje por la tradición, naturaleza y cultura de esta encantadora región. Explora la Sierra de los Filabres, su rica historia y maravillas naturales.'
            : 'A journey through the tradition, nature, and culture of this charming region. Explore the Sierra de los Filabres, its rich history, and natural wonders.'}
        </p>
        
        <Carousel images={carouselImages} className="mb-12" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <ItemCard
            key={index}
            {...section}
          />
        ))}
      </section>
    
    </div>
  );
}

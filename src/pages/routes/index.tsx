import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SectionHero from '../../components/SectionHero';
import ItemCard from '../../components/ItemCard';

export default function RoutesPage() {
  const { language } = useLanguage();

  const routes = [
    {
      title: language === 'es' ? 'Ruta del Aceite' : 'Olive Oil Route',
      description: language === 'es'
        ? 'Recorrido por los antiguos olivares y almazaras tradicionales.'
        : 'Journey through ancient olive groves and traditional oil mills.',
      imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      details: [
        {
          label: language === 'es' ? 'Dificultad' : 'Difficulty',
          value: language === 'es' ? 'Fácil' : 'Easy'
        },
        {
          label: language === 'es' ? 'Duración' : 'Duration',
          value: '2h'
        },
        {
          label: language === 'es' ? 'Distancia' : 'Distance',
          value: '5 km'
        }
      ]
    },
    {
      title: language === 'es' ? 'Sendero de la Sierra' : 'Mountain Trail',
      description: language === 'es'
        ? 'Ruta panorámica con vistas espectaculares de la región.'
        : 'Panoramic route with spectacular views of the region.',
      imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      details: [
        {
          label: language === 'es' ? 'Dificultad' : 'Difficulty',
          value: language === 'es' ? 'Media' : 'Medium'
        },
        {
          label: language === 'es' ? 'Duración' : 'Duration',
          value: '4h'
        },
        {
          label: language === 'es' ? 'Distancia' : 'Distance',
          value: '12 km'
        }
      ]
    }
  ];

  const tips = [
    {
      title: language === 'es' ? 'Equipamiento Necesario' : 'Required Equipment',
      description: language === 'es'
        ? 'Calzado adecuado, agua, protección solar y mapa de la ruta.'
        : 'Appropriate footwear, water, sun protection, and route map.',
    },
    {
      title: language === 'es' ? 'Mejor Época' : 'Best Season',
      description: language === 'es'
        ? 'Primavera y otoño son las mejores temporadas para senderismo.'
        : 'Spring and autumn are the best seasons for hiking.',
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Rutas y Senderos' : 'Routes and Trails'}
        description={language === 'es'
          ? 'Descubre los mejores senderos para explorar nuestra región'
          : 'Discover the best trails to explore our region'}
        imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Rutas Destacadas' : 'Featured Routes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <ItemCard key={index} {...route} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Consejos para Senderistas' : 'Tips for Hikers'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <ItemCard key={index} {...tip} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
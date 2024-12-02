import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SectionHero from '../components/SectionHero';
import ItemCard from '../components/ItemCard';

export default function ProductsPage() {
  const { language } = useLanguage();

  const products = [
    {
      title: language === 'es' ? 'Aceite de Oliva' : 'Olive Oil',
      description: language === 'es'
        ? 'Aceite de oliva virgen extra de primera calidad, producido localmente.'
        : 'Premium extra virgin olive oil, locally produced.',
      imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5',
      details: [
        {
          label: language === 'es' ? 'Origen' : 'Origin',
          value: 'Lubrín'
        },
        {
          label: language === 'es' ? 'Tipo' : 'Type',
          value: 'Extra Virgin'
        }
      ]
    },
    {
      title: language === 'es' ? 'Artesanía Local' : 'Local Crafts',
      description: language === 'es'
        ? 'Productos artesanales hechos a mano por artesanos locales.'
        : 'Handmade artisanal products by local craftsmen.',
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca',
      details: [
        {
          label: language === 'es' ? 'Material' : 'Material',
          value: language === 'es' ? 'Varios' : 'Various'
        },
        {
          label: language === 'es' ? 'Origen' : 'Origin',
          value: 'Lubrín'
        }
      ]
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Productos Locales' : 'Local Products'}
        description={language === 'es'
          ? 'Descubre la calidad y autenticidad de nuestros productos locales'
          : 'Discover the quality and authenticity of our local products'}
        imageUrl="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Productos Destacados' : 'Featured Products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ItemCard key={index} {...product} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Dónde Comprar' : 'Where to Buy'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                {language === 'es' ? 'Mercado Local' : 'Local Market'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'es'
                  ? 'Visita nuestro mercado local donde encontrarás todos nuestros productos artesanales.'
                  : 'Visit our local market where you will find all our artisanal products.'}
              </p>
              <p className="text-sm text-gray-500">
                📍 {language === 'es' ? 'Plaza del Mercado, Lubrín' : 'Market Square, Lubrín'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
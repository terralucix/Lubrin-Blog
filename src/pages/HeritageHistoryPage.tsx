import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Carousel from '../components/Carousel';
import ItemCard from '../components/ItemCard';
import Map from '../components/Map';

export default function HeritageHistoryPage() {
  const { language } = useLanguage();

  const heritageImages = [
    {
      url: 'https://images.unsplash.com/photo-1461988091159-192b6df7054f',
      alt: 'Historical Buildings',
      title: language === 'es' ? 'Edificios Históricos' : 'Historical Buildings',
      description: language === 'es'
        ? 'Arquitectura que cuenta nuestra historia'
        : 'Architecture that tells our story'
    },
    {
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      alt: 'Cultural Heritage',
      title: language === 'es' ? 'Patrimonio Cultural' : 'Cultural Heritage',
      description: language === 'es'
        ? 'Tradiciones vivas de nuestra comunidad'
        : 'Living traditions of our community'
    },
    {
      url: 'https://images.unsplash.com/photo-1590059390858-8d48e8e51673',
      alt: 'Museums',
      title: language === 'es' ? 'Museos' : 'Museums',
      description: language === 'es'
        ? 'Guardianes de nuestra memoria colectiva'
        : 'Guardians of our collective memory'
    }
  ];

  const historicalSites = [
    {
      title: language === 'es' ? 'Iglesia de Nuestra Señora del Rosario' : 'Church of Our Lady of the Rosary',
      description: language === 'es'
        ? 'Construida en el siglo XVI, esta iglesia es un ejemplo magnífico de la arquitectura religiosa de la época.'
        : 'Built in the 16th century, this church is a magnificent example of religious architecture from the period.',
      imageUrl: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092',
      details: [
        {
          label: language === 'es' ? 'Época' : 'Period',
          value: language === 'es' ? 'Siglo XVI' : '16th Century'
        },
        {
          label: language === 'es' ? 'Estilo' : 'Style',
          value: language === 'es' ? 'Gótico tardío' : 'Late Gothic'
        }
      ]
    },
    {
      title: language === 'es' ? 'Plaza Mayor' : 'Main Square',
      description: language === 'es'
        ? 'Centro histórico de la vida social y comercial desde el siglo XVII.'
        : 'Historic center of social and commercial life since the 17th century.',
      imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b',
      details: [
        {
          label: language === 'es' ? 'Época' : 'Period',
          value: language === 'es' ? 'Siglo XVII' : '17th Century'
        },
        {
          label: language === 'es' ? 'Tipo' : 'Type',
          value: language === 'es' ? 'Plaza histórica' : 'Historic square'
        }
      ]
    }
  ];

  const culturalElements = [
    {
      title: language === 'es' ? 'Tradiciones Locales' : 'Local Traditions',
      items: [
        {
          name: language === 'es' ? 'Fiestas Patronales' : 'Patron Saint Festivities',
          description: language === 'es'
            ? 'Celebradas en honor a San Sebastián cada enero'
            : 'Celebrated in honor of San Sebastian every January',
          imageUrl: 'https://images.unsplash.com/photo-1563941402830-07a2188e0c95'
        },
        {
          name: language === 'es' ? 'Semana Santa' : 'Holy Week',
          description: language === 'es'
            ? 'Procesiones y celebraciones religiosas tradicionales'
            : 'Traditional religious processions and celebrations',
          imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'
        }
      ]
    },
    {
      title: language === 'es' ? 'Artesanía' : 'Crafts',
      items: [
        {
          name: language === 'es' ? 'Cerámica Tradicional' : 'Traditional Pottery',
          description: language === 'es'
            ? 'Arte ancestral transmitido de generación en generación'
            : 'Ancient art passed down through generations',
          imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca'
        },
        {
          name: language === 'es' ? 'Tejidos Artesanales' : 'Handwoven Textiles',
          description: language === 'es'
            ? 'Técnicas tradicionales de tejido local'
            : 'Traditional local weaving techniques',
          imageUrl: 'https://images.unsplash.com/photo-1576016770956-debb63d92058'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'es' ? 'Historia y Patrimonio' : 'History and Heritage'}
      </h1>
      
      <Carousel images={heritageImages} className="mb-12" />

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'es'
            ? 'Descubre la rica historia y el patrimonio cultural de Lubrín, un tesoro de tradiciones y arquitectura que se remonta a siglos atrás.'
            : 'Discover the rich history and cultural heritage of Lubrín, a treasure trove of traditions and architecture dating back centuries.'}
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Lugares Históricos' : 'Historical Sites'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historicalSites.map((site, index) => (
              <ItemCard key={index} {...site} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Patrimonio Cultural' : 'Cultural Heritage'}
          </h2>
          {culturalElements.map((element, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{element.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {element.items.map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="h-48">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 dark:text-white">{item.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Línea del Tiempo Histórica' : 'Historical Timeline'}
          </h2>
          <div className="space-y-8">
            {[
              {
                year: language === 'es' ? 'Siglo VIII' : '8th Century',
                title: language === 'es' ? 'Asentamiento Árabe' : 'Arab Settlement',
                description: language === 'es'
                  ? 'Primeros asentamientos árabes en la región'
                  : 'First Arab settlements in the region'
              },
              {
                year: '1488',
                title: language === 'es' ? 'Reconquista Cristiana' : 'Christian Reconquest',
                description: language === 'es'
                  ? 'Incorporación a la Corona de Castilla'
                  : 'Incorporation into the Crown of Castile'
              },
              {
                year: language === 'es' ? 'Siglo XVI' : '16th Century',
                title: language === 'es' ? 'Construcción de la Iglesia' : 'Church Construction',
                description: language === 'es'
                  ? 'Edificación de la Iglesia de Nuestra Señora del Rosario'
                  : 'Construction of the Church of Our Lady of the Rosary'
              }
            ].map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg mr-6">
                    {event.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Ubicación' : 'Location'}
          </h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <Map lat={37.2156} lng={-2.0678} zoom={15} />
          </div>
        </section>
      </div>
    </div>
  );
}
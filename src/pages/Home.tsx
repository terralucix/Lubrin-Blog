import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import WeatherWidget from '../components/WeatherWidget';
import Carousel from '../components/Carousel';
import FeaturedCard from '../components/FeaturedCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const featuredImages = [
    {
      url: '/images/lubrin-sunset.jpg',
      alt: 'Mountain Landscape',
      title: language === 'es' ? 'Descubre Nuestra Tierra' : 'Discover Our Land',
      description: language === 'es'
        ? 'Explora los paisajes más impresionantes de nuestra región'
        : 'Explore the most stunning landscapes of our region'
    },
    {
      url: '/images/aceite.jpg',
      alt: 'Local Gastronomy',
      title: language === 'es' ? 'Sabores Locales' : 'Local Flavors',
      description: language === 'es'
        ? 'Descubre nuestra rica tradición gastronómica'
        : 'Discover our rich culinary tradition'
    },
    {
      url: '/images/lubrin_patron.jpg',
      alt: 'Cultural Heritage',
      title: language === 'es' ? 'Patrimonio Cultural' : 'Cultural Heritage',
      description: language === 'es'
        ? 'Sumérgete en nuestra historia y tradiciones'
        : 'Immerse yourself in our history and traditions'
    },
    {
      url: '/images/blossom4.jpg',
      alt: 'Hiking Trails',
      title: language === 'es' ? 'Rutas y Senderos' : 'Trails and Paths',
      description: language === 'es'
        ? 'Aventúrate por nuestros senderos naturales'
        : 'Venture through our natural trails'}
  ];

  const featuredCards = [
    {
      id: 1,
      title: language === 'es' ? 'Experiencias Gastronómicas' : 'Culinary Experiences',
      description: language === 'es'
        ? 'Descubre los sabores auténticos de nuestra región, desde platos tradicionales hasta modernas interpretaciones de nuestra cocina local.'
        : 'Discover the authentic flavors of our region, from traditional dishes to modern interpretations of our local cuisine.',
      imageUrl: '/images/pexels-pixabay-33783.jpg',
      link: '/gastronomy',
      tags: ['food', 'culture', 'local'],
      subsections: [
        {
          title: language === 'es' ? 'Platos Tradicionales' : 'Traditional Dishes',
          link: '/gastronomy#traditional'
        },
        {
          title: language === 'es' ? 'Restaurantes Locales' : 'Local Restaurants',
          link: '/gastronomy#restaurants'
        },
        {
          title: language === 'es' ? 'Productos Típicos' : 'Local Products',
          link: '/gastronomy#products'
        }
      ]
    },
    {
      id: 2,
      title: language === 'es' ? 'Rutas de Senderismo' : 'Hiking Trails',
      description: language === 'es'
        ? 'Explora nuestros senderos naturales y descubre paisajes impresionantes, perfectos para aventureros y amantes de la naturaleza.'
        : 'Explore our natural trails and discover stunning landscapes, perfect for adventurers and nature lovers.',
      imageUrl: '/images/blossom4.jpg',
      link: '/routes',
      tags: ['nature', 'adventure', 'hiking'],
      subsections: [
        {
          title: language === 'es' ? 'Rutas de Montaña' : 'Mountain Trails',
          link: '/routes#mountain'
        },
        {
          title: language === 'es' ? 'Senderos Culturales' : 'Cultural Paths',
          link: '/routes#cultural'
        },
        {
          title: language === 'es' ? 'Rutas en Bicicleta' : 'Cycling Routes',
          link: '/routes#cycling'
        }
      ]
    },
    
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
      <Carousel images={featuredImages} className="mb-12" />
      </section>

      <div className="mb-12">
        <WeatherWidget />
      </div>
      
      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t.featuredContent}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCards.map((card) => (
            <div key={card.id} className="space-y-4">
              <FeaturedCard {...card} />
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  {language === 'es' ? 'Explora más' : 'Explore more'}
                </h3>
                <div className="space-y-2">
                  {card.subsections.map((subsection, index) => (
                    <Link
                      key={index}
                      to={subsection.link}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>{subsection.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

           
    </div>
  );
}

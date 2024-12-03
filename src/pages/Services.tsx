import { useLanguage } from '../context/LanguageContext';
import { Compass, Home, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].servicesSection;

  const services = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: t.tourGuide,
      description: t.tourGuideDesc,
      imageUrl: '/images/Lubrin-Feb-2012.jpg',
      link: '/services/tour-guide'
      //'/services/tour-guide'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: t.accommodation,
      description: t.accommodationDesc,
      imageUrl: '/images/pexels-asphotograpy-101808.jpg',
      link: '/services/accommodation'
      
      //'/services/accommodation'
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: language === 'es' ? 'Servicios Básicos' : 'Basic Services',
      description: language === 'es'
        ? 'Información sobre tiendas, farmacias y servicios esenciales'
        : 'Information about shops, pharmacies, and essential services',
      imageUrl: '/images/servicios.jpg',
      link: '/services/basic-services'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="block group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="h-48 relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

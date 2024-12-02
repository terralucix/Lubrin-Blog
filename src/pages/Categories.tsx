import { useLanguage } from '../context/LanguageContext';
import CategoryCard from '../components/CategoryCard';
import Carousel from '../components/Carousel';
import { Category } from '../types';

export default function Categories() {
  const { language } = useLanguage();

  const carouselImages = [
    {
      url: '/images/aceite.jpg',
      alt: 'Local Gastronomy',
      title: language === 'es' ? 'Gastronomía Local' : 'Local Gastronomy',
      description: language === 'es' 
        ? 'Descubre los sabores auténticos de nuestra región'
        : 'Discover the authentic flavors of our region'
    },
    {
      url: '/images/lubrin_patron.jpg',
      alt: 'Historical Heritage',
      title: language === 'es' ? 'Patrimonio Histórico' : 'Historical Heritage',
      description: language === 'es'
        ? 'Explora nuestra rica historia y cultura'
        : 'Explore our rich history and culture'
    },
    {
      url: '/images/blossom4.jpg',
      alt: 'Tourist Routes',
      title: language === 'es' ? 'Rutas Turísticas' : 'Tourist Routes',
      description: language === 'es'
        ? 'Descubre los senderos más fascinantes'
        : 'Discover the most fascinating trails'
    }
  ];

  const categories: Category[] = [
    {
      id: 1,
      name: language === 'es' ? 'Gastronomía' : 'Gastronomy',
      slug: 'gastronomy',
      description: language === 'es' 
        ? 'Descubre los sabores únicos de nuestra región'
        : 'Discover the unique flavors of our region',
      imageUrl: '/images/cabrito.jpg',
      link: '/gastronomy',
      items: [
        {
          title: language === 'es' ? 'Platos Tradicionales' : 'Traditional Dishes',
          description: language === 'es'
            ? 'Explora nuestra cocina local'
            : 'Explore our local cuisine'
        },
        {
          title: language === 'es' ? 'Restaurantes' : 'Restaurants',
          description: language === 'es'
            ? 'Los mejores lugares para comer'
            : 'The best places to eat'
        }
      ]
    },
    {
      id: 2,
      name: language === 'es' ? 'Historia' : 'History',
      slug: 'heritage',
      description: language === 'es'
        ? 'Explora nuestro rico patrimonio cultural'
        : 'Explore our rich cultural heritage',
      imageUrl: '/images/lubrin_patron.jpg',
      link: '/about/culture',
      items: [
        {
          title: language === 'es' ? 'Monumentos' : 'Monuments',
          description: language === 'es'
            ? 'Visita nuestros lugares históricos'
            : 'Visit our historical sites'
        },
        {
          title: language === 'es' ? 'Museos' : 'Museums',
          description: language === 'es'
            ? 'Conoce nuestra historia'
            : 'Learn about our history'
        }
      ]
    },
    {
      id: 3,
      name: language === 'es' ? 'Rutas Turísticas' : 'Tourist Routes',
      slug: 'routes',
      description: language === 'es'
        ? 'Explora los senderos y caminos más fascinantes'
        : 'Explore the most fascinating trails and paths',
      imageUrl: '/images/F07-Lubrin-Almeria.jpg',
      link: '/routes',
      items: [
        {
          title: language === 'es' ? 'Senderos Naturales' : 'Nature Trails',
          description: language === 'es'
            ? 'Rutas por paisajes naturales'
            : 'Routes through natural landscapes'
        },
        {
          title: language === 'es' ? 'Rutas Culturales' : 'Cultural Routes',
          description: language === 'es'
            ? 'Descubre nuestro patrimonio'
            : 'Discover our heritage'
        }
      ]
    },
    {
      id: 4,
      name: language === 'es' ? 'Servicios Turísticos' : 'Tourist Services',
      slug: 'services',
      description: language === 'es'
        ? 'Descubre todos los servicios disponibles para hacer tu visita inolvidable'
        : 'Discover all available services to make your visit unforgettable',
      imageUrl: '/images/F24-Lubrin-Almeria.-Iglesia-Ntra-Sra-del-Rosario.jpg',
      link: '/services',
      items: [
        {
          title: language === 'es' ? 'Guías Turísticos' : 'Tour Guides',
          description: language === 'es'
            ? 'Profesionales expertos locales'
            : 'Expert local professionals'
        },
        {
          title: language === 'es' ? 'Alojamiento' : 'Accommodation',
          description: language === 'es'
            ? 'Opciones confortables de hospedaje'
            : 'Comfortable lodging options'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {language === 'es' ? 'Categorías' : 'Categories'}
      </h1>
      
      <Carousel images={carouselImages} className="mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
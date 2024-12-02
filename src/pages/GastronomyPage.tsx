import { useLanguage } from '../context/LanguageContext';
import Carousel from '../components/Carousel';
import ItemCard from '../components/ItemCard';
import RestaurantCard from '../components/restaurant-card';



export default function GastronomyPage() {
  const { language } = useLanguage();

  const gastronomyImages = [
    {
      url: '/images/migas3.JPG',
      alt: 'Traditional Dishes',
      title: language === 'es' ? 'Platos Tradicionales' : 'Traditional Dishes',
      description: language === 'es' 
        ? 'Sabores auténticos de nuestra tierra'
        : 'Authentic flavors from our land'

    },
    {
      url: '/images/aceite.jpg',
      alt: 'Olive Oil',
      
      title: language === 'es' ? 'Aceite de Oliva' : 'Olive Oil',
      description: language === 'es'
        ? 'El oro líquido de nuestra región'
        : 'The liquid gold of our region'
    },
    {
      url: '/images/miel.jpg',
      alt: 'Local Products',
      title: language === 'es' ? 'Productos Locales' : 'Local Products',
      description: language === 'es'
        ? 'Ingredientes frescos de nuestros campos'
        : 'Fresh ingredients from our fields'
    }
  ];



  const traditionalDishes = [
    {
      title: language === 'es' ? 'Cabrito asado' : 'Roasted goat',
      description: language === 'es'
        ? 'Elaborado con  hierbas aromáticas.'
        : 'Made with aromatic herbs.',
      imageUrl: '/images/cabrito.jpg',
      details: [
        {
          label: language === 'es' ? 'Origen' : 'Origin',
          value: language === 'es' ? 'Tradicional' : 'Traditional'
        },
        {
          label: language === 'es' ? 'Tipo' : 'Type',
          value: language === 'es' ? 'Plato principal' : 'Main course'
        }
      ]
    },
    {
      title: language === 'es' ? 'Migas El Castillico' : 'Lubrín-style Migas El Castillico',
      description: language === 'es'
        ? 'Plato tradicional de pastor elaborado con harina, ajo y aceite de oliva local.'
        : 'Traditional shepherd\'s dish made with flour, garlic, and local olive oil.',
      imageUrl: '/images/migas3.JPG',
      details: [
        {
          label: language === 'es' ? 'Origen' : 'Origin',
          value: language === 'es' ? 'Cocina pastoril' : 'Shepherd\'s cuisine'
        },
        {
          label: language === 'es' ? 'Temporada' : 'Season',
          value: language === 'es' ? 'Todo el año' : 'All year'
        }
      ]
    }
  ];

   const localProducts = [
    {
      title: language === 'es' ? 'Aceite de Oliva Virgen Extra de la Almazara de Lubrin' : 'Extra Virgin Olive Oil of Lubrin Almazara',
      description: language === 'es'
        ? 'Aceite premium producido con aceitunas de nuestros olivares centenarios.'
        : 'Premium oil produced from our century-old olive groves.',
      imageUrl: '/images/aceite.jpg',
      googleMapsUrl:'https://maps.app.goo.gl/6n5ZbEYMsagRTSno9',
      websiteUrl:'https://almazaradelubrin.es/',
      details: [
        {
          label: language === 'es' ? 'Variedad' : 'Variety',
          value: 'Picual'
        },
        {
          label: language === 'es' ? 'Producción' : 'Production',
          value: language === 'es' ? 'Artesanal' : 'Artisanal'
        }

    
      ]
    },
    {
      title: language === 'es' ? 'Miel Sierra de los Filabres' : 'Sierra de los Filabres Honey',
      description: language === 'es'
        ? 'Miel recolectada en nuestras tierras, perfectas para repostería y aperitivos.'
        : 'Honey recollected in our lands, perfect for pastries and snacks.',
      imageUrl: '/images/miel.jpg',
      googleMapsUrl:'https://maps.app.goo.gl/aBYNzAbioLUiJtVb9',
      websiteUrl:'https://mielsierrafilabres.es/',
      details: [
        {
          label: language === 'es' ? 'Tipo' : 'Type',
          value: language === 'es' ? 'miel' : 'honey'
        },
        {
          label: language === 'es' ? 'Uso' : 'Use',
          value: language === 'es' ? 'Culinario' : 'Culinary'
        }
      ]
    }
  ];

  const restaurants = [
    {
      title: language === 'es' ? 'Restaurante Albar' : ' Albar Restaurant',
      description: language === 'es'
        ? 'Cocina tradicional en un ambiente acogedor y familiar.'
        : 'Traditional cuisine in a cozy, family-friendly atmosphere.',
      imageUrl: '/images/albar2.jpg',
      mapUrl: 'https://maps.google.com/?q=Restaurante+Albar+Lubrin',
      details: [
        {
          label: language === 'es' ? 'Cocina' : 'Cuisine',
          value: language === 'es' ? 'Tradicional' : 'Traditional'
        },
        {
          label: language === 'es' ? ' Numero de Telefono' : 'Telephono Number',
          value: ' 647 87 70 91'
        }
      ]
    },



    {
      title: language === 'es' ? 'Bar La Plaza' : 'La Plaza Bar',
      description: language === 'es'
        ? 'Especialidad en tapas y platos de cuchara.'
        : 'Specializing in tapas and hearty stews.',
      imageUrl: '/images/la plaza.jpg',
      mapUrl: 'https://maps.app.goo.gl/Kh9oxyDsVQ3FcaLw7',
      details: [
        {
          label: language === 'es' ? 'Cocina' : 'Cuisine',
          value: language === 'es' ? 'Mediterránea y tradicional' : 'Mediterranean and traditional'
        },
        {
          label: language === 'es' ? ' Numero de Telefono' : 'Telephono Number',
          value: ' 950477000'
        }
      ]
    },

    {
      title: language === 'es' ? 'Restaurante Bar Lopez' : 'Lopez Restaurant Bar',
      description: language === 'es'
        ? 'Especialidad en carnes a la brasa.'
        : 'Specializing in grilled meats.',
      imageUrl: '/images/lopez.jpg',
      mapUrl: 'https://maps.app.goo.gl/78NLKvnv31KCxjC2A',
      details: [
        {
          label: language === 'es' ? 'Cocina' : 'Cuisine',
          value: language === 'es' ? 'Mediterránea y tradicional' : 'Mediterranean and traditional'
        },
        {
          label: language === 'es' ? ' Numero de Telefono' : 'Telephono Number',
          value: '950461590'
        }
      ]
    },
    {
      title: language === 'es' ? 'Bar La Tasca' : 'La Tasca Bar',
      description: language === 'es'
        ? 'Especialidad en tapas.'
        : 'Specializing in tapas.',
      imageUrl: '/images/tasca.jpg',
      mapUrl: 'https://maps.app.goo.gl/hdywTnX8gY5Ee8de6',
      details: [
        {
          label: language === 'es' ? 'Cocina' : 'Cuisine',
          value: language === 'es' ? 'Mediterránea' : 'Mediterranean'
        },
        {
          label: language === 'es' ? 'Informacion completa en el mapa ' : 'Full information on the map',
        
        
        }
      ]
    },



    {
      title: language === 'es' ? 'Bar Los Chiveros' : 'Los Chiveros Bar',
      description: language === 'es'
        ? 'Especialidad en tapas, carne a la brasa, pizza, empanadillas y postres caseros.'
        : 'Specializing in tapas, grilled meat, pizza, empanadas and homemade desserts.',
      imageUrl: '/images/chiveros.JPG',
      mapUrl: 'https://maps.app.goo.gl/X95mcifwUKVCtiyA8',

      details: [
        {
          label: language === 'es' ? 'Cocina' : 'Cuisine',
          value: language === 'es' ? 'Mediterránea , especialidades Argentinas' : 'Mediterranean, Argentine specialties'
        },
        {
          label: language === 'es' ? 'Informacion completa en el mapa' : 'Full information on the map',
          // Aquí es donde agregas el enlace a Google Maps
        
        }
      ]
    }
  ];


  

  const culinaryExperiences = [
    {
      title: language === 'es' ? 'Cata de Aceite' : 'Olive Oil Tasting',
      description: language === 'es'
        ? 'Descubre los matices de nuestro aceite de oliva virgen extra.'
        : 'Discover the nuances of our extra virgin olive oil.',
      imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5',
      schedule: language === 'es' ? 'Sábados 11:00' : 'Saturdays 11:00',
      price: '25€'
    },
    {
      title: language === 'es' ? 'Taller de Cocina Tradicional' : 'Traditional Cooking Workshop',
      description: language === 'es'
        ? 'Aprende a cocinar platos típicos de la región.'
        : 'Learn to cook typical regional dishes.',
      imageUrl: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf',
      schedule: language === 'es' ? 'Domingos 10:00' : 'Sundays 10:00',
      price: '45€'
    }
   
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'es' ? 'Gastronomía Local' : 'Local Gastronomy'}
      </h1>
      
      <Carousel images={gastronomyImages} className="mb-12" />

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'es'
            ? 'Descubre los sabores auténticos de Lubrín, donde cada plato cuenta una historia de tradición y pasión por la buena cocina.'
            : 'Discover the authentic flavors of Lubrín, where each dish tells a story of tradition and passion for good cooking.'}
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Platos Tradicionales' : 'Traditional Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traditionalDishes.map((dish, index) => (
              <ItemCard key={index} {...dish} />
            ))}
          </div>
        </section>

        <section className="mb-16">
  <h2 className="text-3xl font-bold mb-8">
    {language === 'es' ? 'Productos Locales' : 'Local Products'}
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {localProducts.map((product, index) => (
      <ItemCard key={index} {...product} />
    ))}
  </div>
</section>

        <section className="mb-16">
  <h2 className="text-3xl font-bold mb-8">
    {language === 'es' ? 'Dónde Comer' : 'Where to Eat'}
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {restaurants.map((restaurant, index) => (
      <RestaurantCard key={index} {...restaurant} />
    ))}
  </div>
</section>
       
        <section>
  <h2 className="text-3xl font-bold mb-8">
    {language === 'es' ? 'Ubicación' : 'Location'}
  </h2>
  <div className="h-96 rounded-lg overflow-hidden">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10687.460703395798!2d-2.0663831428173305!3d37.21445270336488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1732961298177!5m2!1ses!2ses" width="1200" height="450" loading="lazy" ></iframe>
  </div>
</section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Experiencias Culinarias' : 'Culinary Experiences'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culinaryExperiences.map((experience, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="h-48">
                  <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{experience.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{experience.schedule}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {experience.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      
      </div>
    </div>
  );
}
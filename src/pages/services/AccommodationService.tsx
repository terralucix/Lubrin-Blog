import { useLanguage } from '../../context/LanguageContext';
import {  Star, ArrowRight } from 'lucide-react';
import SectionHero from '../../components/SectionHero';

export default function AccommodationService() {
  const { language } = useLanguage();

  const accommodations = [

    //casa granado
    {
      title: language === 'es' ? 'Casona Granado' : 'Casona Granado',
      type: language === 'es' ? 'Casa Rural' : 'Rural House',
      description: language === 'es'
        ? 'Auténtica casa rural restaurada con vistas panorámicas a la Sierra de los Filabres'
        : 'Authentic restored rural house with panoramic views of the Sierra de los Filabres',
      capacity: '2-6',
      url:'https://www.andalucia.org/es/lubrin-alojamientos-hostal-casona-granado',
     
      rating: 3,
     
      imageUrl:'/images/casona.jpg'
      
    },
//yedra

    {
      title: language === 'es' ? 'Casa Rural La Yedra' : 'Casa Rural La Yedra',
      type: language === 'es' ? 'Casa Rural' : 'Rural House',
      description: language === 'es'
        ? 'La Yedra ofrece varias terrazas para relajarse y disfrutar de una vista relajada y maravillosa, su piscina. '
        : 'La Yedra offers several terraces to relax and enjoy a relaxed and wonderful view, its swimming pool.',
      capacity: '2-4',
     url:'https://www.andalucia.org/es/lubrin-alojamientos-casa-rural-la-yedra',
      rating: 2,
    
      imageUrl: '/images/yedra1.jpeg'
    },

//eras
    {
      title: language === 'es' ? 'Casa Rural LAS ERAS' : 'Casa Rural LAS ERAS',
      type: language === 'es' ? 'Casa rural' : 'Rural house',
      description: language === 'es'
        ? ' Se encuentra junto al paraje conocido como Cañada Las Eras, de la barriada de la Breña a siete kilómetros de Lubrín'
        : 'It is located next to the place known as Cañada Las Eras, in the neighborhood of La Breña, seven kilometers from Lubrín.',
      capacity: '4',
      url:'https://www.andalucia.org/es/lubrin-alojamientos-casa-rural-las-eras-ii',
      rating: 2,
     
      imageUrl: '/images/eras.jpg'
    },

//Jabali

    {
      title: language === 'es' ? 'EL JABALÍ I' : 'EL JABALÍ I',
      type: language === 'es' ? 'Casa rural' : 'Rural house',
      description: language === 'es'
        ? '3 casas (El Jabali I,II, III) distribuidas alrededor de una piscina en una colina, con terraza, zona de barbacoa compartida y aparcamiento privado'
        : '3 houses (El Jabali I, II, III) distributed around a swimming pool on a hill, with terrace, shared barbecue area and private parking',
      capacity: '4',
     
      rating: 3,

     url:'https://www.andalucia.org/es/lubrin-alojamientos-el-jabali-i',
      imageUrl: '/images/jabali.jpg'
    },
    {
      
      

      title: language === 'es' ? 'EL JABALÍ II' : 'EL JABALÍ II',
      type: language === 'es' ? 'Casa rural' : 'Rural house',
      description: language === 'es'
      ? '3 casas (El Jabali I,II, III) distribuidas alrededor de una piscina en una colina, con terraza, zona de barbacoa compartida y aparcamiento privado'
      : '3 houses (El Jabali I, II, III) distributed around a swimming pool on a hill, with terrace, shared barbecue area and private parking',
    capacity: '4',
     
      rating: 3,

      url:'https://www.andalucia.org/es/lubrin-alojamientos-el-jabali-ii',
     
      imageUrl: '/images/jabali2.jpg'
      
    }, 
    
    {
      title: language === 'es' ? 'EL JABALÍ III' : 'EL JABALÍ III',
      type: language === 'es' ? 'Casa rural' : 'Rural house',
      description: language === 'es'
      ? '3 casas (El Jabali I,II, III) distribuidas alrededor de una piscina en una colina, con terraza, zona de barbacoa compartida y aparcamiento privado'
      : '3 houses (El Jabali I, II, III) distributed around a swimming pool on a hill, with terrace, shared barbecue area and private parking',
    capacity: '4',
    
     
      rating: 3,
      url:'https://www.andalucia.org/es/lubrin-alojamientos-el-jabali-iii',

      imageUrl: '/images/javali3.jpg'
    }
  ];

 
  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Alojamientos en Lubrín' : 'Accommodation in Lubrín'}
        description={language === 'es'
          ? 'Descubre nuestras opciones de alojamiento para una estancia inolvidable'
          : 'Discover our accommodation options for an unforgettable stay'}
        imageUrl="/images/pexels-asphotograpy-101808.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === 'es' ? 'Nuestros Alojamientos' : 'Our Accommodations'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={accommodation.imageUrl}
                    alt={accommodation.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">{accommodation.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{accommodation.type}</p>
                    </div>
                  
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(accommodation.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{accommodation.description}</p>
                  <div className="border-t pt-4">
                   
                    <a
                    href={accommodation.url}
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                  >
                    {language === 'es' ? 'Ver detalles' : 'View details'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

       

        <section className="bg-blue-50 dark:bg-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
            {language === 'es' ? 'Oficina de Turismo' : 'Turist Office'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>📞 +34 693416591</p>
                <p>✉️ turismolubrin@hotmail.com</p>
                <p>Calle Álvarez de Sotomayor, 19, 04271, LUBRIN</p>
              </div>
            </div>
            <a
                href="https://www.lubrin.es/Servicios/cmsdipro/index.nsf/index.xsp?p=Lubrin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <img
                    src="/images/logo_web.png"
                    alt="Ayuntamiento de Lubrín"
                    className="h-12 object-contain mx-auto mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://www.lubrin.es/Servicios/cmsdipro/image.nsf/imagen.xsp?idfoto=dipalme';
                      target.onerror = null; // Prevent infinite fallback loop
                    }}
                  />
                  <p className="text-sm text-center text-gray-600">
                    {language === 'es' ? 'Portal Oficial de Lubrín' : 'Official Lubrín Portal'}
                  </p>
                </div>
              </a>
          </div>
         

        </section>

       
            </div>
      </div>
     
         
      
    
  );


}





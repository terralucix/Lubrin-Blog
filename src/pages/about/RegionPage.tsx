import { useLanguage } from '../../context/LanguageContext';
import Carousel from '../../components/Carousel';
import ItemCard from '../../components/ItemCard';
import WeatherWidget from '../../components/WeatherWidget';
import ImageGallery from '../../components/Gallery';
export default function RegionPage() {
  const { language } = useLanguage();

  const regionImages = [
    {
      url: '/images/F07-Lubrin-Almeria.jpg',
      alt: 'Sierra de los Filabres',
      title: language === 'es' ? 'Sierra de los Filabres' : 'Filabres Mountains',
      description: language === 'es'
        ? 'Majestuosas montañas que rodean nuestro pueblo'
        : 'Majestic mountains surrounding our town'
    },
    {
      url: '/images/kay6rijmbbxibhutrsfl.webp',
      alt: 'Pueblo de Lubrín',
      title: language === 'es' ? 'Pueblo Tradicional' : 'Traditional Village',
      description: language === 'es'
        ? 'Arquitectura tradicional mediterránea'
        : 'Traditional Mediterranean architecture'
    },
    {
      url: '/images/cabra.jpg',
      alt: 'Campos de Lubrín',
      title: language === 'es' ? 'Campos y Cultivos' : 'Fields and Crops',
      description: language === 'es'
        ? 'Paisajes agrícolas tradicionales'
        : 'Traditional agricultural landscapes'
    }
  ];

  const naturalAttractions = [
    {
      title: language === 'es' ? 'Sierra de los Filabres' : 'Filabres Mountains',
      description: language === 'es'
        ? 'Impresionante cordillera que ofrece vistas panorámicas y rutas de senderismo.'
        : 'Impressive mountain range offering panoramic views and hiking trails.',
      imageUrl: '/images/F06-Lubrin-Almeria.jpg',
      details: [
        {
          label: language === 'es' ? 'Altitud' : 'Altitude',
          value: '1000-2000m'
        },
        {
          label: language === 'es' ? 'Actividades' : 'Activities',
          value: language === 'es' ? 'Senderismo, Ciclismo' : 'Hiking, Cycling'
        }
      ]
    },
    {
      title: language === 'es' ? 'Valle de Lubrín' : 'Lubrín Valley',
      description: language === 'es'
        ? 'Fértil valle conocido por sus olivares y almendros centenarios.'
        : 'Fertile valley known for its olive groves and century-old almond trees.',
      imageUrl: '/images/blossom4.jpg',
      details: [
        {
          label: language === 'es' ? 'Cultivos' : 'Crops',
          value: language === 'es' ? 'Olivos, Almendros' : 'Olives, Almonds'
        }
      ]
    }
  ];

  const climate = [
    {
      title: language === 'es' ? 'Clima Mediterráneo' : 'Mediterranean Climate',
      description: language === 'es'
        ? 'Veranos cálidos y secos, inviernos suaves con más de 300 días de sol al año.'
        : 'Warm, dry summers and mild winters with over 300 days of sunshine per year.',
      details: [
        {
          label: language === 'es' ? 'Temperatura Media' : 'Average Temperature',
          value: '18°C'
        },
        {
          label: language === 'es' ? 'Precipitación Anual' : 'Annual Rainfall',
          value: '300mm'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'es' ? 'La Región de Lubrín' : 'The Lubrín Region'}
      </h1>

      <Carousel images={regionImages} className="mb-12" />

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-3xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'es'
            ? 'Descubre la belleza natural y la diversidad geográfica de Lubrín, un enclave único en la Sierra de los Filabres.'
            : 'Discover the natural beauty and geographical diversity of Lubrín, a unique enclave in the Sierra de los Filabres.'}
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Entorno Natural' : 'Natural Environment'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {naturalAttractions.map((attraction, index) => (
              <ItemCard key={index} {...attraction} />
            ))}
          </div>
        </section>

      <section className="mb-16">
        <ImageGallery/>
      </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Clima y Geografía' : 'Climate and Geography'}
          </h2>

          <div className="mb-12">
        <WeatherWidget />
      </div>
          <div className="grid grid-cols-1 gap-8">
            {climate.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className=" text-2xl text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <span className="font-bold">{detail.label}:</span>{' '}
                      <span className=" text-2xl text-gray-600 dark:text-gray-300">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-8">
            {language === 'es' ? 'Agricultura y Tradición' : 'Agriculture and Tradition'}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className=" text-2xl text-gray-600 dark:text-gray-300 mb-6">
              {language === 'es'
                ? 'La agricultura sigue siendo una parte fundamental de la vida en Lubrín. Los olivares, almendros y cultivos tradicionales forman parte del paisaje y la economía local.'
                : 'Agriculture continues to be a fundamental part of life in Lubrín. Olive groves, almond trees, and traditional crops are part of the landscape and local economy.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className=" text-3xl font-bold mb-2">
                  {language === 'es' ? 'Cultivos Principales' : 'Main Crops'}
                </h4>
                <ul className="list-disc list-inside  text-2xl text-gray-600 dark:text-gray-300">
                  <li>{language === 'es' ? 'Olivos' : 'Olive trees'}</li>
                  <li>{language === 'es' ? 'Almendros' : 'Almond trees'}</li>
                  <li>{language === 'es' ? 'Higueras' : 'Fig trees'}</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className=" text-3xl font-bold mb-2">
                  {language === 'es' ? 'Temporadas de Cosecha' : 'Harvest Seasons'}
                </h4>
                <ul className="list-disc list-inside  text-2xl text-gray-600 dark:text-gray-300">
                  <li>{language === 'es' ? 'Aceitunas: Noviembre - Enero' : 'Olives: November - January'}</li>
                  <li>{language === 'es' ? 'Almendras: Agosto - Septiembre' : 'Almonds: August - September'}</li>
                  <li>{language === 'es' ? 'Higos: Agosto - Septiembre' : 'Figs: August - September'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Flora y Fauna' : 'Flora and Fauna'}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'es' ? 'Vegetación Autóctona' : 'Native Vegetation'}
                </h3>
                <ul className=" text-2xl list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                

                  <img 
                  src='/images/Pino_carrasco.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" />
                    
                    {language === 'es' ? 'Pino carrasco' : 'Aleppo pine'}
                  
                  
                    <img 
                  src='/images/Encina_octocentenaria_06.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" />


                  {language === 'es' ? 'Encina' : 'Holm oak'}



                  <img 
                  src='/images/Salvia_rosmarinus_kz12.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" /> 
                  {language === 'es' ? 'Romero' : 'Rosemary'}


                  <img 
                  src='/images/Planta_de_tomillo.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" />
                  {language === 'es' ? 'Tomillo' : 'Thyme'}

                </ul>
              </div>
              <div>


                <h3 className="text-2xl font-bold mb-4">
                  {language === 'es' ? 'Fauna Local' : 'Local Wildlife'}
                </h3>
                <ul className=" text-2xl list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">



                <img 
                  src='/images/aguila real.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" />

                  {language === 'es' ? 'Águila real' : 'Golden eagle'}




                  <img 
                  src='/images/640px-Perdrix_rouge.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" />

                  {language === 'es' ? 'Perdiz roja' : 'Red-legged partridge'}



                  <img 
                  src='/images/cabra-montes.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" />
                  {language === 'es' ? 'Cabra montés' : 'Spanish ibex'}

                  <img 
                  src='/images/conejo-monte.jpg'
                   alt="Flora and Fauna"
                   className="w-full h-[400px] object-cover" />
                  {language === 'es' ? 'Conejo' : 'Rabbit'}



                </ul>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
}
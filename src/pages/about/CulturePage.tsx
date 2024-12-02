import { useLanguage } from '../../context/LanguageContext';
import Carousel from '../../components/Carousel';
import ItemCard from '../../components/ItemCard';
import ImageGalleryCulture from '../../components/Galleryculture';

export default function CulturePage() {
  const { language } = useLanguage();

  const cultureImages = [
    {
      url: '/images/lubrin2.jpg',
      alt: 'Iglesia de Lubrín',
      title: language === 'es' ? 'Patrimonio Religioso' : 'Religious Heritage',
      description: language === 'es'
        ? 'La Iglesia de Nuestra Señora del Rosario, joya arquitectónica del siglo XVI'
        : 'Church of Our Lady of the Rosary, architectural jewel from the 16th century'
    },
    {
      url: '/images/lubrin_patron.jpg',
      alt: 'Fiestas de Lubrín',
      title: language === 'es' ? 'Fiestas Patronales' : 'Patron Saint Festivities',
      description: language === 'es'
        ? 'Celebraciones que mantienen vivas nuestras tradiciones'
        : 'Celebrations that keep our traditions alive'
    },
    {
      url: '/images/museo.jpg',
      alt: 'Gastronomía de Lubrín',
      title: language === 'es' ? 'Tradiciones vivas' : 'life  Traditions',
      description: language === 'es'
        ? 'Artesania y tradicion '
        : 'Crafts and Tradition'
    }
  ];

  const culturalEvents = [
    {
      title: language === 'es' ? 'Fiestas Patronales de San Sebastián' : 'San Sebastian Patron Saint Festival',
      description: language === 'es'
        ? 'Las fiestas patronales en Lubrín son eventos significativos que celebran la cultura y tradiciones locales, destacando principalmente la Fiesta del Pan en honor a San Sebastián. Esta festividad se lleva a cabo el 20 de enero y ha sido declarada de Interés Turístico Andaluz.'
        : 'The patron saint festivities in Lubrín are significant events that celebrate local culture and traditions, with the Bread Festival in honour of Saint Sebastian being the most notable. This festival takes place on 20 January and has been declared of Andalusian Tourist Interest.',
      imageUrl: '/images/lubrin_patron.jpg',
      details: [
        {
          label: language === 'es' ? 'Fecha' : 'Date',
          value: language === 'es' ? '20 de Enero' : 'January 20th'
        },
        {
          label: language === 'es' ? 'Ubicación' : 'Location',
          value: language === 'es' ? 'Plaza de la Iglesia' : 'Church Square'
        }
      ]
    },
    {
      title: language === 'es' ? 'Semana Santa' : 'Holy Week',
      description: language === 'es'
        ? ' Este evento se destaca por la iluminación con antorchas, que se lleva a cabo en la madrugada del Jueves al Viernes Santo. La procesión comienza a las 06:00 horas desde la parroquia local, marcando un momento significativo en las celebraciones de el Domingo de Ramos La festividad inicia con la celebración del Domingo de Ramos, donde se realiza una procesión viviente conocida como La Borriquita. '

        : 'This event is highlighted by the lighting with torches, which takes place in the early hours of Thursday to Good Friday. The procession begins at 06:00 from the local parish, marking a significant moment in the celebrations  Palm Sunday The festivities begin with the celebration of Palm Sunday, where a living procession known as La Borriquita takes place.',
      imageUrl: '/images/borriquita.jpg',
      details: [
        {
          label: language === 'es' ? 'Período' : 'Period',
          value: language === 'es' ? 'Marzo/Abril' : 'March/April'
        }
      ]
    }
  ];

  const traditions = [
    {
      title: language === 'es' ? 'Centro de Interpretacion Rural' : 'The Rural Interpretation Centre',
      description: language === 'es'
        ? 'El Centro de Interpretación Rural se encuentra en el corazon de Lubrin. Este espacio  está dedicado a exhibir diversos aspectos históricos, artesanales y rurales que reflejan las tradiciones y formas de vida de los habitantes de Lubrin de antaño.'
        : 'The Rural Interpretation Centre is located in the heart of Lubrin. This space is dedicated to exhibiting various historical, artisanal and rural aspects that reflect the traditions and ways of life of the inhabitants of Lubrin of yesteryear.',
      imageUrl: '/images/museo.jpg'
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'es' ? 'Cultura y Tradiciones de Lubrín' : 'Culture and Traditions of Lubrín'}
      </h1>

      <Carousel images={cultureImages} className="mb-12" />

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-4xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'es'
            ? 'Descubre la rica herencia cultural de Lubrín, donde las tradiciones centenarias se entrelazan con la vida moderna.'
            : 'Discover the rich cultural heritage of Lubrín, where centuries-old traditions intertwine with modern life.'}
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            
            {language === 'es' ? 'Eventos Culturales' : 'Cultural Events'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalEvents.map((event, index) => (
              <ItemCard key={index} {...event} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Patrimonio Histórico' : 'Historical Heritage'}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="mb-6">
          <img 
            src="/images/F27-Lubrin-Almeria.-Iglesia-Ntra-Sra-del-Rosario (1).jpg"
            alt={language === 'es' 
              ? 'Iglesia de Nuestra Señora del Rosario' 
              : 'Church of Our Lady of the Rosary'}
            className="w-full h-auto rounded-lg object-cover"
          />
            <img 
            src="/images/lubrin2.jpg"
            alt={language === 'es' 
              ? 'Iglesia de Nuestra Señora del Rosario' 
              : 'Church of Our Lady of the Rosary'}
            className="w-full h-auto rounded-lg object-cover"
          />
           <img 
            src="/images/lubrin11.jpg"
            alt={language === 'es' 
              ? 'Iglesia de Nuestra Señora del Rosario' 
              : 'Church of Our Lady of the Rosary'}
            className="w-full h-auto rounded-lg object-cover"
          />
          
        </div>
            <h3 className="text-3xl font-bold mb-4">
              {language === 'es' 
                ? 'Iglesia de Nuestra Señora del Rosario' 
                : 'Church of Our Lady of the Rosary'}
            </h3>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
              {language === 'es'
                ? 'Construida en el siglo XVI, esta iglesia es el centro espiritual y cultural de Lubrín. Su arquitectura refleja la historia de la región y alberga importantes obras de arte religioso.'
                : 'Built in the 16th century, this church is the spiritual and cultural center of Lubrín. Its architecture reflects the region\'s history and houses important religious artwork.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2">
                  {language === 'es' ? 'Horario de Visitas' : 'Visiting Hours'}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === 'es'
                    ? 'Lunes a Domingo: 10:00 - 19:00'
                    : 'Monday to Sunday: 10:00 - 19:00'}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2">
                  {language === 'es' ? 'Misas' : 'Mass Schedule'}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === 'es'
                    ? 'Domingos: 11:00 y 19:00'
                    : 'Sundays: 11:00 and 19:00'}
                </p>
              </div>
            </div>

            <div className="mt-6">
          <a 
            href="https://maps.app.goo.gl/oXsPitUktHYSt8DdA" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
          >
            {language === 'es' 
              ? 'Ver ubicación en el mapa →' 
              : 'View location on map →'}
          </a>
        </div>
          </div>
        </section>

        <section className="mb-16 ">
       
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Tradiciones Vivas' : 'Living Traditions'}
          </h2>
          <div className=" text-2xl grid grid-cols-1 md:grid-cols-1 gap-8">
            {traditions.map((tradition, index) => (
              <ItemCard key={index} {...tradition} />
            ))}
          </div>
         
        </section>
        <section className="mb-16">
        <ImageGalleryCulture/>
      </section>
       
      </div>
    </div>
  );
}
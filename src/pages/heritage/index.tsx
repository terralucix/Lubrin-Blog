import { useLanguage } from '../../context/LanguageContext';
import SectionHero from '../../components/SectionHero';
import ItemCard from '../../components/ItemCard';

export default function HeritagePage() {
  const { language } = useLanguage();

  const monuments = [
    {
      title: language === 'es' ? 'Castillo del Reloj' : 'Clock Castle',
      description: language === 'es'
        ? 'Fortaleza histórica del siglo XVI que domina el paisaje del pueblo.'
        : 'Historic 16th-century fortress that dominates the village landscape.',
      imageUrl: '/images/lubrin5-640x436.jpg',
      details: [
        {
          label: language === 'es' ? 'Época' : 'Period',
          value: language === 'es' ? 'Siglo XVI' : '16th Century'
        },
        {
          label: language === 'es' ? 'Estado' : 'Status',
          value: language === 'es' ? 'Bien conservado' : 'Well preserved'
        }
      ]
    },
    {
      title: language === 'es' ? 'Iglesia Parroquial' : 'Parish Church',
      description: language === 'es'
        ? 'Templo histórico que refleja la arquitectura religiosa tradicional.'
        : 'Historic temple reflecting traditional religious architecture.',
      imageUrl: '/images/lubrin2.jpg',
      details: [
        {
          label: language === 'es' ? 'Estilo' : 'Style',
          value: language === 'es' ? 'Gótico tardío' : 'Late Gothic'
        },
        {
          label: language === 'es' ? 'Visitas' : 'Visits',
          value: language === 'es' ? 'Acceso libre' : 'Free access'
        }
      ]
    }
  ];

  const museums = [
    {
      title: language === 'es' ? 'Museo Etnográfico' : 'Ethnographic Museum',
      description: language === 'es'
        ? 'Colección de objetos y documentos que muestran la vida tradicional.'
        : 'Collection of objects and documents showing traditional life.',
        imageUrl: '/images/museo.jpg',
      details: [
        {
          label: language === 'es' ? 'Horario' : 'Hours',
          value: '10:00 - 18:00'
        },
        {
          label: language === 'es' ? 'Entrada' : 'Admission',
          value: language === 'es' ? 'Gratuita' : 'Free'
        }
      ]
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Historia y Patrimonio' : 'History and Heritage'}
        description={language === 'es'
          ? 'Explora siglos de historia y tradición que han dado forma a nuestra identidad'
          : 'Explore centuries of history and tradition that have shaped our identity'}
        imageUrl="/imagen/lubrin_patron.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Monumentos Históricos' : 'Historical Monuments'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monuments.map((monument, index) => (
              <ItemCard key={index} {...monument} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Museos y Exposiciones' : 'Museums and Exhibitions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {museums.map((museum, index) => (
              <ItemCard key={index} {...museum} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
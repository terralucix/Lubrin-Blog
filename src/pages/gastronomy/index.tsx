import { useLanguage } from '../../context/LanguageContext';
import SectionHero from '../../components/SectionHero';
import ItemCard from '../../components/ItemCard';

export default function GastronomyPage() {
  const { language } = useLanguage();

  const dishes = [
    {
      title: language === 'es' ? 'Migas de Lubrín' : 'Lubrín Migas',
      description: language === 'es'
        ? 'Las migas de Lubrín son un plato tradicional de la región de Almería, España, especialmente asociado con el pueblo de Lubrín. Este plato es una variación de las migas, que se suelen hacer con restos de pan, y se ha convertido en un alimento básico de la cocina local.'
        : 'Migas de Lubrín is a traditional dish from the region of Almería, Spain, particularly associated with the village of Lubrín. This dish is a variation of migas, which are typically made from leftover bread, and it has become a staple in local cuisine.',
      imageUrl: '/images/migas3.JPG',
      details: [
        {
          label: language === 'es' ? 'Origen' : 'Origin',
          value: language === 'es' ? 'Tradicional' : 'Traditional'
        },
        {
          label: language === 'es' ? 'Temporada' : 'Season',
          value: language === 'es' ? 'Todo el año' : 'All year'
        }
      ]
    },
    {
      title: language === 'es' ? 'Aceite de Oliva' : 'Olive Oil',
      description: language === 'es'
        ? 'Aceite de primera calidad producido en los olivares tradicionales de la zona.'
        : 'Premium quality oil produced in traditional local olive groves.',
      imageUrl: '/images/aceite.jpg',
      details: [
        {
          label: language === 'es' ? 'Tipo' : 'Type',
          value: 'Extra Virgin'
        },
        {
          label: language === 'es' ? 'Producción' : 'Production',
          value: language === 'es' ? 'Artesanal' : 'Artisanal'
        }
      ]
    }
  ];

  const restaurants = [
    {
      title: language === 'es' ? 'Restaurante Casa María' : 'Casa María Restaurant',
      description: language === 'es'
        ? 'Cocina tradicional en un ambiente acogedor y familiar.'
        : 'Traditional cuisine in a cozy, family-friendly atmosphere.',
      details: [
        {
          label: language === 'es' ? 'Dirección' : 'Address',
          value: 'Plaza Mayor, 1'
        },
        {
          label: language === 'es' ? 'Horario' : 'Hours',
          value: '12:00 - 23:00'
        }
      ]
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Gastronomía Local' : 'Local Gastronomy'}
        description={language === 'es'
          ? 'Descubre los sabores auténticos y tradicionales de nuestra tierra'
          : 'Discover the authentic and traditional flavors of our land'}
        imageUrl="/images/cabrito.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Platos Tradicionales' : 'Traditional Dishes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dishes.map((dish, index) => (
              <ItemCard key={index} {...dish} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            {language === 'es' ? 'Dónde Comer' : 'Where to Eat'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.map((restaurant, index) => (
              <ItemCard key={index} {...restaurant} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
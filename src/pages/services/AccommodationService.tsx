import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Home, Wifi, Coffee, Car, Star, Check } from 'lucide-react';
import SectionHero from '../../components/SectionHero';

export default function AccommodationService() {
  const { language } = useLanguage();

  const accommodations = [
    {
      title: language === 'es' ? 'Casa Rural El Olivo' : 'El Olivo Rural House',
      type: language === 'es' ? 'Casa Rural' : 'Rural House',
      description: language === 'es'
        ? 'Auténtica casa rural restaurada con vistas panorámicas a la Sierra de los Filabres'
        : 'Authentic restored rural house with panoramic views of the Sierra de los Filabres',
      capacity: '2-6',
      price: language === 'es' ? 'Desde 80€/noche' : 'From 80€/night',
      rating: 5,
      amenities: [
        language === 'es' ? 'Terraza privada' : 'Private terrace',
        language === 'es' ? 'Chimenea' : 'Fireplace',
        language === 'es' ? 'Cocina equipada' : 'Equipped kitchen',
        'WiFi'
      ],
      imageUrl: '/images/accommodation/rural-house.jpg'
    },
    {
      title: language === 'es' ? 'Apartamentos Vista Sierra' : 'Sierra View Apartments',
      type: language === 'es' ? 'Apartamentos' : 'Apartments',
      description: language === 'es'
        ? 'Modernos apartamentos con todas las comodidades en el centro histórico'
        : 'Modern apartments with all amenities in the historic center',
      capacity: '2-4',
      price: language === 'es' ? 'Desde 60€/noche' : 'From 60€/night',
      rating: 5,
      amenities: [
        'WiFi',
        language === 'es' ? 'Aire acondicionado' : 'Air conditioning',
        language === 'es' ? 'Balcón' : 'Balcony',
        language === 'es' ? 'Parking gratuito' : 'Free parking'
      ],
      imageUrl: '/images/accommodation/apartments.jpg'
    },
    {
      title: language === 'es' ? 'Hotel Boutique Lubrín' : 'Lubrín Boutique Hotel',
      type: language === 'es' ? 'Hotel Boutique' : 'Boutique Hotel',
      description: language === 'es'
        ? 'Experiencia única de alojamiento con servicio personalizado y diseño exclusivo'
        : 'Unique accommodation experience with personalized service and exclusive design',
      capacity: '2',
      price: language === 'es' ? 'Desde 100€/noche' : 'From 100€/night',
      rating: 5,
      amenities: [
        language === 'es' ? 'Desayuno incluido' : 'Breakfast included',
        language === 'es' ? 'Servicio de habitaciones' : 'Room service',
        'WiFi',
        language === 'es' ? 'Restaurante gourmet' : 'Gourmet restaurant'
      ],
      imageUrl: '/images/accommodation/hotel.jpg'
    }
  ];

  const commonAmenities = [
    {
      icon: <Wifi className="h-6 w-6" />,
      name: 'WiFi'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      name: language === 'es' ? 'Desayuno' : 'Breakfast'
    },
    {
      icon: <Car className="h-6 w-6" />,
      name: language === 'es' ? 'Parking gratuito' : 'Free parking'
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Alojamientos en Lubrín' : 'Accommodation in Lubrín'}
        description={language === 'es'
          ? 'Descubre nuestras opciones de alojamiento para una estancia inolvidable'
          : 'Discover our accommodation options for an unforgettable stay'}
        imageUrl="/images/accommodation.jpg"
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
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {accommodation.price}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(accommodation.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{accommodation.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium mb-2">
                      {language === 'es' ? 'Servicios incluidos:' : 'Included amenities:'}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {accommodation.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Check className="h-4 w-4 mr-2 text-green-500" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'es' ? 'Servicios Comunes' : 'Common Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commonAmenities.map((amenity, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-900 rounded-full mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold dark:text-white">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
            {language === 'es' ? 'Información de Reserva' : 'Booking Information'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>📞 +34 XXX XXX XXX</p>
                <p>✉️ reservas@lubrin.com</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {language === 'es' ? 'Políticas' : 'Policies'}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {language === 'es' ? 'Check-in: 14:00' : 'Check-in: 2:00 PM'}</li>
                <li>• {language === 'es' ? 'Check-out: 12:00' : 'Check-out: 12:00 PM'}</li>
                <li>• {language === 'es' ? 'Cancelación gratuita hasta 48h antes' : 'Free cancellation up to 48h before'}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
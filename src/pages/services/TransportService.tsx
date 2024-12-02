import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Car, Bus, Bike, MapPin, Clock, Shield } from 'lucide-react';
import SectionHero from '../../components/SectionHero';

export default function TransportService() {
  const { language } = useLanguage();

  const services = [
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Alquiler de Vehículos' : 'Vehicle Rental',
      description: language === 'es'
        ? 'Flota moderna de vehículos para explorar la región con total libertad'
        : 'Modern fleet of vehicles to explore the region with complete freedom',
      options: [
        {
          name: language === 'es' ? 'Coche Compacto' : 'Compact Car',
          price: '50€/día | day',
          features: [
            language === 'es' ? 'Ideal para parejas' : 'Ideal for couples',
            language === 'es' ? 'Bajo consumo' : 'Fuel efficient',
            'A/C'
          ]
        },
        {
          name: 'SUV',
          price: '70€/día | day',
          features: [
            language === 'es' ? 'Perfecto para familias' : 'Perfect for families',
            '4x4',
            language === 'es' ? 'Maletero amplio' : 'Large trunk'
          ]
        }
      ]
    },
    {
      icon: <Bus className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Servicio de Transfer' : 'Transfer Service',
      description: language === 'es'
        ? 'Traslados cómodos y puntuales desde y hacia el aeropuerto'
        : 'Comfortable and punctual transfers to and from the airport',
      options: [
        {
          name: language === 'es' ? 'Transfer Privado' : 'Private Transfer',
          price: '80€',
          features: [
            language === 'es' ? 'Servicio puerta a puerta' : 'Door-to-door service',
            language === 'es' ? 'Conductor profesional' : 'Professional driver',
            'WiFi'
          ]
        },
        {
          name: language === 'es' ? 'Transfer Compartido' : 'Shared Transfer',
          price: '40€',
          features: [
            language === 'es' ? 'Económico' : 'Economic',
            language === 'es' ? 'Horarios regulares' : 'Regular schedules',
            'A/C'
          ]
        }
      ]
    },
    {
      icon: <Bike className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Alquiler de Bicicletas' : 'Bike Rental',
      description: language === 'es'
        ? 'Bicicletas de montaña y eléctricas para explorar los senderos locales'
        : 'Mountain and electric bikes to explore local trails',
      options: [
        {
          name: language === 'es' ? 'Bicicleta de Montaña' : 'Mountain Bike',
          price: '25€/día | day',
          features: [
            language === 'es' ? 'Ideal para senderos' : 'Perfect for trails',
            language === 'es' ? 'Casco incluido' : 'Helmet included',
            language === 'es' ? 'Kit de reparación' : 'Repair kit'
          ]
        },
        {
          name: 'E-Bike',
          price: '40€/día | day',
          features: [
            language === 'es' ? 'Asistencia eléctrica' : 'Electric assistance',
            language === 'es' ? 'Gran autonomía' : 'Long range',
            language === 'es' ? 'Ideal para todos' : 'Suitable for everyone'
          ]
        }
      ]
    }
  ];

  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: language === 'es' ? 'Recogida y Entrega' : 'Pick-up & Drop-off',
      description: language === 'es'
        ? 'Servicio disponible en múltiples ubicaciones'
        : 'Service available at multiple locations'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: language === 'es' ? 'Disponibilidad 24/7' : '24/7 Availability',
      description: language === 'es'
        ? 'Servicio de atención permanente'
        : 'Permanent attention service'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: language === 'es' ? 'Seguro Incluido' : 'Insurance Included',
      description: language === 'es'
        ? 'Cobertura completa para tu tranquilidad'
        : 'Full coverage for your peace of mind'
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Servicios de Transporte' : 'Transport Services'}
        description={language === 'es'
          ? 'Soluciones de movilidad para explorar Lubrín y sus alrededores'
          : 'Mobility solutions to explore Lubrín and its surroundings'}
        imageUrl="/images/transport.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === 'es' ? 'Nuestros Servicios' : 'Our Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-4">
                    {service.options.map((option, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold dark:text-white">{option.name}</h4>
                          <span className="text-blue-600 font-medium">{option.price}</span>
                        </div>
                        <ul className="space-y-1">
                          {option.features.map((feature, j) => (
                            <li key={j} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <Shield className="h-4 w-4 mr-2 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === 'es' ? 'Características del Servicio' : 'Service Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="inline-block p-3 bg-blue-50 dark:bg-blue-900 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
            {language === 'es' ? 'Reservas y Contacto' : 'Bookings and Contact'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>📞 +34 XXX XXX XXX</p>
                <p>✉️ transport@lubrin.com</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {language === 'es' ? 'Horario de Atención' : 'Service Hours'}
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  {language === 'es' 
                    ? '• Lunes a Viernes: 08:00 - 20:00'
                    : '• Monday to Friday: 08:00 - 20:00'}
                </li>
                <li>
                  {language === 'es'
                    ? '• Sábados: 09:00 - 18:00'
                    : '• Saturdays: 09:00 - 18:00'}
                </li>
                <li>
                  {language === 'es'
                    ? '• Domingos: Cerrado (servicios pre-reservados disponibles)'
                    : '• Sundays: Closed (pre-booked services available)'}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
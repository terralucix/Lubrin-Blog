import { useLanguage } from '../../context/LanguageContext';
import { Store, Croissant, Building2, Clock, MapPin, Phone, Car, CarFront, Wallet, SprayCan, MailIcon, StoreIcon, Heart,Link2Icon, Briefcase, DoorOpen, Church, LucideHammer, PiggyBank, LucideStore, ShoppingBasketIcon, FuelIcon } from 'lucide-react';
import SectionHero from '../../components/SectionHero';
import Map from '../../components/Map';

export default function BasicServicesPage() {
  const { language } = useLanguage();

  const serviceCategories = [
    {
      icon: <Store className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Tiendas y Supermercados' : 'Shops and Supermarkets',
      services: [
        {
          name: 'Supermercado Supremo',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX'
        },

        {
          name: 'Supermercado Viky',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX'
        },
        {
          name: language === 'es' ? 'Tienda de Mari' : 'María\'s Grocery Store',
          schedule: language === 'es'
            ? 'Lunes a Sábado: 8:30 - 14:00, 17:00 - 20:00'
            : 'Monday to Saturday: 8:30 - 14:00, 17:00 - 20:00',
          address: 'Plaza Mayor, 5',
          phone: '+34 950 XXX XXX'
        },
        {
          name: 'Tienda',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX'
        },
        {
          name: 'Tienda',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX'
        },


       
      ]
    },


    {
      icon: <Croissant className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Panaderías' : 'Bakeries',
      services: [
        {
          name: language === 'es' ? 'Panadería Tradicional' : 'Traditional Bakery',
          schedule: language === 'es'
            ? 'Lunes a Domingo: 7:00 - 14:00'
            : 'Monday to Sunday: 7:00 - 14:00',
          address: 'Calle Horno, 3',
          phone: '+34 950 XXX XXX',
          description: language === 'es'
            ? 'Pan artesanal y dulces tradicionales'
            : 'Artisanal bread and traditional pastries'
        }
      ]
    },
    
    {
      icon: <PiggyBank className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Carnizeria' : '',
      services: [
        {
          name: language === 'es' ? 'Carnizeria' : 'Carnage',
          schedule: language === 'es'
            ? 'Lunes a Domingo: 7:00 - 14:00'
            : 'Monday to Sunday: 7:00 - 14:00',
          address: 'Calle Horno, 3',
          phone: '+34 950 XXX XXX',
          description: language === 'es'
            ? ''
            : ''
        }
      ]
    },

    {
      icon: <ShoppingBasketIcon className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Productos frescos elaborados' : 'Fresh processed products ',
      services: [
        {
          name: 'Almazara',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX'
        },

        {
          name: 'Miel Sierra de los Filabres',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX'
        },
        {
          name:  'Cooperativa los Filabres' ,
          schedule: language === 'es'
            ? 'Lunes a Sábado: 8:30 - 14:00, 17:00 - 20:00'
            : 'Monday to Saturday: 8:30 - 14:00, 17:00 - 20:00',
          address: 'Plaza Mayor, 5',
          phone: '+34 950 XXX XXX'
        },
        
       
       
      ]
    },

  
    {
      icon: <MailIcon className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Oficina de Correos' : 'Post Office',
      services: [
        {
          name: language === 'es' ? 'Oficina Rural de Correos' : 'Post Office',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00, 17:00 - 20:00\nSábado: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00, 17:00 - 20:00\nSaturday: 9:00 - 14:00',
          address: 'Avenida Principal, 8',
          phone: '+34 950 XXX XXX',
        }
        
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Servicios Sanitarios' : 'Health Services',
      services: [
        {
          name: language === 'es' ? 'Farmacia de Lubrín' : 'Lubrín Pharmacy',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00, 17:00 - 20:00\nSábado: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00, 17:00 - 20:00\nSaturday: 9:00 - 14:00',
          address: 'Avenida Principal, 8',
          phone: '+34 950 XXX XXX',
          emergency: language === 'es' ? 'Guardias según calendario' : 'On-duty according to schedule'
        },
        {
          name: language === 'es' ? 'Centro de Salud' : 'Health Center',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 8:00 - 15:00\nUrgencias: 24h'
            : 'Monday to Friday: 8:00 - 15:00\nEmergencies: 24h',
          address: 'Calle Salud, 1',
          phone: '+34 950 XXX XXX',
          emergency: '112'
        }
      ]
    },
    
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Ayuntamiento' : 'Town Hall',
      services: [
        {
          name: language === 'es' ? 'Ayuntamiento de Lubrín' : 'Lubrín Town Hall',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: 'https://www.lubrin.es',
          services: language === 'es'
            ? ['Registro Civil', 'Padrón Municipal', 'Servicios Sociales', 'Urbanismo']
            : ['Civil Registry', 'Municipal Census', 'Social Services', 'Urban Planning']
        },
        {
          name: language === 'es' ? 'Oficina de Turismo' : 'Turist Office',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: 'http://www.lubrin.es',
          services: language === 'es'
            ? ['Registro Civil', 'Padrón Municipal', 'Servicios Sociales', 'Urbanismo']
            : ['Civil Registry', 'Municipal Census', 'Social Services', 'Urban Planning']
        }
      ]
    },

  
   
    {
      icon: <SprayCan className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Peluqueria' : 'Hairdresser',
      services: [
        {
          name: language === 'es' ? 'Peluqueria' : 'Hairdresser',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['Peluqueria']
            : ['Hairdresser']
        }
      ]
    },
    {
      icon: <StoreIcon className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Estanco' : 'Estanco',
      services: [
        {
          name: language === 'es' ? 'Estanco' : 'tobacco shop',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        }
      ]
    },
    {
      icon: <DoorOpen className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Inmobiliarias' : 'Real State',
      services: [
        {
          name: language === 'es' ? 'Inmobiliarias' : '',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        },
        {
          name: language === 'es' ? 'Inmobiliarias' : '',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        }
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Gestoria' : 'Gestoria',
      services: [
        {
          name: language === 'es' ? 'Gestoria' : 'Gestoria',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        },
        {
          name: language === 'es' ? 'Gestoria' : 'Gestoria',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        }, 

      ]
    },
    {
      icon: <Wallet className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Banco' : 'Bank',
      services: [
        {
          name: language === 'es' ? 'Caja Mar' : 'Caja Mar',
          schedule: language === 'es'
          ? 'Lunes a Viernes: 8:30 - 14:00'
          : 'Monday to Friday: 8:30 - 14:00',
          address: 'C. Alvarez de Sotomayor, 13, 04271 Lubrín, Almería',
          phone: ' +34 950477035',
          web: 'https://www.grupocooperativocajamar.es',
          services: language === 'es'
            ? ['Banco']
            : ['Bank']
        },
        {
          name: language === 'es' ? 'Unicaja' : 'Unicaja',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:30 - 13:30'
            : 'Monday to Friday: 9:30 - 13:30',
          address:' C. Alvarez de Sotomayor, 17, 04271 Lubrín, Almería',
          phone: '+34 950477075',
          web: 'https://www.unicajabanco.es',
          services: language === 'es'
            ? ['Banco']
            : ['Bank']
        }
      ]
    },





    {
      icon: <CarFront className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Taller Mecanico' : 'Taller Mecanico',
      services: [
        {
          name: language === 'es' ? 'Taller Mecanico' : 'Taller Mecanico',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['Taller']
            : ['Taller']
        },

        {
          name: language === 'es' ? '' : '',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        }
      ]
    },
    {
      icon: <Church className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Funeraria' : 'Funeraria',
      services: [
        {
          name: language === 'es' ? 'Funeraria' : 'Funeraria',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        },

        {
          name: language === 'es' ? 'Tanatorio' : 'Funeral Home',
          schedule: language === 'es'
            ? 'Lunes a Viernes: 9:00 - 14:00'
            : 'Monday to Friday: 9:00 - 14:00',
          address: 'Plaza del Ayuntamiento, 1',
          phone: '+34 950 XXX XXX',
          web: '',
          services: language === 'es'
            ? ['']
            : ['']
        }
      ]

    
    },

    {
      icon: <FuelIcon className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Gasolinera' : 'station Fuel ',
      services: [
        {
          name: 'Gasolinera',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX'
        },

        {
          name: 'ADSG Ovino Caprino RUMIAL',
          schedule: language === 'es' 
            ? 'Lunes a Sábado: 9:00 - 20:00' 
            : 'Monday to Saturday: 9:00 - 20:00',
          address: 'Calle Principal, 12',
          phone: '+34 950 XXX XXX',
          web:''
        },
       
        
       
       
      ]
    },

    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: language === 'es' ? 'Transportes' : 'Transport',
      services: [
        {
          name: language === 'es' ? 'Taxi Lubrín' : 'Lubrín Taxi',
          schedule: language === 'es'
            ? 'Servicio 24 horas'
            : '24-hour service',
          phone: '+34 950 XXX XXX',
          description: language === 'es'
            ? 'Servicio de taxi local y traslados al aeropuerto'
            : 'Local taxi service and airport transfers',
          services: language === 'es'
            ? [
                'Servicio local',
                'Traslados al aeropuerto',
                'Excursiones',
                'Reserva anticipada disponible'
              ]
            : [
                'Local service',
                'Airport transfers',
                'Excursions',
                'Advance booking available'
              ]
        },
        {
          name: language === 'es' ? 'Autobuses ALSA' : 'ALSA Bus Service',
          schedule: language === 'es'
            ? 'Consultar horarios en la web'
            : 'Check schedules on website',
          web: 'https://www.alsa.es',
          description: language === 'es'
            ? 'Conexiones regulares con Almería y pueblos cercanos'
            : 'Regular connections with Almería and nearby towns',
          services: language === 'es'
            ? [
                'Línea Lubrín - Almería',
                'Conexiones con pueblos cercanos',
                'Venta de billetes online',
                'Parada principal: Plaza del Pueblo'
              ]
            : [
                'Lubrín - Almería line',
                'Connections with nearby towns',
                'Online ticket sales',
                'Main stop: Town Square'
              ]
        }
      ]
    }
  ];

  return (
    <div>
      <SectionHero
        title={language === 'es' ? 'Servicios Básicos' : 'Basic Services'}
        description={language === 'es'
          ? 'Información sobre los servicios esenciales disponibles en Lubrín'
          : 'Information about essential services available in Lubrín'}
        imageUrl="/images/servicios.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-12">
          {serviceCategories.map((category, index) => (
            <section key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold ml-3 dark:text-white">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 dark:text-white">{service.name}</h3>
                      
                      <div className="space-y-3">
                        {service.schedule && (
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-1 mr-3" />
                            <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                              {service.schedule}
                            </div>
                          </div>
                        )}
                        
                        {service.address && (
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-1 mr-3" />
                            <span className="text-gray-600 dark:text-gray-300">{service.address}</span>
                          </div>
                        )}
                        
                        {service.phone && (
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                            <span className="text-gray-600 dark:text-gray-300">{service.phone}</span>
                          </div>
                        )}

                        {service.description && (
                          <div className="mt-4 text-gray-600 dark:text-gray-300">
                            
                            {service.description}
                          </div>
                        )}

                         {service.web && (
                           
                          <div className="flex items-center">
                           <Link2Icon className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-3" />
                          <a href= {service.web} >
                            {service.web}
                          </a>
                            </div>
                          
                        )}

                        {service.emergency && (
                          <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                            <p className="text-red-700 dark:text-red-400 text-sm">
                              {language === 'es' ? 'Emergencias: ' : 'Emergency: '}
                              {service.emergency}
                            </p>
                          </div>
                        )}

                        {service.services && (
                          <div className="mt-4">
                            <h4 className="font-medium mb-2 dark:text-white">
                              {language === 'es' ? 'Servicios disponibles:' : 'Available services:'}
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                              {service.services.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
            {language === 'es' ? 'Ubicación de Servicios' : 'Services Location'}
          </h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <Map lat={37.2156} lng={-2.0678} zoom={16} />
          </div>
        </section>
      </div>
    </div>
  );
}
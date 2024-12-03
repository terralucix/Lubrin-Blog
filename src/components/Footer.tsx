import {  Linkedin, Facebook, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Map from './Map';
import TechLogosCarousel from './TechLogosCarousel';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  // Lubrín coordinates
  const LUBRIN_COORDS = {
    lat: 37.2156,
    lng: -2.0678
  };

  const getGoogleMapsUrl = () => {
    return `https://www.google.com/maps?q=${LUBRIN_COORDS.lat},${LUBRIN_COORDS.lng}`;
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4"> Lubrin Blog</h2>
         <p className="text-gray-600 mb-4">
              {t.footer.description}
            </p>
            <div className="space-y-4">
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <MapPin className="h-5 w-5 mr-2" />
                <span>
                  {language === 'es' ? 'Encuéntranos en Lubrín' : 'Find us in Lubrín'}
                </span>
              </a>
              <div className="w-full h-48 md:h-64">
                <Map
                  lat={LUBRIN_COORDS.lat}
                  lng={LUBRIN_COORDS.lng}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-gray-900">
                  {t.categories}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900">
                  {t.services}
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                {language === 'es' ? 'Enlaces Oficiales' : 'Official Links'}
              </h3>
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

              
          </div>
         
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              {t.footer.followUs}
            </h3>
            <div className="flex space-x-6">
             
              <a href="#" className="text-gray-600 hover:text-gray-900">
                < Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>


<div className="mt-8 border-t border-gray-200 pt-8">  <TechLogosCarousel /></div>
       
         
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ItemCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  details?: {
    label: string;
    value: string;
  }[];
  googleMapsUrl?: string;
  websiteUrl?: string;
}

export default function ItemCard({ title, description, imageUrl, link, details,googleMapsUrl,
  websiteUrl  }: ItemCardProps) {
    const CardContent = () => (
      <>
        {imageUrl && (
          <div className="h-48">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          {details && (
            <div className="space-y-2 mb-4">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center text-sm">
                  <span className="font-medium text-gray-900">{detail.label}:</span>
                  <span className="ml-2 text-gray-600">{detail.value}</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-4 mt-4">
            {googleMapsUrl && (
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-1" />
                Ver en Google Maps
              </a>
            )}
            {websiteUrl && (
              <a 
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Globe className="w-4 h-4 mr-1" />
                Sitio Web Oficial
              </a>
            )}
          </div>
        </div>
      </>
    );
  
    if (link) {
      return (
        <Link to={link} className="block group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <CardContent />
          </div>
        </Link>
      );
    }
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <CardContent />
      </div>
    );
  };
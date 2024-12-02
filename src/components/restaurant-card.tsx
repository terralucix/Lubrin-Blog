import { MapPin } from 'lucide-react';

const RestaurantCard = ({ title, description, imageUrl, details, mapUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="h-48 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="space-y-2">
          {details.map((detail, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400">{detail.label}:</span>
              <span className="text-gray-900 dark:text-gray-100">{detail.value}</span>
            </div>
          ))}
          {mapUrl && (
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <MapPin className="w-4 h-4 mr-2" />
              <span>{title}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

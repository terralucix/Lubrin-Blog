import { useState } from 'react';
import { Maximize2 } from 'lucide-react';

const ImageGalleryCulture = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: 'El Castillo', size: 'large', src: '/images/Lubrin-Feb-2012.jpg' },
    { id: 2, title: 'Iglesia Ntra. Sra Del Rosario', size: 'vertical', src: '/images/Iglesia.jpg' },
    { id: 3, title: 'Lubrin', size: 'small', src: '/images/lubrin-noche.jpg' },
    { id: 4, title: 'Centro de Interpretacion', size: 'small', src: '/images/museo.jpg' },
    { id: 5, title: 'Noria Museo', size: 'horizontal', src: '/images/museo2.jpg' },
    { id: 6, title: 'Escultura Marmol San Sebastian', size: 'small', src: '/images/lubrin8.jpg' },
    { id: 7, title: 'Plaza San Sebastian', size: 'vertical', src: '/images/lubrin7.jpg' },
    { id: 8, title: 'Iglesia Ntra. Sra Del Rosario', size: 'horizontal', src: '/images/lubrin2.jpg' },
    { id: 9, title: 'Lavadero', size: 'small', src: '/images/lubrin-lavadero1.jpg' },
    { id: 10, title: 'Lavadero', size: 'large', src: '/images/lubrin-lavadero.jpg' },
    { id: 11, title: 'Plaza de la Constitucion', size: 'small', src: '/images/lubrin10.jpg' },
    { id: 12, title: 'Calle de la Iglesia', size: 'small', src: '/images/iglesia8.png' },
  ];

  const getImageSize = (size) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'vertical': return 'row-span-2';
      case 'horizontal': return 'col-span-2';
      default: return '';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative group overflow-hidden rounded-lg bg-gray-100 ${getImageSize(image.size)}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(image)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100"
                aria-label="Ver imagen"
              >
                <Maximize2 size={20} />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-sm font-medium truncate">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] w-full relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-white text-lg font-medium">
                {selectedImage.title}
              </h2>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryCulture;
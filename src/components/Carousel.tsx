import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselImage {
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  className?: string;
}

export default function Carousel({ images, className = '' }: CarouselProps) {
  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[16/9]">
              <img
                src={image.url}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {(image.title || image.description) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  {image.title && (
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-sm md:text-base">{image.description}</p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
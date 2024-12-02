import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TechLogosCarousel() {
  const { language } = useLanguage();

  const logos = [
    {
      src: "/images/vercel.jpg",
      alt: "Vercel",
      href: "https://vercel.com"
    },
    {
      src: "https://raw.githubusercontent.com/facebook/react/main/fixtures/dom/public/react-logo.svg",
      alt: "React",
      href: "https://reactjs.org"
    },
    {
      src: "/images/astro-icon-light-gradient.svg",
      alt: "Astro",
      href: "https://astro.build"
    },
    {
      src: "/images/tailwind.svg",
      alt: "Tailwind CSS",
      href: "https://tailwindcss.com"
    },
    {
      src: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
      alt: "Gemini AI",
      href: "https://deepmind.google/technologies/gemini/"
    }
  ];

  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-300 mb-6">
          {language === 'es' ? 'Desarrollado con' : 'Powered by'}
        </p>
        <div className="flex justify-center items-center space-x-8 overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {logos.map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
      src: "/images/typescript.png",
      alt: "TypeScript",
      href: "https://www.typescriptlang.org/docs/"
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
    },
      {
      src: "/images/developer.png",
      alt: "Developer",
      href: "https://juana-developer.vercel.app/"
    },
    {
      src: "/images/photo.png",
      alt: "Imagen destacada",
      href: "https://www.flickr.com/photos/dleiva/28548890671/in/photolist-KuLwyX-g9WTk-5kTxPM-JJ9N8A-4rpk7e-FJtUV6-4rtqa7-b1J5Fn-dNKjxQ-2pbCkpn-8rAHVZ-CN3ivM-4dFoQi-2ipZoJn-4f6v1K-8Eeb5s-VWJ9zN-4fauoJ-8Eeo5S-89qkHg-89tAkE-89tznb-c2gbRQ-DijFZf-89qiva-89tyHd-25QmcNr-8Ee8Ty-89qGQg-Dz2N2q-89maKP-4faujm-89qkLM-4fauqf-4dFB2K-DBaXPT-4f6vaP-4rRbe1-89qjqr-8Eerxy-CMVT79-89qkCz-8EbepK-4f6uX4-8EbdAD-DijL7J-89u1QY-4r95P5-4r95P7-8Eb2rV"
    },
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
                  className="h-8 md:h-12 lg:h-8 w-auto object-contain"
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

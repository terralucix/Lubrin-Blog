import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SectionHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function SectionHero({ title, description, imageUrl }: SectionHeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] mb-12">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-white/90 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
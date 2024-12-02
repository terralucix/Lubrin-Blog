import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FeaturedCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export default function FeaturedCard({ title, description, imageUrl, link, tags }: FeaturedCardProps) {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <Link
          to={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
        >
          <span className="mr-2">
            {language === 'es' ? 'Saber más' : 'Learn More'}
          </span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
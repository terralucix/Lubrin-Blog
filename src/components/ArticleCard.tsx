import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export default function ArticleCard({ title, description, url, image }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link to={url}>
        <div className="h-48 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
            {title}
          </h3>
        </div>
      </Link>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={url}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          {title} →
        </Link>
      </div>
    </div>
  );
}
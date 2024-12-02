import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={category.link || `/category/${category.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        <div className="h-48 relative">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
            {category.name}
          </h2>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">{category.description}</p>
          <div className="space-y-4">
            {category.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="ml-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
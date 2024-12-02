import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/post/${post.id}`}>
        <img
          className="w-full h-48 object-cover"
          src={post.imageUrl}
          alt={post.title}
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {format(new Date(post.date), 'MMM d, yyyy', {
              locale: language === 'es' ? es : undefined
            })}
          </span>
        </div>
        <Link to={`/post/${post.id}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <Link
            to={`/category/${post.category.toLowerCase()}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {post.category}
          </Link>
          <Link
            to={`/post/${post.id}`}
            className="text-sm font-medium text-gray-900 hover:text-blue-600"
          >
            {t.readMore} →
          </Link>
        </div>
      </div>
    </article>
  );
}
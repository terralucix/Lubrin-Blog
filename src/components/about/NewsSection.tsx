import { Newspaper, Calendar, Link as LinkIcon } from 'lucide-react';
import { NewsItem } from '../../types/news';
import { useLanguage } from '../../context/LanguageContext';

interface NewsSectionProps {
  news: NewsItem[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  const { language } = useLanguage();

  const getSourceUrl = (source: string): string => {
    const sources: Record<string, string> = {
      'Diario de Almería': 'https://www.diariodealmeria.es',
      'Noticias de Almería': 'https://www.noticiasdealmeria.com',
      'La Voz de Almería': 'https://www.lavozdealmeria.com',
      'Almería Daily': 'https://www.diariodealmeria.es/english',
      'Almería News': 'https://www.noticiasdealmeria.com/english',
      'The Voice of Almería': 'https://www.lavozdealmeria.com/english'
    };
    return sources[source] || '#';
  };

  if (!news.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Newspaper className="h-8 w-8 mr-3 text-blue-600" />
        {language === 'es' ? 'Últimas Noticias' : 'Latest News'}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {item.imageUrl && (
              <div className="h-48 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.summary}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                {item.source && (
                  <a
                    href={getSourceUrl(item.source)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <LinkIcon className="h-4 w-4 mr-2" />
                    <span>{item.source}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
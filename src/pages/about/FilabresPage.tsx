import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Loader } from 'lucide-react';
import FilabresHero from '../../components/about/FilabresHero';
import NewsSection from '../../components/about/NewsSection';
import ErrorMessage from '../../components/about/ErrorMessage';
import { NewsItem } from '../../types/news';
import { GeminiService } from '../../services/gemini';

export default function FilabresPage() {
  const { language } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!API_KEY) {
        setLoading(false);
        return;
      }

      try {
        const gemini = new GeminiService(API_KEY);
        const newsContent = await gemini.generateNews(language);
        setNews(newsContent);
        setError(null);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError(language === 'es' 
          ? 'Error al cargar las noticias.'
          : 'Error loading news.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">
            {language === 'es'
              ? 'Cargando contenido por... Gemini Google'
              : 'Loading content by ... Gemini Google'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <FilabresHero />
     

      {error && (
        <div className="mb-8">
          <ErrorMessage message={error} type="warning" />
        </div>
      )}

      <NewsSection news={news} />
    </div>
  );
}

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FilabresContent as FilabresContentType } from '../../types/filabres';

interface Props {
  content: FilabresContentType;
}

export default function FilabresContent({ content }: Props) {
  const { language } = useLanguage();

  return (
    <div className="prose dark:prose-invert max-w-none">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          {language === 'es' ? 'Introducción' : 'Introduction'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {content.introduction}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          {language === 'es' ? 'Geografía' : 'Geography'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {content.geography}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          {language === 'es' ? 'Clima' : 'Climate'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {content.climate}
        </p>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'es' ? 'Flora Local' : 'Local Flora'}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {content.flora.map((species, index) => (
                <li key={index} className="leading-relaxed">{species}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'es' ? 'Fauna Local' : 'Local Fauna'}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {content.fauna.map((species, index) => (
                <li key={index} className="leading-relaxed">{species}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          {language === 'es' ? 'Pueblos de la Comarca' : 'Villages of the Region'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.villages.map((village, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{village.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {village.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
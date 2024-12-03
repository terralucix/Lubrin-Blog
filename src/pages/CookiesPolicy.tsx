import { useLanguage } from '../context/LanguageContext';
import { Shield, Lock, Cookie } from 'lucide-react';

export default function CookiesPolicy() {
  const { language } = useLanguage();

  const sections = {
    es: [
      {
        icon: <Cookie className="h-8 w-8 text-blue-600" />,
        title: '¿Qué son las cookies?',
        content: 'Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo para almacenar información sobre tus preferencias, mejorar tu experiencia de usuario y recopilar datos analíticos.'
      },
      {
        icon: <Shield className="h-8 w-8 text-blue-600" />,
        title: 'Tipos de cookies que utilizamos',
        content: `• Cookies esenciales: Necesarias para el funcionamiento del sitio
• Cookies analíticas: Para analizar el uso del sitio y mejorar nuestros servicios
• Cookies de preferencias: Recuerdan tus preferencias y configuraciones`
      },
      {
        icon: <Lock className="h-8 w-8 text-blue-600" />,
        title: 'Control de cookies',
        content: 'Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para que no las acepten.'
      }
    ],
    en: [
      {
        icon: <Cookie className="h-8 w-8 text-blue-600" />,
        title: 'What are cookies?',
        content: 'Cookies are small text files that websites place on your device to store information about your preferences, enhance your user experience, and collect analytical data.'
      },
      {
        icon: <Shield className="h-8 w-8 text-blue-600" />,
        title: 'Types of cookies we use',
        content: `• Essential cookies: Necessary for site functionality
• Analytical cookies: To analyze site usage and improve our services
• Preference cookies: Remember your preferences and settings`
      },
      {
        icon: <Lock className="h-8 w-8 text-blue-600" />,
        title: 'Cookie control',
        content: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed.'
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {language === 'es' ? 'Política de Cookies' : 'Cookies Policy'}
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'es'
            ? 'Esta política explica cómo utilizamos las cookies y tecnologías similares en nuestro sitio web.'
            : 'This policy explains how we use cookies and similar technologies on our website.'}
        </p>

        <div className="space-y-12">
          {sections[language].map((section, index) => (
            <section key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold dark:text-white">{section.title}</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            {language === 'es' ? 'Más información' : 'More information'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {language === 'es'
              ? 'Para cualquier pregunta sobre nuestra política de cookies, por favor contáctanos en:'
              : 'For any questions about our cookies policy, please contact us at:'}
          </p>
          <p className="text-blue-600 dark:text-blue-400 mt-2">privacy@lubrin.blog</p>
        </section>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          {language === 'es'
            ? 'Última actualización: Marzo 2024'
            : 'Last updated: March 2024'}
        </div>
      </div>
    </div>
  );
}
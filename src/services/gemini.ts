import { GoogleGenerativeAI } from '@google/generative-ai';
import { NewsItem } from '../types/news';

export class GeminiService {
  private model;

  constructor(apiKey: string) {
    const genAI = new GoogleGenerativeAI(apiKey);
    this.model = genAI.getGenerativeModel({ model: "gemini-pro" });
  }

  async generateNews(language: 'es' | 'en'): Promise<NewsItem[]> {
    const prompt = language === 'es' 
      ? `Genera 3 noticias ficticias pero realistas sobre Lubrín o la Comarca de los Filabres. Formato JSON:
        {
          "news": [
            {
              "title": "Título de la noticia",
              "summary": "Resumen detallado (2-3 frases)",
              "date": "Fecha reciente en 2024",
              "source": "Nombre del medio local",
              "imageUrl": "URL de imagen de Unsplash que represente la noticia"
            }
          ]
        }
        
        Las noticias deben ser positivas y relacionadas con cultura, turismo o desarrollo local.
        Usa estas URLs de Unsplash para las imágenes:
        - https://images.unsplash.com/photo-1514668899050-f91140ee495b
        - https://images.unsplash.com/photo-1551632811-561732d1e306
        - https://images.unsplash.com/photo-1493246507139-91e8fad9978e`
      : `Generate 3 fictional but realistic news about Lubrín or Comarca de los Filabres. JSON format:
        {
          "news": [
            {
              "title": "News title",
              "summary": "Detailed summary (2-3 sentences)",
              "date": "Recent date in 2024",
              "source": "Local media name",
              "imageUrl": "Unsplash image URL that represents the news"
            }
          ]
        }
        
        News should be positive and related to culture, tourism or local development.
        Use these Unsplash URLs for images:
        - https://images.unsplash.com/photo-1514668899050-f91140ee495b
        - https://images.unsplash.com/photo-1551632811-561732d1e306
        - https://images.unsplash.com/photo-1493246507139-91e8fad9978e`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const cleanText = response.text().replace(/```json|```/g, '').trim();
      
      try {
        const data = JSON.parse(cleanText);
        return data.news || this.getFallbackNews(language);
      } catch (parseError) {
        console.error('Error parsing news JSON:', parseError);
        return this.getFallbackNews(language);
      }
    } catch (error) {
      console.error('Error generating news:', error);
      return this.getFallbackNews(language);
    }
  }

  private getFallbackNews(language: 'es' | 'en'): NewsItem[] {
    return language === 'es' ? [
      {
        title: 'Festival Cultural de la Sierra de los Filabres',
        summary: 'La comarca celebrará su tradicional festival cultural con música, gastronomía y artesanía local. El evento busca promover las tradiciones y el turismo en la región.',
        date: '15 marzo 2024',
        source: 'Diario de Almería',
        imageUrl: 'https://images.unsplash.com/photo-1514668899050-f91140ee495b'
      },
      {
        title: 'Nuevo Proyecto de Turismo Sostenible',
        summary: 'Lubrín lidera una iniciativa para desarrollar rutas turísticas sostenibles en la Sierra de los Filabres. El proyecto incluye la señalización de senderos y la creación de puntos de información.',
        date: '10 marzo 2024',
        source: 'Noticias de Almería',
        imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306'
      },
      {
        title: 'Éxito en la Feria del Aceite',
        summary: 'La primera Feria del Aceite de Lubrín supera todas las expectativas con más de 1000 visitantes. Los productores locales presentaron sus mejores aceites de oliva virgen extra.',
        date: '5 marzo 2024',
        source: 'La Voz de Almería',
        imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e'
      }
    ] : [
      {
        title: 'Cultural Festival of Sierra de los Filabres',
        summary: 'The region will celebrate its traditional cultural festival featuring music, gastronomy, and local crafts. The event aims to promote traditions and tourism in the region.',
        date: 'March 15, 2024',
        source: 'Almería Daily',
        imageUrl: 'https://images.unsplash.com/photo-1514668899050-f91140ee495b'
      },
      {
        title: 'New Sustainable Tourism Project',
        summary: 'Lubrín leads an initiative to develop sustainable tourist routes in Sierra de los Filabres. The project includes trail signage and the creation of information points.',
        date: 'March 10, 2024',
        source: 'Almería News',
        imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306'
      },
      {
        title: 'Success at the Olive Oil Fair',
        summary: 'The first Lubrín Olive Oil Fair exceeds all expectations with over 1000 visitors. Local producers presented their best extra virgin olive oils.',
        date: 'March 5, 2024',
        source: 'The Voice of Almería',
        imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e'
      }
    ];
  }
}
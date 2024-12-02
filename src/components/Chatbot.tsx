import React, { useState, useEffect } from 'react';
import { Send, Trash2, X } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useLanguage } from '../context/LanguageContext';

interface ChatbotProps {
  onClose: () => void;
}

interface Message {
  text: string;
  isBot: boolean;
  timestamp: string;
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages 
      ? JSON.parse(savedMessages)
      : [{
          text: language === 'es' 
            ? "¡Hola! Soy el asistente virtual de Lubrín. Puedo ayudarte con información sobre nuestra región, actividades, servicios turísticos y más. ¿Qué te gustaría saber?"
            : "Hi! I'm Lubrín's virtual assistant. I can help you with information about our region, activities, tourist services, and more. What would you like to know?",
          isBot: true,
          timestamp: new Date().toISOString()
        }];
  });
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const getWebsiteContext = () => {
    return language === 'es' ? `
      Contexto sobre Lubrín:
      - Ubicación: Lubrín está ubicado en la Sierra de los Filabres, Almería, España
      - Principales atracciones: Monumentos históricos, arquitectura tradicional, paisajes naturales
      - Actividades: Rutas de senderismo, tours culturales, experiencias gastronómicas
      - Servicios: Guías turísticos, alojamiento, transporte
      - Productos locales: Aceite de oliva, almendras, artesanía
      - Eventos culturales: Fiestas locales, celebraciones tradicionales
      - Clima: Mediterráneo con más de 300 días de sol
      
      Secciones de información disponibles:
      - Sobre la región: Geografía, clima, flora y fauna
      - Patrimonio cultural: Iglesia de Nuestra Señora del Rosario, edificios históricos
      - Vida local: Actividades diarias, mercados, espacios comunitarios
      - Servicios turísticos: Visitas guiadas, opciones de alojamiento, transporte
      - Gastronomía: Platos tradicionales, productos locales, restaurantes
      - Rutas y senderos: Caminos de senderismo, rutas culturales, paisajes naturales
      
      Por favor, proporciona información precisa basada en este contexto y guía a los usuarios a las secciones relevantes del sitio web.
      
      IMPORTANTE: Responde siempre en español cuando el usuario escriba en español.
    ` : `
      Context about Lubrín:
      - Location: Lubrín is located in the Sierra de los Filabres, Almería, Spain
      - Main attractions: Historical monuments, traditional architecture, natural landscapes
      - Activities: Hiking trails, cultural tours, gastronomy experiences
      - Services: Tour guides, accommodation, transport
      - Local products: Olive oil, almonds, traditional crafts
      - Cultural events: Local festivals, traditional celebrations
      - Climate: Mediterranean with over 300 days of sunshine
      
      Available information sections:
      - About the region: Geography, climate, flora and fauna
      - Cultural heritage: Church of Our Lady of the Rosary, historical buildings
      - Local life: Daily activities, markets, community spaces
      - Tourist services: Guided tours, accommodation options, transport
      - Gastronomy: Traditional dishes, local products, restaurants
      - Routes and trails: Hiking paths, cultural routes, natural landscapes
      
      Please provide accurate information based on this context and guide users to the relevant sections of the website.
      
      IMPORTANT: Always respond in English when the user writes in English.
    `;
  };

  const generateGeminiResponse = async (prompt: string) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const websiteContext = getWebsiteContext();
    const fullPrompt = `
      ${websiteContext}
      
      User query: ${prompt}
      
      Please provide a helpful response based on the website's content. If referring to specific sections or pages, mention how to find them on the website. Keep responses concise but informative.
      
      IMPORTANT: Detect the language of the user's query and respond in the same language (Spanish or English).
    `;

    try {
      const result = await model.generateContent(fullPrompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      throw error;
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { 
      text: inputValue, 
      isBot: false,
      timestamp: new Date().toISOString()
    }];
    
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    try {
      const botResponse = await generateGeminiResponse(inputValue);
      setMessages([...newMessages, { 
        text: botResponse, 
        isBot: true,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      setMessages([...newMessages, { 
        text: language === 'es'
          ? "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo."
          : "Sorry, there was an error processing your message. Please try again.", 
        isBot: true,
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearHistory = () => {
    const initialMessage = [{ 
      text: language === 'es'
        ? "¡Hola! Soy el asistente virtual de Lubrín. Puedo ayudarte con información sobre nuestra región, actividades, servicios turísticos y más. ¿Qué te gustaría saber?"
        : "Hi! I'm Lubrín's virtual assistant. I can help you with information about our region, activities, tourist services, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date().toISOString()
    }];
    setMessages(initialMessage);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-800 sm:inset-auto sm:top-20 sm:right-4 sm:w-96 sm:h-[600px] sm:rounded-lg sm:shadow-lg">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-blue-600 p-4 text-white sm:rounded-t-lg">
        <div>
          <h3 className="font-semibold">
            {language === 'es' ? 'Asistente Virtual de Lubrín' : 'Lubrín Virtual Assistant'}
          </h3>
          <p className="text-xs opacity-75">Powered by Gemini</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={clearHistory}
            className="text-white hover:text-gray-200 focus:outline-none"
            title={language === 'es' ? 'Limpiar historial' : 'Clear history'}
          >
            <Trash2 size={20} />
          </button>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none"
            title={language === 'es' ? 'Cerrar' : 'Close'}
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] ${message.isBot ? 'mr-auto' : 'ml-auto'}`}>
              <div
                className={`p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <div className="whitespace-pre-wrap break-words">{message.text}</div>
              </div>
              <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
                message.isBot ? 'text-left' : 'text-right'
              }`}>
                {formatTimestamp(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg">
              {language === 'es' ? 'Escribiendo...' : 'Typing...'}
            </div>
          </div>
        )}
      </div>
      
      <div className="sticky bottom-0 border-t dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        <div className="flex space-x-2">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
            rows={3}
            className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 self-end"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
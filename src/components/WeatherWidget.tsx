import { useEffect, useState } from 'react';
import { Cloud, CloudRain, Sun, Loader, Thermometer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WeatherData {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
    temp: number;
  };
  weather: [{
    main: string;
    description: string;
  }];
}

interface DailyForecast {
  dt: number;
  temp_min: number;
  temp_max: number;
  weather: {
    main: string;
    description: string;
  };
}

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  const API = {
    URL: 'https://api.openweathermap.org/data/2.5/',
    KEY: '07bdb9ca0babeaa8c4392c2bc0e67fc6'
  };

  const LAT = 37.2156;
  const LON = -2.0678;

  useEffect(() => {
    const processForecasts = (forecasts: WeatherData[]): DailyForecast[] => {
      const dailyData: { [key: string]: WeatherData[] } = {};
      
      forecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        if (!dailyData[date]) {
          dailyData[date] = [];
        }
        dailyData[date].push(forecast);
      });

      return Object.values(dailyData).map(dayForecasts => {
        const temps = dayForecasts.map(f => f.main.temp);
        const firstForecast = dayForecasts[0];

        return {
          dt: firstForecast.dt,
          temp_min: Math.min(...temps),
          temp_max: Math.max(...temps),
          weather: {
            main: firstForecast.weather[0].main,
            description: firstForecast.weather[0].description
          }
        };
      }).slice(0, 3);
    };

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${API.URL}forecast?lat=${LAT}&lon=${LON}&units=metric&cnt=40&appid=${API.KEY}&lang=${language}`
        );
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }

        const data = await response.json();
        
        if (!data.list || !Array.isArray(data.list)) {
          throw new Error('Invalid data format from API');
        }

        const processedData = processForecasts(data.list);
        setWeatherData(processedData);
        setLoading(false);
      } catch (err) {
        console.error('Weather API Error:', err);
        setError(err instanceof Error ? err.message : 'Error fetching weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, [language]);

  const getWeatherIcon = (weatherMain: string = '') => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return <Sun className="h-12 w-12 md:h-16 md:w-16 text-yellow-500" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="h-12 w-12 md:h-16 md:w-16 text-blue-500" />;
      default:
        return <Cloud className="h-12 w-12 md:h-16 md:w-16 text-gray-500" />;
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat(language === 'es' ? 'es-ES' : 'en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center items-center p-6">
          <Loader className="h-8 w-8 animate-spin text-gray-600" />
        </div>
      </div>
    );
  }

  if (error || !weatherData.length) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center p-6 text-red-600 text-lg">
          {language === 'es' ? 'Error al cargar el clima' : 'Error loading weather'}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
        {language === 'es' ? 'Pronóstico del Tiempo - Lubrín' : 'Weather Forecast - Lubrín'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherData.map((day) => (
          <div key={day.dt} className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-lg md:text-xl font-medium mb-4">{formatDate(day.dt)}</p>
            <div className="flex justify-center mb-4">
              {getWeatherIcon(day.weather?.main)}
            </div>
            <p className="text-base md:text-lg text-gray-600 capitalize mb-4">
              {day.weather?.description || ''}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-3">
                <Thermometer className="h-6 w-6 text-red-500" />
                <span className="text-lg md:text-xl font-medium text-red-600">
                  {language === 'es' ? 'Máx: ' : 'Max: '}{Math.round(day.temp_max)}°C
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Thermometer className="h-6 w-6 text-blue-500" />
                <span className="text-lg md:text-xl text-blue-600">
                  {language === 'es' ? 'Mín: ' : 'Min: '}{Math.round(day.temp_min)}°C
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
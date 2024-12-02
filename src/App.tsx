import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import About from './pages/About';
import Services from './pages/Services';
import PostDetail from './pages/PostDetail';
import GastronomyPage from './pages/GastronomyPage';

import TouristRoutesPage from './pages/TouristRoutesPage';
import RouteDetailPage from './pages/routes/RouteDetailPage';
import RegionPage from './pages/about/RegionPage';
import CulturePage from './pages/about/CulturePage';
import LocalLifePage from './pages/about/LocalLifePage';
import FilabresPage from './pages/about/FilabresPage';

import TourGuideService from './pages/services/TourGuideService';
import AccommodationService from './pages/services/AccommodationService';
import BasicServicesPage from './pages/services/BasicServicesPage';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors relative">
            <div 
              className="fixed inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("/images/lubrin-sunset.jpg")',
                opacity: '0.5'
              }}
            />
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/tour-guide" element={<TourGuideService />} />
                  <Route path="/services/accommodation" element={<AccommodationService />} />
                  <Route path="/services/basic-services" element={<BasicServicesPage />} />
                 
                  <Route path="/post/:id" element={<PostDetail />} />
                  <Route path="/gastronomy" element={<GastronomyPage />} />
                  
                  <Route path="/routes" element={<TouristRoutesPage />} />
                  <Route path="/routes/:id" element={<RouteDetailPage />} />
                  <Route path="/about/region" element={<RegionPage />} />
                  <Route path="/about/culture" element={<CulturePage />} />
                  <Route path="/about/local-life" element={<LocalLifePage />} />
                  <Route path="/about/filabres" element={<FilabresPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
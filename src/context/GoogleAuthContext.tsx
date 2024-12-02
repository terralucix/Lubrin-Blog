import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleCalendarService } from '../services/googleCalendar';

interface GoogleAuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  calendarService: GoogleCalendarService | null;
}

const GoogleAuthContext = createContext<GoogleAuthContextType | undefined>(undefined);

export function GoogleAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [calendarService, setCalendarService] = useState<GoogleCalendarService | null>(null);

  useEffect(() => {
    const service = new GoogleCalendarService();
    setCalendarService(service);
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      if (calendarService) {
        await calendarService.authorize(response.access_token);
        setIsAuthenticated(true);
      }
    },
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
  });

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <GoogleAuthContext.Provider value={{ isAuthenticated, login, logout, calendarService }}>
      {children}
    </GoogleAuthContext.Provider>
  );
}

export function useGoogleAuth() {
  const context = useContext(GoogleAuthContext);
  if (context === undefined) {
    throw new Error('useGoogleAuth must be used within a GoogleAuthProvider');
  }
  return context;
}
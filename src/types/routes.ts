export interface Route {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  difficulty: string;
  duration: string;
  distance: string;
  startPoint: string;
  endPoint: string;
  highlights: string[];
  recommendations: string[];
  seasons: {
    spring: boolean;
    summer: boolean;
    autumn: boolean;
    winter: boolean;
  };
  type: 'cultural' | 'hiking' | 'cycling';
  wikiloc?: string;
}

export interface RouteCardProps {
  route: Route;
  showDetails?: boolean;
}
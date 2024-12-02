export const generateMetaTags = (
  title: string,
  description: string,
  image: string = '/images/lubrin-sunset.jpg',
  url: string = window.location.href
) => {
  // Update document title
  document.title = `${title} | Lubrín Blog`;

  // Base URL for canonical and alternate links
  const baseUrl = 'https://lubrin.blog';

  // Update meta tags
  const metaTags = {
    'description': description,
    'og:title': title,
    'og:description': description,
    'og:image': `${baseUrl}${image}`,
    'og:url': url.startsWith('http') ? url : `${baseUrl}${url}`,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': `${baseUrl}${image}`,
    'twitter:url': url.startsWith('http') ? url : `${baseUrl}${url}`
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    // Update existing meta tags
    let meta = document.querySelector(`meta[property="${name}"]`) ||
               document.querySelector(`meta[name="${name}"]`);
    
    if (meta) {
      meta.setAttribute('content', content);
    }
  });

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url.startsWith('http') ? url : `${baseUrl}${url}`);
  }
};
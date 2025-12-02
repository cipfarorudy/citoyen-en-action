import { useEffect } from 'react';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
}

// Composant SEO minimal – ajuste title & meta description dynamiquement
const Seo: React.FC<SeoProps> = ({ title, description, image }) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Citoyen en Action Guadeloupe`;
    }
    const setMeta = (name: string, content?: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', description);
    // Open Graph basique
    const setOg = (property: string, content?: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    if (title) setOg('og:title', title);
    if (description) setOg('og:description', description);
    if (image) setOg('og:image', image);
  }, [title, description, image]);
  return null;
};

export default Seo;

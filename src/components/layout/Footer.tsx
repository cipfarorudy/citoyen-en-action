import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L1 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-11-5z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Citoyen en Action</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Ensemble, nous créons une société plus juste, plus durable et plus solidaire. 
              Rejoignez le mouvement pour un changement positif dans nos communautés.
            </p>
            <div className="flex space-x-4">
              {/* Réseaux sociaux */}
              <a 
                href="https://www.facebook.com/rudyfaro" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook Rudy FARO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/rudyfaro" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter @rudyfaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/rudyfaro" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Rudy FARO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a 
                href="https://wa.me/590690570846?text=Bonjour, je souhaite rejoindre le groupe Débat citoyen" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Groupe WhatsApp Débat citoyen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@farorudy" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok @farorudy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@rudyfaro" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube Rudy FARO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/rudyfaro" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram @rudyfaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 5.51.131 4.572.33 3.789.624a5.705 5.705 0 0 0-2.066 1.346A5.704 5.704 0 0 0 .377 3.936c-.294.783-.493 1.721-.576 3.252C-.035 7.989-.022 8.396-.022 12.017s-.013 4.028.048 4.976c.083 1.531.282 2.469.576 3.252a5.704 5.704 0 0 0 1.346 2.066 5.704 5.704 0 0 0 2.066 1.346c.783.294 1.721.493 3.252.576.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c1.531-.083 2.469-.282 3.252-.576a5.705 5.705 0 0 0 2.066-1.346 5.704 5.704 0 0 0 1.346-2.066c.294-.783.493-1.721.576-3.252.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.083-1.531-.282-2.469-.576-3.252a5.704 5.704 0 0 0-1.346-2.066A5.704 5.704 0 0 0 20.225.624c-.783-.294-1.721-.493-3.252-.576C16.025.013 15.618 0 12.017 0zm0 2.17c3.586 0 4.012.014 5.426.082 1.31.06 2.02.275 2.495.458a4.17 4.17 0 0 1 1.54 1.001 4.17 4.17 0 0 1 1.001 1.54c.183.476.398 1.186.458 2.495.068 1.414.082 1.84.082 5.426s-.014 4.012-.082 5.426c-.06 1.31-.275 2.02-.458 2.495a4.17 4.17 0 0 1-1.001 1.54 4.17 4.17 0 0 1-1.54 1.001c-.476.183-1.186.398-2.495.458-1.414.068-1.84.082-5.426.082s-4.012-.014-5.426-.082c-1.31-.06-2.02-.275-2.495-.458a4.17 4.17 0 0 1-1.54-1.001 4.17 4.17 0 0 1-1.001-1.54c-.183-.476-.398-1.186-.458-2.495-.068-1.414-.082-1.84-.082-5.426s.014-4.012.082-5.426c.06-1.31.275-2.02.458-2.495a4.17 4.17 0 0 1 1.001-1.54 4.17 4.17 0 0 1 1.54-1.001c.476-.183 1.186-.398 2.495-.458 1.414-.068 1.84-.082 5.426-.082z"/>
                  <path d="M12.017 15.33a3.312 3.312 0 1 1 0-6.624 3.312 3.312 0 0 1 0 6.624zm0-8.457a5.145 5.145 0 1 0 0 10.29 5.145 5.145 0 0 0 0-10.29zm6.532-.156a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                </svg>
              </a>

              {/* Discord */}
              <a 
                href="https://discord.gg/citoyen-en-action" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord Citoyen en Action"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Lives du Vendredi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Débats Citoyens</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Rejoignez-nous chaque vendredi à 19h30 pour nos débats citoyens en direct !
              </p>
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://wa.me/590690570846?text=Bonjour, je souhaite rejoindre le groupe Débat citoyen" 
                  className="text-accent-400 hover:text-accent-300 transition-colors text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 Groupe "Débat citoyen"
                </a>
                <a 
                  href="https://www.tiktok.com/@farorudy" 
                  className="text-accent-400 hover:text-accent-300 transition-colors text-sm flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎥 @farorudy (Vendredi 19h30)
                </a>
                <span className="text-gray-400 text-xs">
                  📞 Contact : 0690 57 08 46
                </span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/actions" className="text-gray-300 hover:text-white transition-colors">
                  Actions citoyennes
                </Link>
              </li>
              <li>
                <Link to="/debats" className="text-gray-300 hover:text-white transition-colors">
                  Débats TikTok
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-gray-300 hover:text-white transition-colors">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 secretariat@farorudy.fr</p>
              <p>📱 0690 57 08 46</p>
              <p>📍 Guadeloupe, France</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Citoyen en Action. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
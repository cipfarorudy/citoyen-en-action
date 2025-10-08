import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Actions citoyennes', href: '/actions' },
    { name: 'Débats TikTok', href: '/debats' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'Créateurs', href: '/createurs' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-11-5z" />
              </svg>
            </div>
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Citoyen en Action
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-medium transition-colors duration-200 ${
                  isActivePage(item.href)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <a 
                href="https://www.tiktok.com/@votre-compte" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                title="Lives TikTok - Vendredi 20h"
              >
                🎥 Lives
              </a>
              <button className="btn-primary">
                Rejoindre le mouvement
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    isActivePage(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://www.tiktok.com/@votre-compte" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors text-center"
              >
                🎥 Lives TikTok - Vendredi 20h
              </a>
              <button className="btn-primary w-full mt-4">
                Rejoindre le mouvement
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
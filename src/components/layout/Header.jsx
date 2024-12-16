import { useState, useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { NavigationLinks } from './NavigationLinks';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'La Villa', href: '/villa' },
  { name: 'Les Chambres', href: '/bedrooms' },
  { name: 'Gallerie', href: '/gallery' },
  { name: 'Disponibilité', href: '/availability' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const headerBackground = isHomePage 
    ? isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    : 'bg-white shadow-md';

  const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-custom-blue';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${headerBackground}`}
    >
      <nav 
        className="mx-auto flex max-w-7xl flex-col items-center justify-between p-6 lg:px-8" 
        aria-label="Global"
      >
        <div className="flex lg:flex-1 flex-col items-center">
          <Link to="/" className="-m-1.5 p-1.5 text-center">
                      <div className={`flex flex-col items-center transition-colors ${textColor}`}>
  <span className="text-4xl font-light">Villa Terre de Provence</span>
  <div className="flex items-center mt-2">
    <img src="/src/components/shared/Icones/stars.png" alt="stars" className="w-14 h-6 mr-2" />
    <span className="text-xl">Saint-Raphaël</span>
    <img src="/src/components/shared/Icones/stars.png" alt="stars" className="w-14 h-6 ml-2" />
  </div>
</div>
          </Link>
          {/* Ajoutez un élément de séparation */}
          <div className="h-6"></div>
          <NavigationLinks 
            navigation={navigation} 
            textColor={textColor}
            className="text-xl py-3"
          />
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${textColor}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  );
}
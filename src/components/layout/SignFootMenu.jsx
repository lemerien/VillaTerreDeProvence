import React from 'react';
import { Link } from 'react-router-dom';

export function SignFootMenu() {
  return (
    <div className="bg-white text-gray-700 py-6 border-t border-gray-300">
      <div className="container mx-auto px-4">
        {/* Image au-dessus */}
        <div className="text-center">
          <img 
            src="Logo Villa Terre de Provence.JPG" 
            alt="Logo Villa Terre de Provence" 
            className="mx-auto w-32 mb-2"
          />
        </div>

        {/* Liens hypertexte rapprochés */}
        <nav className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
  <Link to="/" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-900 underline whitespace-nowrap">
    Accueil
  </Link>
  <Link to="/villa" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-900 underline whitespace-nowrap">
    La Villa
  </Link>
  <Link to="/bedrooms" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-900 underline whitespace-nowrap">
    Les Chambres
  </Link>
  <Link to="/gallery" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-900 underline whitespace-nowrap">
    Gallerie
  </Link>
  <Link to="/availability" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-900 underline whitespace-nowrap">
    Tarifs
  </Link>
  <Link to="/contact" className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-900 underline whitespace-nowrap">
    Contact
  </Link>
</nav>
      </div>
    </div>
  );
}

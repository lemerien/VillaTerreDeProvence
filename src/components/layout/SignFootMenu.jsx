import React from 'react';
import { Link } from 'react-router-dom';

export function SignFootMenu() {
  return (
    <div className="bg-white text-gray-700 py-6 border-t border-gray-300">
      <div className="container mx-auto px-4">
        {/* Image au-dessus */}
        <div className="text-center">
          <img 
            src=".\src\components\shared\Photos\Logo Villa Terre de Provence.JPG" 
            alt="Logo Villa Terre de Provence" 
            className="mx-auto w-32 mb-2"
          />
        </div>

        {/* Liens hypertexte rapprochés */}
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="text-sm hover:text-gray-900 underline">Accueil</Link>
          <Link to="/villa" className="text-sm hover:text-gray-900 underline">La Villa</Link>
          <Link to="/bedrooms" className="text-sm hover:text-gray-900 underline">Les Chambres</Link>
          <Link to="/gallery" className="text-sm hover:text-gray-900 underline">Gallerie</Link>
          <Link to="/availability" className="text-sm hover:text-gray-900 underline">Tarifs</Link>
          <Link to="/contact" className="text-sm hover:text-gray-900 underline">Contact</Link>
        </nav>
      </div>
    </div>
  );
}

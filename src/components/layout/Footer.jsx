import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-ocre text-black">
      {/* Section des liens principaux */}
      <div className="mx-auto max-w-7xl px-2 py-1 flex justify-center items-center space-x-4 text-sm">
        {/* Utilisation de Link pour la navigation interne */}
        <Link to="/contact" className="text-gray-900 hover:text-black underline">
          Formulaire de Contact
        </Link>
        
        {/* Lien externe vers l'e-mail */}
        <a 
          href="mailto:villaterredeprovence@gmail.com" 
          className="text-gray-900 hover:text-black underline"
          aria-label="Envoyer un e-mail à Villa Terre de Provence"
        >
          E-mail
        </a>
        
        {/* Lien externe vers Facebook */}
        <a 
          href="https://www.facebook.com/villaterredeprovence" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-900 hover:text-black underline"
          aria-label="Accéder à la page Facebook de Villa Terre de Provence"
        >
          Facebook
        </a>
      </div>

      {/* Section des mentions légales */}
      <div className="border-t border-gray-800 mt-1 py-0.5 text-center text-xs text-gray-900">
        <p>
          &copy; {new Date().getFullYear()} - Villa Terre de Provence -&nbsp;
          {/* Utilisation de Link pour Mentions Légales */}
          <Link to="/mentions" className="text-black hover:underline">
            Mentions Légales
          </Link>
        </p>
      </div>
    </footer>
  );
}

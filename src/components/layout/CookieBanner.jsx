import React, { useState } from 'react';
import Cookies from 'js-cookie'; // Import de la bibliothèque js-cookie
import './CookieBanner.css'; // Si vous avez créé un fichier CSS


const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    Cookies.set('cookiesAccepted', 'true', { expires: 365 }); // Cookie valable pendant un an
    setIsVisible(false);
  };

  const handleReject = () => {
    Cookies.set('cookiesAccepted', 'false', { expires: 365 });
    setIsVisible(false);
  };

  if (Cookies.get('cookiesAccepted')) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          Nous utilisons des cookies pour améliorer votre expérience. En utilisant ce site, vous acceptez notre politique de cookies.
        </p>
        <div className="cookie-banner-buttons">
          <button onClick={handleAccept} className="accept-btn">Accepter</button>
          <button onClick={handleReject} className="reject-btn">Refuser</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

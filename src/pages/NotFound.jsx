// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container mx-auto px-4 py-12" style={{ marginTop: '120px' }}>
      <h1 className="not-found-title text-center">Oups !</h1>
      <p className="not-found-message text-center">
        La page que vous recherchez pour Villa Terre de Provence n'existe pas.
        <br /> <br />
        Peut-être que vous avez pris un mauvais tournant dans les champs de lavande ?
        <br /> <br />
      </p>
      <div className="flex justify-center mb-4">
        <img
          src="https://media.giphy.com/media/3o7aD2sa1g0g0g0g0g/giphy.gif"
          alt="Not Found"
          className="not-found-image"
        />
      </div>
      <p className="text-center">
        <Link to="/" className="not-found-link">
          Retour Accueil
        </Link>
      </p>
      <p className="not-found-message text-center">
        Retournez à la beauté de la Provence en cliquant ci-dessous !
      </p>
    </div>
  );
};

export default NotFound;
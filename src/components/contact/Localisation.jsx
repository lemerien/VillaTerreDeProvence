// Composant du formulaire de contact
import React from 'react';

export const Localisation = () => {
   return (
    <>
    <section className="mb-12">
    <div className="text-lg bg-ochre text-gray-700 p-4 rounded-lg text-center">
  <ul className="pl-0 mx-auto">
    <li className="mb-4">
      Située à Saint-Raphaël, Provence-Alpes-Côte d'Azur, La Villa Terre de Provence se trouve entre la Mer Méditerranéenne et le massif de l'Estérel, dans la partie résidentielle de Saint-Raphaël à proximité immédiate de la baie d'Agay.
    </li>
    <li className="mb-4">
      La villa est dans une résidence de prestige sécurisée et arborée, au calme et éloignée des routes principales.
    </li>
    <li className="mb-4">
      La grande plage d'Agay de sable est à 4 Km, facilement accessible par une route de campagne qui vous mènera à un grand parking gratuit à 30 m de la plage.
      À 15 minutes de voiture, se trouve la plage de sable fin de Saint-Raphaël et de Fréjus.
    </li>
    <li className="mb-4">
      Un centre commercial de proximité vous permettra de trouver épicerie, boulangerie, boucherie, restaurant, pharmacie, banque, boutique de prêt à porter, centre médical, coiffeur.
    </li>
  </ul>
</div>


  </section>
  
{/* Google Maps Section */}

<section className="mb-12">
<div className="iframe-container">
<iframe 
        src="https://www.google.com/maps/d/embed?mid=13uv6mGxCaQb76QhLsiEE5AqMIyOUDQVS" 
        className="responsive-iframe"
        title="Google Map"
/>
</div>
</section>
</>
  );
};
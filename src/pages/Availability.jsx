import React from 'react';
import { Link } from 'react-router-dom';
import PaymentMethods from '../components/availability/PaymentMethods'; // Import PaymentMethods
import { GoogleCalendar } from '../components/availability/GoogleCalendar';
import { SignFootMenu } from '../components/layout/SignFootMenu';


export function Availability() {
return (
<div className="pt-20">
<div className="container mx-auto px-4 py-14">
  <h1 className="text-4xl font-light mb-8 mt-10">Tarifs & Disponibilité</h1>
        
<p className="mb-4 text-gray-700 text-center mx-auto max-w-[80%] bg-ochre p-4 rounded-lg">
  Bienvenue sur le site de la Villa Terre de Provence pour effectuer une réservation en direct : sans frais administratif. <br /> <br />
  Une réduction permanente allant jusqu'à 20 % par rapport au tarif affiché sur les différentes plateformes de réservations en ligne. <br /> <br />
</p>

<div className="flex justify-center mb-8">
<Link to="/contact">
<button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
Contactez-nous
</button>
</Link>
</div>

<p className="mb-4 text-gray-700 text-center mx-auto max-w-[80%] bg-ochre p-4 rounded-lg">
<br /> Les disponibilités et tarif à la nuitée (min 7 nuitées) sont indiqués dans le calendrier ci-dessous. <br />
(pensez à désactiver les bloqueurs de pub si le calendrier ne s'affiche pas) <br /> <br />
</p>

<GoogleCalendar />

<section className="mb-12">
<h2 className="text-xl font-bold mb-4">Conditions de réservation</h2>
<hr className="mb-4" />
<div className="flex justify-center">
  <Link to="/reservationpolicy" className="text-blue-500 hover:underline">
    VOIR LES CONDITIONS
  </Link>
</div>

</section> 

<section className="mb-12">
<h2 className="text-xl font-bold mb-4">Méthodes de Paiement</h2>
<hr className="mb-4" />
<PaymentMethods />
</section> 

 </div>
 <SignFootMenu />
  </div>
  );
}
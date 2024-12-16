import React, { useEffect } from 'react';
import { SignFootMenu } from '../components/layout/SignFootMenu';

const ReservationPolicy = () => {
 
  return (
  
       <div className="container mx-auto px-40 py-4" style={{ marginTop: '180px' }}> {/* Ajustez la valeur selon la hauteur de votre menu */}

      <h1 className="text-3xl font-semibold mb-6">Politique de réservation</h1>

      <h2 className="text-2xl text-center font-semibold mb-4">Règlement Intérieur</h2>
      <div className="border-b-2 border-gray-300 mb-8" />
      <ul className="list-disc pl-5 mb-6">
        <li>N'est pas adapté et ne convient pas aux bébés (moins de 2 ans) ainsi qu’aux animaux domestiques.</li>
        <li>La piscine a une profondeur de 0.80 M à 1.90 M sans grillage de protection.</li>
        <li>Il y a un escalier (16 marches) entre le rez-de-chaussée et l'étage.</li>
        <li>Non-fumeur. Pas de fête ni de soirée.</li>
        <li>Heure d'arrivée entre 11 :00 et 20 :00 ; Heure de départ avant 14 :00.</li>
        <li>Des frais de ménage de 200,00 € sont comptés pour chaque réservation.</li>
        <li>La durée de réservation minimum pour la Villa est de 7 nuits.</li>
      </ul>

      <h2 className="text-2xl text-center font-semibold mb-4">Bail</h2>
      <div className="border-b-2 border-gray-300 mb-8" />
      <p className="mb-4">
        Veuillez à nous faire parvenir une présentation avant de réserver ou dès votre réservation effectuée. <br />
        Cette habitation est privée, la mise en location est faite à titre saisonnier, par conséquent, nous nous réservons l'entière décision dans le choix de sélection des locataires ainsi que dans le choix des périodes de location disponibles.
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li>Des contrats en double exemplaires vous seront envoyés, merci de les compléter puis de nous en faire parvenir un exemplaire signé en retour.</li>
        <li>Un dépôt de garantie (non encaissé) d'un montant de 1 500,00 € est requis en chèque.</li>
        <li>En cas de dommages matériels dans le logement, vous pouvez être tenu de payer l'ensemble des dommages occasionnés ainsi que l'ensemble des frais de remise en état.</li>
        <li>La Taxe de séjour est à régler en plus à votre arrivée (environ 3€ par jour par personne).</li>
      </ul>

      <h2 className="text-2xl text-center font-semibold mb-4">Assurance</h2>
      <div className="border-b-2 border-gray-300 mb-8" />
      <p className="mb-6">
        Votre assurance habitation actuelle doit contenir une clause « responsabilité civile ».<br />
        Elle doit couvrir votre responsabilité en cas de problème pendant votre location. <br />
        Merci de vérifier que vous êtes bien assuré contre les risques dont vous seriez présumé responsable (incendie, dégât des eaux, etc.).
      </p>

      <h2 className="text-2xl text-center font-semibold mb-4">Politique d'annulation</h2>
      <div className="border-b-2 border-gray-300 mb-8" />
      <ol className="list-decimal pl-5 mb-6">
        <li>
          Pour confirmer et sécuriser votre réservation, 30% du montant total du séjour doit être versé au préalable. (Non remboursable)
        </li>
        <li>
          Le paiement de la totalité du séjour doit être effectué au moins 15 jours avant le début de la location.
        </li>
        <li>
          En cas de paiement intégral effectué à la réservation, 70% du montant est remboursable (hors frais) à condition que l'annulation intervienne au plus tard dans les 5 semaines avant le jour d'arrivée prévu.
        </li>
      </ol>

                  <a href="#" className="text-blue-500 underline mb-4 block" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>

        Retour en haut
      </a>

      <SignFootMenu /> 
         </div>
    
  );
};

export default ReservationPolicy;
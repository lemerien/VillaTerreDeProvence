import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { FormStatus } from './FormStatus';

export const ContactForm = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto px-4">
      {/* Affichage du statut de soumission */}
      <FormStatus status={status} />

      {/* Prénom et Nom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="prenom" className="text-lg text-gray-700 mb-2">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            value={formData.prenom}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nom" className="text-lg text-gray-700 mb-2">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={formData.nom}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Email et Téléphone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg text-gray-700 mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telephone" className="text-lg text-gray-700 mb-2">Téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Date d'arrivée et Date de départ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="dateArrivee" className="text-lg text-gray-700 mb-2">Date d'arrivée</label>
          <input
            id="dateArrivee"
            name="dateArrivee"
            type="date"
            value={formData.dateArrivee || ''}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dateDepart" className="text-lg text-gray-700 mb-2">Date de départ</label>
          <input
            id="dateDepart"
            name="dateDepart"
            type="date"
            value={formData.dateDepart || ''}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Nombre de personnes et Mode de paiement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="nombrePersonnes" className="text-lg text-gray-700 mb-2">Nombre de personnes</label>
          <select
            id="nombrePersonnes"
            name="nombrePersonnes"
            value={formData.nombrePersonnes}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[...Array(7)].map((_, i) => (
              <option key={i} value={i + 2}>{i + 2} personnes</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="modePaiement" className="text-lg text-gray-700 mb-2">Mode de paiement acompte</label>
          <select
            id="modePaiement"
            name="modePaiement"
            value={formData.modePaiement}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez un mode de paiement</option>
            <option value="virement">Virement bancaire</option>
            <option value="paypal">PayPal (+2.9%)</option>
            <option value="cheque">Chèque</option>
          </select>
        </div>
      </div>

      {/* Présentation */}
      <div className="flex flex-col">
        <label htmlFor="presentation" className="text-lg text-gray-700 mb-2">Votre Présentation</label>
        <textarea
          id="presentation"
          name="presentation"
          value={formData.presentation}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={status.submitting}
        className={`w-full bg-blue-500 text-white h-12 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          status.submitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status.submitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
};

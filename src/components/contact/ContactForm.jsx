// Composant du formulaire de contact
import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { FormField } from './FormField';
import { FormStatus } from './FormStatus';

export const ContactForm = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Affichage du statut de soumission */}
      <FormStatus status={status} />

      {/* Prénom et Nom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Prénom"
          name="prenom"
          type="text"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        <FormField
          label="Nom"
          name="nom"
          type="text"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email et Téléphone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          label="Téléphone"
          name="telephone"
          type="tel"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Date d'arrivée et Date de départ */}
      <p className="text-lg font-semibold text-gray-700">
        Dates de séjour :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Date d'arrivée"
          name="dateArrivee"
          type="date"
          value={formData.dateArrivee || ''}
          onChange={handleChange}
          required
        />
        <FormField
          label="Date de départ"
          name="dateDepart"
          type="date"
          value={formData.dateDepart || ''}
          onChange={handleChange}
          required
        />
      </div>

      {/* Nombre de personnes et Mode de paiement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Nombre de personnes"
          name="nombrePersonnes"
          type="select"
          value={formData.nombrePersonnes}
          onChange={handleChange}
          options={[...Array(7)].map((_, i) => ({
            value: i + 2,
            label: `${i + 2} personnes`
          }))}
          required
        />
        <FormField
          label="Mode de paiement"
          name="modePaiement"
          type="select"
          value={formData.modePaiement}
          onChange={handleChange}
          options={[
            { value: '', label: 'Sélectionnez un mode de paiement' },
            { value: 'virement', label: 'Virement bancaire' },
            { value: 'paypal', label: 'PayPal (+2.9%)' },
            { value: 'cheque', label: 'Chèque' }
          ]}
          required
        />
      </div>

      {/* Présentation */}
      <FormField
        label="Présentation"
        name="presentation"
        type="textarea"
        value={formData.presentation}
        onChange={handleChange}
        required
        className="w-full max-w-2xl mx-auto h-40 md:h-48 resize-none"// Ajuste la hauteur selon tes besoins
      />

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={status.submitting}
        className={`w-full md:w-1/4 bg-blue-500 text-white h-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          status.submitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status.submitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
};

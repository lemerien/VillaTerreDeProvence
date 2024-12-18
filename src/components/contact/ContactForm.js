import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { FormField } from './FormField';
import { FormStatus } from './FormStatus';

export const ContactForm = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormStatus status={status} />

      <FormField label="Prénom" name="prenom" value={formData.prenom} onChange={handleChange} required />
      <FormField label="Nom" name="nom" value={formData.nom} onChange={handleChange} required />
      <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      <FormField label="Téléphone" name="telephone" type="tel" value={formData.telephone} onChange={handleChange} required />
      <FormField label="Date d'arrivée" name="dateArrivee" type="date" value={formData.dateArrivee} onChange={handleChange} required />
      <FormField label="Date de départ" name="dateDepart" type="date" value={formData.dateDepart} onChange={handleChange} required />
      <FormField label="Nombre de personnes" name="nombrePersonnes" type="number" value={formData.nombrePersonnes} onChange={handleChange} required />
      <FormField label="Mode de paiement" name="modePaiement" value={formData.modePaiement} onChange={handleChange} required />
      <FormField label="Présentation" name="presentation" type="textarea" value={formData.presentation} onChange={handleChange} required />

      <button type="submit" disabled={status.submitting} className="btn-primary">
        {status.submitting ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  );
};

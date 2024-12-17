// Composant pour afficher le statut du formulaire
import React from 'react';

export const FormStatus = ({ status }) => {
  if (!status.submitted && !status.error) return null;

  if (status.submitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        Votre message bien envoyé.
      </div>
    );
  }

  if (status.error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
        {status.error}
      </div>
    );
  }

  return null;
};
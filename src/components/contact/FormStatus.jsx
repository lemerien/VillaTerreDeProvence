import React from 'react';

export const FormStatus = ({ status }) => {
  // Condition pour afficher message d'erreur ou de succès
  if (status.error) {
    return (
      <div className="text-red-500 text-xl font-semibold mb-4">
        {status.message}
      </div>
    );
  }

  if (status.success) {
    return (
      <div className="text-green-500 text-xl font-semibold mb-4">
        {status.message}
      </div>
    );
  }

  return null;
};

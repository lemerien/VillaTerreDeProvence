import React from 'react';

export function IconFeature({ icon, label }) {
  return (
    <div className="flex flex-col items-center">
      {/* Conteneur de l'icône (augmentez la taille ici si nécessaire) */}
      <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-2">
        {/* Image agrandie */}
        <img src={icon} alt={label} className="w-24 h-24" /> {/* Taille de l'image augmentée */}
      </div>
      
      {/* Label */}
      <span className="bg-blue-100 px-4 py-1 rounded-full text-sm text-gray-700">
        {label}
      </span>
    </div>
  );
}

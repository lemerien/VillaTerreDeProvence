import React from 'react';
import { useGalleryContext } from './GalleryContext';

export function GalleryImage({ image, title, description, index }) {
  const { setSelectedImage } = useGalleryContext();

  const handleImageClick = () => {
    setSelectedImage({ image, title, description }); // Passer l'objet avec l'image, le titre et la description
  };

  return (
    <div className="transform transition-all duration-1000 hover:scale-105">
      <div className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          onClick={handleImageClick}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
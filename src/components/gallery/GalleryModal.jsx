import React, { useEffect } from 'react';
import { useGalleryContext } from './GalleryContext';

export function GalleryModal() {
  const { selectedImage, setSelectedImage } = useGalleryContext();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, setSelectedImage]);

  if (!selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={() => setSelectedImage(null)}
    >
      <div className="relative max-w-[95vw] max-h-[95vh] p-4">
        <img 
          src={selectedImage} 
          alt="Full screen view" 
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white text-2xl font-bold hover:bg-black/75 transition-colors"
          aria-label="Close fullscreen view"
        >
          ×
        </button>
      </div>
    </div>
  );
}
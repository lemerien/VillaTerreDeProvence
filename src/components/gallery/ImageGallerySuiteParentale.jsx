import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
    original: './src/components/shared/Photos/Bedrooms/2 - Parental Suite.jpg',
    thumbnail: './src/components/shared/Photos/Bedrooms/2 - Parental Suite.jpg',
    description: 'Dispose de sa propre salle de bain, un grand dressing et une vue directe sur le jardin',
    originalTitle: 'Suite Parentale'
  },
  {
    original: './src/components/shared/Photos/Bedrooms/4 - Bathroom Parental Suite.jpg',
    thumbnail: './src/components/shared/Photos/Bedrooms/4 - Bathroom Parental Suite.jpg',
    description: 'Dans un style exotique avec des bois chauds, deux vasques et une grande douche',
    originalTitle: 'Salle de bain Suite Parentale'
  },
  {
    original: './src/components/shared/Photos/Bedrooms/3 - Parental Suite.jpg',
    thumbnail: './src/components/shared/Photos/Bedrooms/3 - Parental Suite.jpg',
    description: 'Dispose de sa propre salle de bain, un grand dressing et une vue directe sur le jardin',
    originalTitle: 'Suite Parentale'
  }
  // Ajoutez d'autres images ici
];

export function ImageGallerySuiteParentale() {
  return (
    <div className="gallery-container">
      <ImageGallery 
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        showNav={true}
        showThumbnails={true}
        showBullets={false}
        autoPlay={false}
        slideInterval={3000}
        slideDuration={450}
        thumbnailPosition="bottom"
        onScreenChange={function(fullScreenElement) {
          console.log('isFullScreen?', !!fullScreenElement);
        }}
      />
    </div>
  );
}

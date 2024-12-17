import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'Bedrooms/13 - The Indian Room.jpg',
    thumbnail: 'Bedrooms/13 - The Indian Room.jpg',
    description: 'Vue sur le massif de l\'Estérel',
    originalTitle: 'Chambre Orientale'
  },
  {
    original: 'Bedrooms/14 - The Indian Room.jpg',
    thumbnail: 'Bedrooms/14 - The Indian Room.jpg',
    description: 'Vue sur le massif de l\'Estérel',
    originalTitle: 'Chambre Orientale'
  },
  {
    original: 'Bedrooms/15 - The Indian Room.jpg',
    thumbnail: 'Bedrooms/15 - The Indian Room.jpg',
    description: 'Vue sur le massif de l\'Estérel',
    originalTitle: 'Chambre Orientale'
  }
  // Ajoutez d'autres images ici
];

export function ImageGalleryChambreOrientale() {
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

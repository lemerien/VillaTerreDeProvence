import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'Bedrooms/10 - The African Room.jpg',
    thumbnail: 'Bedrooms/10 - The African Room.jpg',
    description: 'Vue degagée sur le massif de l\'Estérel',
    originalTitle: 'La chambre Africaine'
  },
  {
    original: 'Bedrooms/11 - The African Room.jpg',
    thumbnail: 'Bedrooms/11 - The African Room.jpg',
    description: 'Vue degagée sur le massif de l\'Estérel',
    originalTitle: 'La chambre Africaine'
  },
  {
    original: 'Bedrooms/12 - The African Room.jpg',
    thumbnail: 'Bedrooms/12 - The African Room.jpg',
    description: 'Vue degagée sur le massif de l\'Estérel',
    originalTitle: 'La chambre Africaine'
  }
  // Ajoutez d'autres images ici
];

export function ImageGalleryChambreAfricaine() {
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

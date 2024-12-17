import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'Bedrooms/6 - The Blue bedroom.jpg',
    thumbnail: 'Bedrooms/6 - The Blue bedroom.jpg',
    description: 'Lit king size standard, comprend un bureau.',
    originalTitle: 'La chambre Bleue'
  },
  {
    original: 'Bedrooms/7 - The Blue bedroom.jpg',
    thumbnail: 'Bedrooms/7 - The Blue bedroom.jpg',
    description: 'Offre une vue directe sur la piscine et se situe juste à côté de la deuxième salle de bains',
    originalTitle: 'La chambre Bleue'
  },
  {
    original: 'Bedrooms/8 - Bathroom 2.jpg',
    thumbnail: 'Bedrooms/8 - Bathroom 2.jpg',
    description: 'Equipé de deux vasques, d\'une grande douche, d\'une baignoire et d\'un sèche-serviettes',
    originalTitle: 'Salle de bain 2'
  },
  {
    original: 'Bedrooms/9 - Bathroom 2.jpg',
    thumbnail: 'Bedrooms/9 - Bathroom 2.jpg',
    description: 'Equipé de deux vasques, d\'une grande douche, d\'une baignoire et d\'un sèche-serviettes',
    originalTitle: 'Salle de bain 2'
  }
  // Ajoutez d'autres images ici
];

export function ImageGalleryChambreBleue() {
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

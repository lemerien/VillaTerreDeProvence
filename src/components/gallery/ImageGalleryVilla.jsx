import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: './src/components/shared/Photos/Villa/InterieurVilla/1 - Living Room 1.jpg',
    thumbnail: './src/components/shared/Photos/Villa/InterieurVilla/1 - Living Room 1.jpg',
    description: 'Le salon offre une vue sur le jardin depuis les deux grands canapés en cuir et la table à dîner',
    originalTitle: 'Le salon'
  },
  {
    original: './src/components/shared/Photos/Villa/InterieurVilla/2 - Living Room 2.jpg',
    thumbnail: './src/components/shared/Photos/Villa/InterieurVilla/2 - Living Room 2.jpg',
    description: 'ainsi qu\'une vue sur la montagne de l\'Estérel depuis le coin bibliothèque',
    originalTitle: 'Le salon'
  },

  {
    original: './src/components/shared/Photos/Villa/InterieurVilla/3 - Living Room 3.jpg',
    thumbnail: './src/components/shared/Photos/Villa/InterieurVilla/3 - Living Room 3.jpg',
    description: 'Vue sur la montagne de l\'Estérel depuis le coin bibliothèque',
    originalTitle: 'Le salon'
  },

  {
    original: './src/components/shared/Photos/Villa/InterieurVilla/4 - Living Room 4.jpg',
    thumbnail: './src/components/shared/Photos/Villa/InterieurVilla/4 - Living Room 4.jpg',
    description: 'Vue sur la montagne de l\'Estérel depuis le coin bibliothèque',
    originalTitle: 'Le salon'
  },

  {
    original: './src/components/shared/Photos/Villa/InterieurVilla/5 - Kitchen.jpg',
    thumbnail: './src/components/shared/Photos/Villa/InterieurVilla/5 - Kitchen.jpg',
    description: 'Entièrement équipée, machine à café Nespresso compris',
    originalTitle: 'La cuisine'
  }
  // Ajoutez d'autres images ici
];

export function ImageGalleryVilla() {
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

import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'Villa/ExterieurVilla/1 - Landscape exotic Garden 1.jpg',
    thumbnail: 'Villa/ExterieurVilla/1 - Landscape exotic Garden 1.jpg',
    description: 'S\'allonger dans l\'une des chaises longues pour profiter du jardin depuis la pergola en est un bon moyen',
    originalTitle: 'Jardin Paysagé exotic'
  },
  {
    original: 'Villa/ExterieurVilla/2 - Landscape exotic Garden 2.jpg',
    thumbnail: 'Villa/ExterieurVilla/2 - Landscape exotic Garden 2.jpg',
    description: 'Kikuyu, Cycas Revoluta, Yucca Elephantipes, Olea europaea, Washingtonias, Pinus pinaster elles sont toutes là !',
    originalTitle: 'Jardin Paysagé exotic'
  },
  {
    original: 'Villa/ExterieurVilla/6 - A typical day in French Riviera.jpg',
    thumbnail: 'Villa/ExterieurVilla/6 - A typical day in French Riviera.jpg',
    description: 'Pour une baignade dans une eau cristalline au milieu des palmiers et de la Garrigue',
    originalTitle: 'La piscine au centre de la Garrigue'
  },
  {
    original: 'Villa/ExterieurVilla/7 - The Patio.jpg',
    thumbnail: 'Villa/ExterieurVilla/7 - The Patio.jpg',
    description: 'Sous les arches ocres provençal, l\'endroit idéal pour déjeuner, prendre l\'apéritif ou simplement profiter d\'un léger souffle d\'air ',
    originalTitle: 'Le Patio'
  },

  {
    original: 'Villa/ExterieurVilla/8 - Villa view from backyard.jpg',
    thumbnail: 'Villa/ExterieurVilla/8 - Villa view from backyard.jpg',
    description: 'Le Jardin Terrasse offre une vue sur les collines avec un espace dégagé au milieu des bambous',
    originalTitle: 'La Villa vue du Jardin Terrasse'
  }


  // Ajoutez d'autres images ici
];

export function ImageGalleryJardin() {
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

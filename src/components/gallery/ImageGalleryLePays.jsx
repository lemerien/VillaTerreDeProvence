import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'Galleries/Le Pays/1 - Golden Corniche & Red rocks.jpg',
    thumbnail: 'Galleries/Le Pays/1 - Golden Corniche & Red rocks.jpg',
    description: 'Golden Corniche & Red rocks',
    originalTitle: 'Golden Corniche & Red rocks'
  },
  {
    original: 'Galleries/Le Pays/2 - Agay Baie view up.jpg',
    thumbnail: 'Galleries/Le Pays/2 - Agay Baie view up.jpg',
    description: 'Agay Baie view up',
    originalTitle: 'Agay Baie view up'
  },
  {
    original: 'Galleries/Le Pays/3 - Canyon Esterel.jpg',
    thumbnail: 'Galleries/Le Pays/3 - Canyon Esterel.jpg',
    description: 'Canyon Esterel',
    originalTitle: 'Canyon Esterel'
  },
  {
    original: 'Galleries/Le Pays/4 - Pic de l\'Ours top view .jpg',
    thumbnail: 'Galleries/Le Pays/4 - Pic de l\'Ours top view .jpg',
    description: 'Pic de l\'Ours top view',
    originalTitle: 'Pic de l\'Ours top view'
  },
  {
    original: 'Galleries/Le Pays/5 - Calanques de St Raphael.jpg',
    thumbnail: 'Galleries/Le Pays/5 - Calanques de St Raphael.jpg',
    description: 'Calanques de Saint-Raphaël',
    originalTitle: 'Calanques de Saint-Raphaël'
  },
  {
    original: 'Galleries/Le Pays/6 - 10 minutes walk behind the Villa.jpg',
    thumbnail: 'Galleries/Le Pays/6 - 10 minutes walk behind the Villa.jpg',
    description: '10 minutes walk behind the Villa',
    originalTitle: '10 minutes walk behind the Villa'
  },
  {
    original: 'Galleries/Le Pays/7 - Gold Island.jpg',
    thumbnail: 'Galleries/Le Pays/7 - Gold Island.jpg',
    description: 'Golden Island',
    originalTitle: 'Golden Island'
  },
  {
    original: 'Galleries/Le Pays/8 - Grassland.jpg',
    thumbnail: 'Galleries/Le Pays/8 - Grassland.jpg',
    description: 'Grassland',
    originalTitle: 'Grassland'
  },
  {
    original: 'Galleries/Le Pays/9 - Esterel sunset.jpg',
    thumbnail: 'Galleries/Le Pays/9 - Esterel sunset.jpg',
    description: 'Esterel sunse',
    originalTitle: 'Esterel sunse'
  },
  {
    original: 'Galleries/Le Pays/10 - Garrigue in spring.jpg',
    thumbnail: 'Galleries/Le Pays/10 - Garrigue in spring.jpg',
    description: 'Garrigue in spring',
    originalTitle: 'Garrigue in spring'
  },
  {
    original: 'Galleries/Le Pays/11 - Agay Bay.jpg',
    thumbnail: 'Galleries/Le Pays/11 - Agay Bay.jpg',
    description: 'Agay Bay',
    originalTitle: 'Agay Bay'
  },
  {
    original: 'Galleries/Le Pays/12 - Rocks Sea & Nature.jpg',
    thumbnail: 'Galleries/Le Pays/12 - Rocks Sea & Nature.jpg',
    description: 'Rocks Sea & Nature',
    originalTitle: 'Rocks Sea & Nature'
  }


  // Ajoutez d'autres images ici
];

export function ImageGalleryLePays() {
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

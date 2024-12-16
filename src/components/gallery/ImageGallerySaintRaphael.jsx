import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: './src/components/shared/Photos/Galleries/SaintRaphael/1 - Port Frejus Marina.jpg',
    thumbnail: './src/components/shared/Photos/Galleries/SaintRaphael/1 - Port Frejus Marina.jpg',
    description: ' Port Frejus Marina',
    originalTitle: 'Port Frejus Marina'
  },
  {
    original: 'src/components/shared/Photos/Galleries/SaintRaphael/2 - Archangel St Raphael Sunset.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/SaintRaphael/2 - Archangel St Raphael Sunset.jpg',
    description: 'Archangel Saint-Raphael Sunset',
    originalTitle: 'Archangel Saint-Raphael Sunset'
  },
  {
    original: 'src/components/shared/Photos/Galleries/SaintRaphael/3 - Bonaparte Gardens St Rapahel.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/SaintRaphael/3 - Bonaparte Gardens St Rapahel.jpg',
    description: 'Bonaparte Gardens St Rapahel',
    originalTitle: 'Bonaparte Gardens St Rapahel'
  },
  {
      original: 'src/components/shared/Photos/Galleries/SaintRaphael/4 - Sunset on St Raphael Beach.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/SaintRaphael/4 - Sunset on St Raphael Beach.jpg',
    description: 'Sunset on Saint-Raphael Beach',
    originalTitle: 'Sunset on Saint-Raphael Beach'
  },
  {
    original: 'src/components/shared/Photos/Galleries/SaintRaphael/5 - Saint-Raphael Beach.jpeg',
    thumbnail: 'src/components/shared/Photos/Galleries/SaintRaphael/5 - Saint-Raphael Beach.jpeg',
    description: 'Saint-Raphael Beach',
    originalTitle: 'Saint-Raphael Beach'
  },
  {
    original: 'src/components/shared/Photos/Galleries/SaintRaphael/6 - Le Dramont.jpeg',
    thumbnail: 'src/components/shared/Photos/Galleries/SaintRaphael/6 - Le Dramont.jpeg',
    description: 'Le Dramont',
    originalTitle: 'Le Dramont'
  },
  {
    original: 'src/components/shared/Photos/Galleries/SaintRaphael/7 - Esterel.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/SaintRaphael/7 - Esterel.jpg',
    description: 'Massif de L\' Esterel',
    originalTitle: 'Massif de L\'Esterel'
  }
  

  // Ajoutez d'autres images ici
];

export function ImageGallerySaintRaphael() {
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

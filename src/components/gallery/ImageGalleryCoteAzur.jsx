import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'Galleries/CoteAzur/1 - Carlton Cannes.jpg',
    thumbnail: 'Galleries/CoteAzur/1 - Carlton Cannes.jpg',
    description: 'Carlton Cannes',
    originalTitle: 'Carlton Cannes'
  },
  {
    original: 'Galleries/CoteAzur/2 - Saint Tropez Marina.jpg',
    thumbnail: 'Galleries/CoteAzur/2 - Saint Tropez Marina.jpg',
    description: 'Saint Tropez Marina',
    originalTitle: 'Saint Tropez Marina'
  },
  {
    original: 'Galleries/CoteAzur/3 - St Tropez boat.jpg',
    thumbnail: 'Galleries/CoteAzur/3 - St Tropez boat.jpg',
    description: 'St Tropez boats',
    originalTitle: 'St Tropez boats'
  },
  {
    original: 'Galleries/CoteAzur/4 - A meal in Mons.jpg',
    thumbnail: 'Galleries/CoteAzur/4 - A meal in Mons.jpg',
    description: 'A meal in Mons',
    originalTitle: 'A meal in Mons'
  },  {
    original: 'Galleries/CoteAzur/5 - Saint-Paul-de-Vence.jpg',
    thumbnail: 'Galleries/CoteAzur/5 - Saint-Paul-de-Vence.jpg',
    description: 'Saint-Paul-de-Vence',
    originalTitle: 'Saint-Paul-de-Vence'
  },  {
    original: 'Galleries/CoteAzur/6 - A lunch Pampelonne.jpg',
    thumbnail: 'Galleries/CoteAzur/6 - A lunch Pampelonne.jpg',
    description: 'A lunch Pampelonne',
    originalTitle: 'A lunch Pampelonne'
  },  {
    original: 'Galleries/CoteAzur/7 - Sillans-la-Cascade.jpg',
    thumbnail: 'Galleries/CoteAzur/7 - Sillans-la-Cascade.jpg',
    description: 'Sillans-la-Cascade',
    originalTitle: 'Sillans-la-Cascade'
  },  {
    original: 'Galleries/CoteAzur/8 - Monaco.jpg',
    thumbnail: 'Galleries/CoteAzur/8 - Monaco.jpg',
    description: 'Monaco',
    originalTitle: 'Monaco'
  },  {
    original: 'Galleries/CoteAzur/9 - The Provencal Colorado.JPG',
    thumbnail: 'Galleries/CoteAzur/9 - The Provencal Colorado.JPG',
    description: 'The Provencal Colorado',
    originalTitle: 'The Provencal Colorado'
  },

  {
    original: 'Galleries/CoteAzur/10 - Gorges du Verdon.JPG',
    thumbnail: 'Galleries/CoteAzur/10 - Gorges du Verdon.JPG',
    description: 'Gorges du Verdon',
    originalTitle: 'Gorges du Verdon'
  }



  // Ajoutez d'autres images ici
];

export function ImageGalleryCoteAzur() {
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

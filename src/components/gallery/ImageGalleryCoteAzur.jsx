import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/1 - Carlton Cannes.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/1 - Carlton Cannes.jpg',
    description: 'Carlton Cannes',
    originalTitle: 'Carlton Cannes'
  },
  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/2 - Saint Tropez Marina.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/2 - Saint Tropez Marina.jpg',
    description: 'Saint Tropez Marina',
    originalTitle: 'Saint Tropez Marina'
  },
  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/3 - St Tropez boat.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/3 - St Tropez boat.jpg',
    description: 'St Tropez boats',
    originalTitle: 'St Tropez boats'
  },
  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/4 - A meal in Mons.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/4 - A meal in Mons.jpg',
    description: 'A meal in Mons',
    originalTitle: 'A meal in Mons'
  },  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/5 - Saint-Paul-de-Vence.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/5 - Saint-Paul-de-Vence.jpg',
    description: 'Saint-Paul-de-Vence',
    originalTitle: 'Saint-Paul-de-Vence'
  },  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/6 - A lunch Pampelonne.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/6 - A lunch Pampelonne.jpg',
    description: 'A lunch Pampelonne',
    originalTitle: 'A lunch Pampelonne'
  },  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/7 - Sillans-la-Cascade.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/7 - Sillans-la-Cascade.jpg',
    description: 'Sillans-la-Cascade',
    originalTitle: 'Sillans-la-Cascade'
  },  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/8 - Monaco.jpg',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/8 - Monaco.jpg',
    description: 'Monaco',
    originalTitle: 'Monaco'
  },  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/9 - The Provencal Colorado.JPG',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/9 - The Provencal Colorado.JPG',
    description: 'The Provencal Colorado',
    originalTitle: 'The Provencal Colorado'
  },

  {
    original: 'src/components/shared/Photos/Galleries/CoteAzur/10 - Gorges du Verdon.JPG',
    thumbnail: 'src/components/shared/Photos/Galleries/CoteAzur/10 - Gorges du Verdon.JPG',
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

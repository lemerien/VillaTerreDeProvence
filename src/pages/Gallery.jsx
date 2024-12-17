import React from 'react';
import { ImageGallerySaintRaphael } from '../components/gallery/ImageGallerySaintRaphael';
import { ImageGalleryLePays } from '../components/gallery/ImageGalleryLePays';
import { ImageGalleryCoteAzur } from '../components/gallery/ImageGalleryCoteAzur';
import { SignFootMenu } from '../components/layout/SignFootMenu';


export function Gallery() {
  return (
<>
      {/* Section Equipements Villa */}
     
      <div className="container mx-auto px-auto py-4" style={{ marginTop: '120px' }}> {/* Ajustez la valeur selon la hauteur de votre menu */}
        <h1 className="text-4xl font-light mb-8 mt-10">Gallerie</h1>
        <div className="max-w-7xl mx-auto px-auto py-4">
        <h2 className="text-xl font-bold text-center mb-6">Saint-Raphaël</h2>
        <div className="border-b-2 border-gray-300 mb-8" />      
  
        <p className="text-gray-600 text-center">
             {/* Première galerie Saint Raph */}
              <ImageGallerySaintRaphael />    
        </p>
      </div>


      <div className="max-w-7xl mx-auto px-auto py-4">
        <h2 className="text-xl font-bold text-center mb-6">Le Pays</h2>
        <div className="border-b-2 border-gray-300 mb-8" />      
      </div>
        <p className="text-gray-600 text-center">
             {/* Deuxieme galerie Le Pays */}
              <ImageGalleryLePays />    
        </p>
    

        <div className="max-w-7xl mx-auto px-auto py-12">
        <h2 className="text-xl font-bold text-center mb-6">Côte d'Azur et Alentours</h2>
        <div className="border-b-2 border-gray-300 mb-2" />      
      </div>
        <p className="text-gray-600 text-center">
             {/* Troisieme galerie Cote d'Azur */}
              <ImageGalleryCoteAzur />    
        </p>
<SignFootMenu />
    </div>
    </>
  );
}
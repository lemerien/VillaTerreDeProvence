import React from 'react';
import { ImageGallerySuiteParentale } from '../components/gallery/ImageGallerySuiteParentale';
import { ImageGalleryChambreBleue } from '../components/gallery/ImageGalleryChambreBleue';
import { ImageGalleryChambreAfricaine } from '../components/gallery/ImageGalleryChambreAfricaine';
import { ImageGalleryChambreOrientale } from '../components/gallery/ImageGalleryChambreOrientale';
import { SignFootMenu } from '../components/layout/SignFootMenu';

export function Bedrooms() {
  return (


<div className="pt-20">
<div className="container mx-auto px-40 py-14">
<h1 className="text-4xl font-light mb-8 mt-10">Les Chambres</h1>
<p className="text-gray-600 text-center">

{/* premiere galerie suite parentale*/}
<ImageGallerySuiteParentale />
</p>
</div>


      {/* Section Suite Parentale */}
      <div className="max-w-7xl mx-auto px-40 py-4">
        <h2 className="text-xl font-bold text-center mb-6">Suite Parentale</h2>
        
        <div className="border-b-2 border-gray-300 mb-8" />
        
        <ul className="space-y-4 text-lg text-center">
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Salle de Bain</span>privative
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Double dressing</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Lit Queen size 160 x 200</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Climatisation réglable</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Boudoir</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Vue Jardin</span>
          </li>
      </ul>
      </div>

   
      <div className="container mx-auto px-40 py-4">
               <p className="text-gray-600 text-center">
               {/* deuxieme galerie chambre bleu*/}
               <ImageGalleryChambreBleue />
        </p>
      </div>


      
{/* Section Chambre Bleu */}
      
      <div className="max-w-7xl mx-auto px-40 py-4">
        <h2 className="text-xl font-bold text-center mb-6">Chambre Bleue</h2>
        
        <div className="border-b-2 border-gray-300 mb-8" />
        
        <ul className="space-y-4 text-lg text-center">
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Salle de Bain à proximité immédiate</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Dressing</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Lit taille 140 x 200</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Climatisation personnalisable</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Secrétaire</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Vue sur la piscine</span>
          </li>
         </ul>
      </div>

      
  <div className="container mx-auto px-40 py-4">
               <p className="text-gray-600 text-center">
                 {/* troisieme galerie chambre Africaine*/}
                 <ImageGalleryChambreAfricaine />
        </p>
      </div>

      {/* Section Chambre Africaine */}
      
      <div className="max-w-7xl mx-auto px-40 py-4">
        <h2 className="text-xl font-bold text-center mb-6">Chambre Africaine</h2>
        
        <div className="border-b-2 border-gray-300 mb-8" />
        
        <ul className="space-y-4 text-lg text-center">
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Salle de Bain à proximité immédiate</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Dressing</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2"> 2 Lits taille 90 x 190</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Climatisation personnalisable</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Vue sur la montagne</span>
          </li>
    
            </ul>
      </div>

  <div className="container mx-auto px-40 py-4">
               <p className="text-gray-600 text-center">
                      {/* quatrieme galerie chambre Orientale*/}
                      <ImageGalleryChambreOrientale />
        </p>
      </div>


 {/* Section Chambre Orientale */}
      
      <div className="max-w-7xl mx-auto px-40 py-4">
        <h2 className="text-xl font-bold text-center mb-4">Chambre Orientale</h2>
        
        <div className="border-b-2 border-gray-300 mb-8" />
        
        <ul className="space-y-4 text-lg text-center">
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Dressing</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Lit taille 140 x 190</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Climatisation personnalisable</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Vue sur la montagne</span>
          </li>
    
            </ul>
      </div>

    <SignFootMenu />
</div>
  );
}
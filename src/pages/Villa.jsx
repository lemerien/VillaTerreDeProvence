import React from 'react';
import { ImageGalleryVilla } from '../components/gallery/ImageGalleryVilla';
import { ImageGalleryJardin } from '../components/gallery/ImageGalleryJardin';
import { SignFootMenu } from '../components/layout/SignFootMenu';

export function Villa() {
  return (
<div className="container mx-auto px-auto py-4" style={{ marginTop: '120px' }}> {/* Ajustez la valeur selon la hauteur de votre menu */}

        <h1 className="text-4xl font-light mb-8 mt-10">La Villa</h1>
        <p className="text-gray-600 text-center">
           
             {/* Première galerie Villa */}
              <ImageGalleryVilla />    
        </p>


      {/* Section Equipements Villa */}
      <div className="max-w-7xl mx-auto px-auto py-4">
        <h2 className="text-xl font-bold text-center mb-6">Equipements Villa</h2>
        
        <div className="border-b-2 border-gray-300 mb-8" />
        
        <ul className="space-y-4 text-lg text-center">
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Climatisation Centrale</span> (toutes les chambres)
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Parking gratuit</span> pour les résidents
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Wifi haut débit</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">55" TV 4K HDR</span> avec Apple TV
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Hifi lecteur CD / bluetooth</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Nécessaire pour le thé & café</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Fer et planche à repasser</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Robot de cuisine</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Four et micro-ondes</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Lave-vaisselle</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Lave linge</span>
          </li>
        </ul>
      
      </div>

   
      <div className="container mx-auto px-auto py-4">
               <p className="text-gray-600 text-center">

       {/* Deuxieme galerie Jardin */}
        <ImageGalleryJardin />  
              </p>
      </div>


      
{/* Section Equipements Jardin */}
      <div className="max-w-7xl mx-auto px-auto py-8">
        <h2 className="text-xl font-bold text-center mb-6">Equipements Jardin</h2>
        
        <div className="border-b-2 border-gray-300 mb-8" />
        
        <ul className="space-y-4 text-lg text-center">
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Piscine chauffée</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Douche d'extérieur solaire</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Lumière d'ambiance du jardin</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Vaste terrasse sous pergola ombragée</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Plancha Électrique + Plancha à gaz 2 bruleurs</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Barbecue à charbon de bois (période d'utilisation restreinte)</span>
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Mobilier de jardin :</span> 
          </li>
          <li className="flex items-center justify-center">
            <span className="font-medium mr-2">Table en Teck & 8 fauteuils, 7 chaises longues, salon d'hiver, table en rodin avec ses fauteuils</span>
          </li>
        </ul>
</div>
       <SignFootMenu />

      </div>
  );
}

import React, { createContext, useContext, useState } from 'react';

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  return useContext(GalleryContext);
};
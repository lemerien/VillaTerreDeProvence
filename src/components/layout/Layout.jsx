import React from 'react';
import CookieBanner from './CookieBanner'; // Import du composant CookieBanner
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <CookieBanner />  {/* Intégration du CookieBanner */}
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Ajout de la police Georgia en tant que police de secours pour le texte de votre site
      fontFamily: {
        sans: ['Georgia', 'sans-serif'],
        serif: ['Georgia', 'serif'], // Ajout de la police Georgia comme police par défaut pour les textes de type serif
      },
      // Définir les tailles de police personnalisées sous fontSize
      fontSize: {
        base: '18px', // Définir une taille de police de base personnalisée
        lg: '22px',    // Par exemple une taille "large"
        xl: '26px',    // Taille extra large
      },

      // Transition de propriétés personnalisées
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      // Définition des animations personnalisées
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      // Application des animations personnalisées
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
      },
      // Ajout de la couleur ocre à la palette de couleurs
      colors: {
        ocre: '#DD985C', // Couleur ocre
      },
    },
  },
  plugins: [],
}

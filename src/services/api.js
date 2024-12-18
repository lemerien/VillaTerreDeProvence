// Service pour gérer les appels API
import axios from 'axios';

// URL de l'API backend
const API_BASE_URL = 'https://backendvillaterredeprovence.onrender.com/send-email'; // Assurez-vous que cette URL est correcte

// Fonction pour envoyer les données du formulaire de contact
export const sendContactForm = async (formData) => {
  try {
    // Validation locale des données avant l'envoi
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Tous les champs sont requis.");
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new Error("L'email n'est pas valide.");
    }

    // Requête POST vers l'API backend
    const response = await axios.post(API_BASE_URL, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Retourne la réponse du serveur en cas de succès
    return response.data;
  } catch (error) {
    // Capture et retourne les erreurs
    console.error("Erreur lors de l'envoi :", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Une erreur est survenue');
  }
};

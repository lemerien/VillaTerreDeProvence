// Service pour gérer les appels API
import axios from 'axios';

const API_BASE_URL = 'https://backendvillaterredeprovence.onrender.com'; // Remplacez par votre URL Render

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Une erreur est survenue');
  }
};
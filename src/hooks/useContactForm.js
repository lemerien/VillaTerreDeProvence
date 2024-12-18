import { useState } from 'react';
import axios from 'axios';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    dateArrivee: '',
    dateDepart: '',
    nombrePersonnes: '',
    modePaiement: '',
    presentation: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: '',
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: '', error: '' });

    try {
      const response = await axios.post('https://backendvillaterredeprovence.onrender.com/send-email', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus({ submitting: false, success: response.data.message, error: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        success: '',
        error: error.response?.data?.error || 'Une erreur est survenue.',
      });
    }
  };

  return { formData, status, handleChange, handleSubmit };
};

// Hook personnalisé pour gérer la logique du formulaire
import { useState } from 'react';
import { sendContactForm } from '../services/api';

export const useContactForm = () => {
  const initialState = {
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    dateArrivee: '',
    dateDepart: '',
    nombrePersonnes: 2,
    modePaiement: '',
    presentation: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setStatus({
      submitting: false,
      submitted: false,
      error: null
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await sendContactForm(formData);
      setStatus({ submitting: false, submitted: true, error: null });
      resetForm();
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
    resetForm
  };
};
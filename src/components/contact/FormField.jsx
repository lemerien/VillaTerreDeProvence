// Composant réutilisable pour les champs de formulaire
import React from 'react';

export const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
  options = []
}) => {
  const baseClassName = "text-lg w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500";

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows="4"
            className={baseClassName}
            placeholder={label} // Utilisation du label comme placeholder
            required={required}
          />
        );

      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={baseClassName}
            required={required}
          >
            <option value="" disabled>{label}</option> {/* Option par défaut avec le label */}
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={baseClassName}
            placeholder={label} // Utilisation du label comme placeholder
            required={required}
          />
        );
    }
  };

  return (
    <div className="mb-4 flex justify-center"> {/* Ajout d'une marge inférieure et centrage */}
      {renderField()}
    </div>
  );
};

// Composant de formulaire principal
const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center"> {/* Centrage des éléments du formulaire */}
      <FormField
        label="Nom"
        name="name"
        type="text"
        value=""
        onChange={() => {}}
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value=""
        onChange={() => {}}
        required
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        value=""
        onChange={() => {}}
        required
      />
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Envoyer
      </button>
    </form>
  );
};

export default Form;
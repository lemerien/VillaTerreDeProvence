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
  const baseClassName = "w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500";
  
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
            required={required}
          />
        );
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
        {label}
      </label>
      {renderField()}
    </div>
  );
};
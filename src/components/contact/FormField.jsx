export const FormField = ({ label, name, type = 'text', value, onChange, required, ...props }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    {type === 'textarea' ? (
      <textarea id={name} name={name} value={value} onChange={onChange} required={required} {...props} />
    ) : (
      <input id={name} name={name} type={type} value={value} onChange={onChange} required={required} {...props} />
    )}
  </div>
);

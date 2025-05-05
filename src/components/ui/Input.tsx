import React from 'react';
import { cssStyles, colors } from '../../styles';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;

  error?: string;
  required?: boolean;
  name?: string;
  id?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',

  error,
  required = false,
  name,
  id,
  disabled = false,
  size = 'md'
}) => {
  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label htmlFor={id || name} style={cssStyles.form.label}>
          {label}
          {required && <span style={{ color: colors.error[500], marginLeft: '0.25rem' }}>*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        style={{
          ...cssStyles.input.base,
          ...cssStyles.input.sizes[size],
          ...(error ? cssStyles.input.states.error : {}),
          ...(disabled ? { backgroundColor: colors.gray[100], cursor: 'not-allowed' } : {})
        }}
      />
      {error && <p style={cssStyles.form.error}>{error}</p>}
    </div>
  );
};

export default Input;
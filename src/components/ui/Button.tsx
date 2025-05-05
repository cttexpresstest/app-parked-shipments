import React from 'react';
import { cssStyles, colors } from '../../styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;

  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,

  disabled = false,
  type = 'button',
  fullWidth = false,
  icon
}) => {
  // Crear el estilo del botón combinando los estilos base con las variantes
  const getButtonStyles = () => {
    // Estilo base del botón
    const baseStyles = { ...cssStyles.button.base };
    
    // Estilos según la variante
    let variantStyles = {};
    switch (variant) {
      case 'primary':
        variantStyles = cssStyles.button.variants.primary;
        break;
      case 'secondary':
        variantStyles = cssStyles.button.variants.secondary;
        break;
      case 'outline':
        variantStyles = cssStyles.button.variants.outline;
        break;
      case 'danger':
        variantStyles = cssStyles.button.variants.danger;
        break;
      case 'link':
        variantStyles = {
          backgroundColor: 'transparent',
          color: colors.corporate.primary,
          textDecoration: 'none'
        };
        break;
      case 'success':
        variantStyles = {
          backgroundColor: colors.success[600],
          color: colors.white,
          border: 'none'
        };
        break;
      default:
        variantStyles = cssStyles.button.variants.primary;
    }
    
    // Estilos según el tamaño
    const sizeStyles = cssStyles.button.sizes[size];
    
    // Estilos para estado disabled
    const disabledStyles = disabled ? { opacity: 0.5, cursor: 'not-allowed' } : { cursor: 'pointer' };
    
    // Estilos para ancho completo
    const widthStyles = fullWidth ? { width: '100%' } : {};
    
    // Combinar todos los estilos
    return {
      ...baseStyles,
      ...variantStyles,
      ...sizeStyles,
      ...disabledStyles,
      ...widthStyles
    };
  };
  
  // Generamos el estilo completo del botón
  const buttonStyle = getButtonStyles();
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
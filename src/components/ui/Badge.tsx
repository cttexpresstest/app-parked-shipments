import React from 'react';
import { cssStyles } from '../../styles';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'gray' | 'info';
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary'
}) => {
  // Combinar estilos base con la variante seleccionada
  const badgeStyle = {
    ...cssStyles.badge.base,
    ...cssStyles.badge.variants[variant]
  };
  
  return (
    <span style={badgeStyle}>
      {children}
    </span>
  );
};

export default Badge;
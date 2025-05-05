import React from 'react';
import { cssStyles } from '../../styles';

interface CardProps {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent) => void;
  variant?: 'default' | 'elevated' | 'filled' | 'outline';
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  onClick,
  variant = 'default',
  padding = 'md'
}) => {
  // Usar los estilos CSS del objeto cssStyles
  const cardStyle = {
    ...cssStyles.card.base,
    ...(variant && cssStyles.card.variants[variant]),
    ...(padding && cssStyles.card.padding[padding]),
    ...(onClick ? { cursor: 'pointer' } : {})
  };
  
  return (
    <div 
      style={cardStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
/**
 * Sistema de animaciones y transiciones
 * Este archivo define todas las animaciones y transiciones utilizadas en la aplicación
 * Incluye tanto clases de Tailwind como propiedades CSS para facilitar su uso por una IA
 */

// Definición de transiciones para clases de Tailwind
export const tailwindTransitions = {
  property: {
    default: 'transition-all',
    colors: 'transition-colors',
    opacity: 'transition-opacity',
    shadow: 'transition-shadow',
    transform: 'transition-transform',
  },
  duration: {
    fast: 'duration-150',
    normal: 'duration-250',
    slow: 'duration-350',
  },
  timing: {
    linear: 'ease-linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// Animaciones para clases de Tailwind
export const tailwindAnimations = {
  spin: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  fadeIn: 'animate-fadeIn',
  fadeOut: 'animate-fadeOut',
  slideIn: 'animate-slideIn',
  slideOut: 'animate-slideOut',
};

// Definición de transiciones para CSS directo
export const cssTransitions = {
  property: {
    default: 'all',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform',
    height: 'height',
    spacing: 'margin, padding',
  },
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
  },
  timing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    inExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    outExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  },
};

// Definición de animaciones para CSS/keyframes
export const cssAnimations = {
  // Keyframes para animaciones comunes en formato CSS
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    slideInFromRight: {
      from: { transform: 'translateX(100%)' },
      to: { transform: 'translateX(0)' },
    },
    slideOutToRight: {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(100%)' },
    },
    slideInFromBottom: {
      from: { transform: 'translateY(100%)' },
      to: { transform: 'translateY(0)' },
    },
    grow: {
      from: { transform: 'scale(0)' },
      to: { transform: 'scale(1)' },
    },
  },
  // Propiedades CSS completas para animar elementos
  presets: {
    fadeIn: {
      animation: 'fadeIn 0.3s ease-in-out forwards',
    },
    fadeOut: {
      animation: 'fadeOut 0.3s ease-in-out forwards',
    },
    slideInFromRight: {
      animation: 'slideInFromRight 0.3s ease-out forwards',
    },
    slideOutToRight: {
      animation: 'slideOutToRight 0.3s ease-in forwards',
    },
    slideInFromBottom: {
      animation: 'slideInFromBottom 0.3s ease-out forwards',
    },
    grow: {
      animation: 'grow 0.3s ease-out forwards',
    },
    spin: {
      animation: 'spin 1s linear infinite',
    },
    pulse: {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
};

// Exportar ambas versiones
export default {
  tailwind: {
    transitions: tailwindTransitions,
    animations: tailwindAnimations,
  },
  css: {
    transitions: cssTransitions,
    animations: cssAnimations,
  },
};

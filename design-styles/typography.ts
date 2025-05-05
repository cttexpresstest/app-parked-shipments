/**
 * Sistema de tipografía
 * Este archivo define todos los estilos de texto utilizados en la aplicación
 */

export const fontFamily = {
  sans: ['Inter', 'system-ui', 'sans-serif'],
};

export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
};

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const typography = {
  heading: {
    h1: {
      fontSize: fontSize['3xl'],
      fontWeight: fontWeight.bold,
      color: 'text-corporate-800',
    },
    h2: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.semibold,
      color: 'text-corporate-700',
    },
    h3: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.medium,
      color: 'text-corporate-700',
    },
  },
  body: {
    normal: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.normal,
      color: 'text-gray-700',
    },
    small: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.normal,
      color: 'text-gray-600',
    },
    label: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      color: 'text-gray-700',
    },
  },
};

export default typography;

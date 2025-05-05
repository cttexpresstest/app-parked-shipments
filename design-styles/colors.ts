/**
 * Sistema de colores corporativos
 * Este archivo define todos los colores utilizados en la aplicación
 * Formato estructurado para facilitar su uso por IA y mantener consistencia
 */

export const colors = {
  // Colores corporativos principales
  corporate: {
    primary: '#BB001E', // Color principal de la marca
    text: '#DF0024',    // Color de texto corporativo
    // Escala de tonos para uso con Tailwind
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48', // Equivalente al primary para botones y elementos principales
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519',
  },
  // Colores semánticos
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Color base para mensajes de éxito
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Color base para advertencias
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Color base para errores
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  // Escala de grises
  gray: {
    50: '#f9fafb',  // Fondo claro, casi blanco
    100: '#f3f4f6', // Fondo para tarjetas o secciones
    200: '#e5e7eb', // Líneas divisorias claras
    300: '#d1d5db', // Bordes de inputs en estado normal
    400: '#9ca3af', // Texto secundario claro
    500: '#6b7280', // Texto secundario
    600: '#4b5563', // Texto principal secundario
    700: '#374151', // Texto principal
    800: '#1f2937', // Encabezados
    900: '#111827', // Texto muy oscuro
    950: '#030712', // Casi negro
  },
  // Colores base
  white: '#ffffff',
  black: '#000000',
};

// Paleta de uso rápido para componentes
export const palette = {
  // Colores de texto
  text: {
    primary: colors.gray[800],
    secondary: colors.gray[600],
    light: colors.gray[400],
    inverted: colors.white,
    link: colors.corporate[600],
    error: colors.error[600],
    success: colors.success[600]
  },
  // Colores de fondo
  background: {
    page: colors.gray[50],
    card: colors.white,
    input: colors.white,
    primary: colors.corporate[600],
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    disabled: colors.gray[200]
  },
  // Colores de borde
  border: {
    light: colors.gray[200],
    input: colors.gray[300],
    focus: colors.corporate[500],
    error: colors.error[500],
    success: colors.success[500]
  }
};

export default { colors, palette };

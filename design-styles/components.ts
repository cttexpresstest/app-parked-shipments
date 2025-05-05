/**
 * Sistema de componentes
 * Este archivo define los estilos comunes para los componentes utilizados en la aplicación
 * Incluye tanto clases de Tailwind como propiedades CSS específicas para facilitar su uso por una IA
 */

import { colors } from './colors';

// Este archivo solo contiene los estilos CSS objetuales para los componentes

// Estilos CSS para componentes (para usar con styled-components, emotion o estilos en línea)
export const cssStyles = {
  // Estilos para botones
  button: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.5rem', // 8px
      fontWeight: 500,
      transition: 'all 150ms ease',
      cursor: 'pointer',
    },
    sizes: {
      sm: { padding: '0.5rem 0.75rem', fontSize: '0.875rem' }, // 8px 12px, 14px
      md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },     // 12px 24px, 16px
      lg: { padding: '1rem 2rem', fontSize: '1.125rem' },      // 16px 32px, 18px
    },
    variants: {
      primary: {
        backgroundColor: colors.corporate.primary,
        color: colors.white,
        border: 'none',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '&:hover': { backgroundColor: colors.corporate[800] },
        '&:focus': { outline: 'none', boxShadow: `0 0 0 3px ${colors.corporate[200]}` },
        '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
      },
      secondary: {
        backgroundColor: colors.white,
        color: colors.gray[700],
        border: `1px solid ${colors.gray[300]}`,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        '&:hover': { backgroundColor: colors.gray[50] },
        '&:focus': { outline: 'none', boxShadow: `0 0 0 3px ${colors.corporate[200]}` },
        '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
      },
      outline: {
        backgroundColor: colors.white,
        color: colors.corporate.primary,
        border: `1px solid ${colors.corporate.primary}`,
        '&:hover': { backgroundColor: colors.corporate[50] },
        '&:focus': { outline: 'none', boxShadow: `0 0 0 3px ${colors.corporate[200]}` },
        '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
      },
      danger: {
        backgroundColor: colors.error[600],
        color: colors.white,
        border: 'none',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '&:hover': { backgroundColor: colors.error[700] },
        '&:focus': { outline: 'none', boxShadow: `0 0 0 3px ${colors.error[200]}` },
        '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
      },
    },
  },
  
  // Estilos para inputs
  input: {
    base: {
      display: 'block',
      width: '100%',
      height: '38px',
      padding: '0 0.5rem',
      fontSize: '0.875rem',
      borderRadius: '0.5rem',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: colors.gray[300],
      backgroundColor: colors.white,
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      transition: 'all 150ms ease',
      '&:focus': {
        outline: 'none',
        borderColor: colors.corporate[500],
        boxShadow: `0 0 0 3px ${colors.corporate[200]}`,
      },
      '&:disabled': {
        backgroundColor: colors.gray[100],
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    sizes: {
      sm: { height: '32px', fontSize: '0.75rem' },
      md: { height: '38px', fontSize: '0.875rem' },
      lg: { height: '44px', fontSize: '1rem' },
    },
    states: {
      error: {
        borderColor: colors.error[500],
        '&:focus': {
          boxShadow: `0 0 0 3px ${colors.error[200]}`,
          borderColor: colors.error[500],
        },
      },
      success: {
        borderColor: colors.success[500],
        '&:focus': {
          boxShadow: `0 0 0 3px ${colors.success[200]}`,
          borderColor: colors.success[500],
        },
      },
    },
  },
  
  // Estilos para select (dropdown)
  select: {
    // Definición de tipos para react-select
    // Define el tipo base para los estilos de react-select
    reactSelect: {
      control: (base: Record<string, unknown>, state: { isFocused: boolean; isDisabled: boolean }) => ({
        ...base,
        minHeight: '38px',
        height: '38px',
        borderRadius: '0.5rem',
        borderWidth: '2px',
        borderColor: state.isFocused ? colors.corporate[500] : colors.gray[300],
        boxShadow: state.isFocused ? `0 0 0 1px ${colors.corporate[500]}` : 'none',
        '&:hover': {
          borderColor: state.isFocused ? colors.corporate[500] : colors.gray[300],
        },
        backgroundColor: state.isDisabled ? colors.gray[100] : colors.white,
        opacity: state.isDisabled ? 0.5 : 1,
      }),
      valueContainer: (base: Record<string, unknown>) => ({
        ...base,
        height: '38px',
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
      }),
      input: (base: Record<string, unknown>) => ({
        ...base,
        margin: '0',
        padding: '0',
      }),
      indicatorsContainer: (base: Record<string, unknown>) => ({
        ...base,
        height: '38px',
      }),
      option: (base: Record<string, unknown>, state: { isSelected: boolean; isFocused: boolean }) => ({
        ...base,
        backgroundColor: state.isSelected 
          ? colors.corporate[600] 
          : state.isFocused 
            ? colors.corporate[50] 
            : undefined,
        color: state.isSelected ? colors.white : colors.gray[700],
        '&:active': {
          backgroundColor: colors.corporate[100],
        },
        fontSize: '0.875rem',
        padding: '8px 12px',
      }),
      singleValue: (base: Record<string, unknown>) => ({
        ...base,
        fontSize: '0.875rem',
      }),
      menu: (base: Record<string, unknown>) => ({
        ...base,
        zIndex: 9999,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        borderRadius: '0.5rem',
        border: `1px solid ${colors.gray[200]}`,
      }),
    },
    // Estilos para select nativo
    native: {
      base: {
        display: 'block',
        width: '100%',
        height: '38px',
        padding: '0 0.5rem',
        fontSize: '0.875rem',
        borderRadius: '0.5rem',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: colors.gray[300],
        backgroundColor: colors.white,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        transition: 'all 150ms ease',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem',
        '&:focus': {
          outline: 'none',
          borderColor: colors.corporate[500],
          boxShadow: `0 0 0 3px ${colors.corporate[200]}`,
        },
        '&:disabled': {
          backgroundColor: colors.gray[100],
          opacity: 0.5,
          cursor: 'not-allowed',
        },
      },
      sizes: {
        sm: { height: '32px', fontSize: '0.75rem' },
        md: { height: '38px', fontSize: '0.875rem' },
        lg: { height: '44px', fontSize: '1rem' },
      },
    },
  },
  
  // Estilos para tarjetas
  card: {
    base: {
      borderRadius: '0.75rem',
      overflow: 'hidden',
      border: `1px solid ${colors.gray[200]}`,
    },
    variants: {
      default: {
        backgroundColor: colors.white,
      },
      elevated: {
        backgroundColor: colors.white,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      filled: {
        backgroundColor: colors.gray[50],
        border: `1px solid ${colors.gray[100]}`,
      },
      outline: {
        backgroundColor: colors.white,
        border: `1px solid ${colors.corporate[200]}`,
      },
    },
    padding: {
      sm: { padding: '1rem' },     // 16px
      md: { padding: '1.5rem' },    // 24px
      lg: { padding: '2rem' },      // 32px
    },
  },
  
  // Estilos para etiquetas o badges
  badge: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '9999px',
      padding: '0.125rem 0.625rem', // 2px 10px
      fontSize: '0.75rem',         // 12px
      fontWeight: 500,
    },
    variants: {
      primary: {
        backgroundColor: colors.corporate[100],
        color: colors.corporate[800],
      },
      success: {
        backgroundColor: colors.success[100],
        color: colors.success[800],
      },
      warning: {
        backgroundColor: colors.warning[100],
        color: colors.warning[800],
      },
      error: {
        backgroundColor: colors.error[100],
        color: colors.error[800],
      },
      gray: {
        backgroundColor: colors.gray[100],
        color: colors.gray[800],
      },
      info: {
        backgroundColor: '#e7f6ff',
        color: '#075985',
      },
    },
  },
  
  // Estilos para formularios
  form: {
    group: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: colors.gray[700],
    },
    helper: {
      marginTop: '0.25rem',
      fontSize: '0.75rem',
      color: colors.gray[500],
    },
    error: {
      marginTop: '0.25rem',
      fontSize: '0.75rem',
      color: colors.error[600],
    },
  },

  // Estilos para el header
  header: {
    container: {
      backgroundColor: colors.white,
      borderBottom: `1px solid ${colors.gray[200]}`,
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 1.5rem',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    title: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: colors.corporate[700],
    },
    version: {
      fontSize: '0.75rem',
      color: colors.gray[500],
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      color: colors.gray[700],
    },
    closeButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: colors.gray[500],
      padding: '0.25rem',
      borderRadius: '0.25rem',
      transition: 'all 150ms ease',
      '&:hover': {
        color: colors.gray[700],
        backgroundColor: colors.gray[100],
      },
    },
  },
};

// Exportar los estilos CSS para componentes
export default {
  cssStyles,
};

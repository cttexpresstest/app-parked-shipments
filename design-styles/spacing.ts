/**
 * Sistema de espaciado
 * Este archivo define todos los espaciados utilizados en la aplicación
 */

export const spacing = {
  '1': '0.25rem',  // 4px
  '2': '0.5rem',   // 8px
  '3': '0.75rem',  // 12px
  '4': '1rem',     // 16px
  '5': '1.25rem',  // 20px
  '6': '1.5rem',   // 24px
  '8': '2rem',     // 32px
  '10': '2.5rem',  // 40px
  '12': '3rem',    // 48px
  '16': '4rem',    // 64px
  '20': '5rem',    // 80px
  '24': '6rem',    // 96px
};

export const layout = {
  container: {
    maxWidth: '1280px',
    padding: spacing['4'],
  },
  grid: {
    gap: {
      small: spacing['4'],
      medium: spacing['6'],
      large: spacing['8'],
    },
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    },
  },
  responsive: {
    sm: '640px',   // Small screens (móviles)
    md: '768px',   // Medium screens (tablets)
    lg: '1024px',  // Large screens (laptops)
    xl: '1280px',  // Extra large screens (desktops)
  },
};

export default { spacing, layout };

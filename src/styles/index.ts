/**
 * Archivo central de estilos
 * Importa y exporta los estilos CSS desde design-styles
 */

import { colors, palette } from '../../design-styles/colors';
import { cssStyles } from '../../design-styles/components';

// Exportamos solo los objetos de estilo CSS y colores necesarios
export {
  // Colores para referencias directas
  colors,
  palette,
  
  // Componentes CSS - único sistema de estilos a utilizar
  cssStyles
};

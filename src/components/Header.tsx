import { Package2, User, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { cssStyles, colors } from '../styles';

const headerStyles = cssStyles.header;

export default function Header() {
  const { userEmail, userRole } = useAuth();

  const handleClose = () => {
    try {
      window.close();
      setTimeout(() => {
        if (!window.closed) {
          window.location.href = 'about:blank';
          window.close();
        }
      }, 100);
    } catch (e) {
      console.error('Error al cerrar la ventana:', e);
      window.location.href = 'about:blank';
    }
  };

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.content}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Package2 
            size={32}
            style={{ color: colors.corporate.primary }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={headerStyles.title}>
              Gestión de Paquetes Estacionados
            </span>
            <span style={headerStyles.version}>v1.0.0</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {userEmail && (
            <div style={headerStyles.userInfo}>
              <User size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
              <span>{userEmail}</span>
              {userRole && (
                <span style={{
                  marginLeft: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: colors.gray[100],
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                }}>
                  {userRole}
                </span>
              )}
            </div>
          )}
          
          <button
            onClick={handleClose}
            style={headerStyles.closeButton}
            title="Cerrar ventana"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
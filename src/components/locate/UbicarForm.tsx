import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Warehouse } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { cssStyles, colors } from '../../styles';

interface UbicarFormProps {
  warehouse: Warehouse;
  onBack: () => void;
}

interface LocationOption {
  id: string;
  name: string;
}

const UbicarForm: React.FC<UbicarFormProps> = ({ onBack }) => {
  const [packageCode, setPackageCode] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Mock location options
  const locationOptions: LocationOption[] = [
    { id: 'A1-C1-H1', name: 'Pasillo A1, Columna C1, Altura H1' },
    { id: 'A1-C2-H2', name: 'Pasillo A1, Columna C2, Altura H2' },
    { id: 'A2-C1-H1', name: 'Pasillo A2, Columna C1, Altura H1' },
    { id: 'A2-C3-H2', name: 'Pasillo A2, Columna C3, Altura H2' },
    { id: 'A3-C2-H3', name: 'Pasillo A3, Columna C2, Altura H3' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    
    // Validation
    if (!packageCode) {
      setError('El código de bulto es obligatorio');
      return;
    }
    
    if (!selectedLocation) {
      setError('La ubicación es obligatoria');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      // Success case
      setSuccessMessage(`Bulto ${packageCode} ubicado correctamente en ${selectedLocation}`);
      
      // Reset form
      setPackageCode('');
      setSelectedLocation('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, 500);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: colors.gray[900] }}>
          Ubicar Bulto
        </h1>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onBack}
          icon={<ArrowLeft className="h-4 w-4" />}
        >
          Volver
        </Button>
      </div>

      <div style={{ maxWidth: '32rem', margin: '0 auto', backgroundColor: colors.white, borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', padding: '1.5rem' }}>
        {successMessage && (
          <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: colors.success[100], color: colors.success[800], borderRadius: '0.375rem', display: 'flex', alignItems: 'center' }}>
            <Check size={20} style={{ marginRight: '0.5rem' }} />
            {successMessage}
          </div>
        )}
        
        {error && (
          <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: colors.error[100], color: colors.error[800], borderRadius: '0.375rem' }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <Input
              label="Código de Bulto"
              placeholder="Escanear código de bulto..."
              value={packageCode}
              onChange={(e) => setPackageCode(e.target.value)}
              required
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={cssStyles.form.label}>
              Código de Ubicación
              <span style={{ color: colors.error[500], marginLeft: '0.25rem' }}>*</span>
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{ 
                width: '100%',
                padding: '0.5rem 0.75rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: colors.gray[300],
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              required
            >
              <option value="">Seleccionar ubicación...</option>
              {locationOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
          >
            Confirmar Ubicación
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UbicarForm;
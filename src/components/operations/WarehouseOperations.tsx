import React from 'react';
import { Package, ClipboardList } from 'lucide-react';
import { Warehouse } from '../../types';
import OperationOption from './OperationOption';
import { cssStyles, colors } from '../../styles';

interface WarehouseOperationsProps {
  warehouse: Warehouse;
  pendingDeliveryCount: number;
  pendingReturnCount: number;
  onSelectOption: (option: 'stock' | 'ubicar') => void;
}

const WarehouseOperations: React.FC<WarehouseOperationsProps> = ({
  warehouse,
  pendingDeliveryCount,
  pendingReturnCount,
  onSelectOption,
}) => {
  const totalPendingCount = pendingDeliveryCount + pendingReturnCount;

  return (
    <div style={{ maxWidth: '42rem', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: colors.gray[900], marginBottom: '0.5rem' }}>
        {warehouse.name} - {warehouse.code}
      </h1>
      <p style={{ color: colors.gray[500], marginBottom: '1.5rem' }}>Seleccione una operación para continuar</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <OperationOption
          title="Stock"
          description="Listado de todos los bultos ubicados en el almacén"
          icon={<ClipboardList size={24} style={{ color: colors.corporate[700] }} />}
          onClick={() => onSelectOption('stock')}
          notificationCount={totalPendingCount}
        />
        
        <OperationOption
          title="Ubicar"
          description="Asignar bultos a ubicación"
          icon={<Package size={24} style={{ color: colors.corporate[600] }} />}
          onClick={() => onSelectOption('ubicar')}
        />
      </div>
    </div>
  );
};

export default WarehouseOperations;
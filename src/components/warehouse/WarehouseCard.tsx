import React from 'react';
import { Building } from 'lucide-react';
import { Warehouse } from '../../types';
import Card from '../ui/Card';
import { colors } from '../../styles';

interface WarehouseCardProps {
  warehouse: Warehouse;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const WarehouseCard: React.FC<WarehouseCardProps> = ({ warehouse, isSelected, onClick }) => {
  // Aplicamos los estilos directamente en lugar de usar className
  return (
    <Card 
      variant={isSelected ? 'outline' : 'default'} 
      onClick={() => onClick(warehouse.id)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '1rem', padding: '0.5rem', backgroundColor: colors.corporate[50], borderRadius: '9999px' }}>
          <Building size={24} style={{ color: colors.corporate.primary }} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: colors.gray[900] }}>{warehouse.name}</h3>
          <p style={{ fontSize: '0.875rem', color: colors.gray[500] }}>{warehouse.code}</p>
        </div>
      </div>
    </Card>
  );
};

export default WarehouseCard;
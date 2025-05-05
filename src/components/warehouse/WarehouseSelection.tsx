import React, { useState } from 'react';
import { Building } from 'lucide-react';
import { Warehouse } from '../../types';
import WarehouseCard from './WarehouseCard';

interface WarehouseSelectionProps {
  warehouses: Warehouse[];
  onSelect: (warehouseId: string) => void;
}

const WarehouseSelection: React.FC<WarehouseSelectionProps> = ({ warehouses, onSelect }) => {
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedWarehouse(id);
    onSelect(id);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center mb-6">
        <Building className="h-7 w-7 text-red-700 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Seleccionar Almacén</h1>
      </div>
      
      <div className="space-y-4">
        {warehouses.map((warehouse) => (
          <WarehouseCard
            key={warehouse.id}
            warehouse={warehouse}
            isSelected={selectedWarehouse === warehouse.id}
            onClick={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default WarehouseSelection;
import React, { useState, useEffect } from 'react';
import { Warehouse, Package } from './types';
import { warehouses, generatePackages } from './data/mockData';
import Header from './components/Header';
import WarehouseSelection from './components/warehouse/WarehouseSelection';
import WarehouseOperations from './components/operations/WarehouseOperations';
import StockManagement from './components/stock/StockManagement';
import UbicarForm from './components/locate/UbicarForm';
import { palette } from './styles';

type AppScreen = 'warehouse-selection' | 'operations' | 'stock' | 'ubicar';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('warehouse-selection');
  const [selectedWarehouse, setSelectedWarehouse] = useState<Warehouse | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    if (selectedWarehouse) {
      const warehousePackages = generatePackages(selectedWarehouse.id);
      setPackages(warehousePackages);
    }
  }, [selectedWarehouse]);

  const handleWarehouseSelect = (warehouseId: string) => {
    const warehouse = warehouses.find(w => w.id === warehouseId);
    if (warehouse) {
      setSelectedWarehouse(warehouse);
      setCurrentScreen('operations');
    }
  };

  const handleOperationSelect = (operation: 'stock' | 'ubicar') => {
    setCurrentScreen(operation);
  };

  const handleBackToOperations = () => {
    setCurrentScreen('operations');
  };

  const pendingDeliveryCount = packages.filter(pkg => pkg.status === 'pending-delivery').length;
  const pendingReturnCount = packages.filter(pkg => pkg.status === 'pending-return').length;

  return (
    <div className={`min-h-screen ${palette.background.page}`}>
      <Header />

      {currentScreen === 'warehouse-selection' && (
        <WarehouseSelection 
          warehouses={warehouses} 
          onSelect={handleWarehouseSelect} 
        />
      )}

      {currentScreen === 'operations' && selectedWarehouse && (
        <WarehouseOperations 
          warehouse={selectedWarehouse}
          pendingDeliveryCount={pendingDeliveryCount}
          pendingReturnCount={pendingReturnCount}
          onSelectOption={handleOperationSelect}
        />
      )}

      {currentScreen === 'stock' && selectedWarehouse && (
        <StockManagement 
          warehouse={selectedWarehouse}
          packages={packages}
          onBack={handleBackToOperations}
        />
      )}

      {currentScreen === 'ubicar' && selectedWarehouse && (
        <UbicarForm 
          warehouse={selectedWarehouse}
          onBack={handleBackToOperations}
        />
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Package, TabType, Warehouse } from '../../types';
import TabNavigation from './TabNavigation';
import PackageTable from './PackageTable';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { colors } from '../../styles';

interface StockManagementProps {
  warehouse: Warehouse;
  packages: Package[];
  onBack: () => void;
}

const StockManagement: React.FC<StockManagementProps> = ({
  warehouse,
  packages,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('list');
  const [searchTerm, setSearchTerm] = useState('');

  const pendingDeliveryCount = packages.filter(pkg => pkg.status === 'pending-delivery').length;
  const pendingReturnCount = packages.filter(pkg => pkg.status === 'pending-return').length;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: colors.gray[900] }}>
            {warehouse.name} - Operaciones
          </h1>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onBack}
          icon={<ArrowLeft className="h-4 w-4" />}
        >
          Volver
        </Button>
      </div>

      <div style={{ backgroundColor: colors.white, borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 500, color: colors.gray[900], marginBottom: '1rem' }}>Inventario</h2>
        
        <TabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          pendingDeliveryCount={pendingDeliveryCount}
          pendingReturnCount={pendingReturnCount}
        />
        
        <div style={{ margin: '1rem 0' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              bottom: 0, 
              left: 0, 
              paddingLeft: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              pointerEvents: 'none' 
            }}>
              <Search size={20} color={colors.gray[400]} />
            </div>
            <div style={{ paddingLeft: '28px' }}>
              <Input
                placeholder="Buscar por código de bulto o ubicación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <PackageTable 
          packages={packages} 
          currentTab={activeTab} 
          searchTerm={searchTerm} 
        />
      </div>
    </div>
  );
};

export default StockManagement;
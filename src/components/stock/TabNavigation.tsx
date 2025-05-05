import React from 'react';
import { TabType } from '../../types';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  pendingDeliveryCount: number;
  pendingReturnCount: number;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  pendingDeliveryCount,
  pendingReturnCount,
}) => {
  const tabs = [
    { id: 'list' as TabType, name: 'Listar Bultos' },
    { 
      id: 'new-delivery' as TabType, 
      name: 'Nuevo reparto', 
      count: pendingDeliveryCount 
    },
    { 
      id: 'return' as TabType, 
      name: 'Devoluciones', 
      count: pendingReturnCount 
    },
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-3 px-4 text-sm font-medium rounded-t-md relative ${
              activeTab === tab.id
                ? 'bg-red-700 text-white'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
            onClick={() => onTabChange(tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.name}
            {tab.count && tab.count > 0 && (
              <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-white text-red-700">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
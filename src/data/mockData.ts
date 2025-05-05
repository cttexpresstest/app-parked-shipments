import { Warehouse, Package } from '../types';

export const warehouses: Warehouse[] = [
  {
    id: '1',
    name: 'Madrid Central',
    code: 'CO Madrid'
  },
  {
    id: '2',
    name: 'Villaverde Hub',
    code: 'CO Villaverde'
  },
  {
    id: '3',
    name: 'Sant Boi Center',
    code: 'CO Sant Boi'
  }
];

export const generatePackages = (warehouseId: string): Package[] => {
  const statuses: ('normal' | 'pending-delivery' | 'pending-return')[] = ['normal', 'pending-delivery', 'pending-return'];
  
  return Array(40).fill(null).map((_, index) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const today = new Date();
    const extractionDate = new Date(today);
    extractionDate.setDate(today.getDate() + Math.floor(Math.random() * 10));
    
    return {
      id: `${warehouseId}-${index + 1}`,
      code: `PKG-${warehouseId}${10000 + index}`,
      aisle: `A${Math.floor(Math.random() * 10) + 1}`,
      column: `C${Math.floor(Math.random() * 20) + 1}`,
      height: `H${Math.floor(Math.random() * 5) + 1}`,
      locationUserCode: `USR${100 + Math.floor(Math.random() * 900)}`,
      locationDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      destinationZipCode: `${10000 + Math.floor(Math.random() * 90000)}`,
      recipient: `Recipient ${index + 1}`,
      incidentType: Math.random() > 0.7 ? `Incident Type ${Math.floor(Math.random() * 5) + 1}` : '',
      deliveryAttempts: Math.floor(Math.random() * 3),
      client: `Client ${Math.floor(Math.random() * 10) + 1}`,
      extractionDate: extractionDate.toISOString().split('T')[0],
      status
    };
  });
};
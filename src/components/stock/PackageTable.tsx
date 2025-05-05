import React, { useState } from 'react';
import { Package, TabType } from '../../types';
import Badge from '../ui/Badge';
import { Download } from 'lucide-react';
import Button from '../ui/Button';

interface PackageTableProps {
  packages: Package[];
  currentTab: TabType;
  searchTerm: string;
}

const PackageTable: React.FC<PackageTableProps> = ({ packages, currentTab, searchTerm }) => {
  const [sortField, setSortField] = useState<keyof Package | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const filteredPackages = packages.filter((pkg) => {
    if (currentTab === 'new-delivery' && pkg.status !== 'pending-delivery') return false;
    if (currentTab === 'return' && pkg.status !== 'pending-return') return false;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return Object.values(pkg).some(
        value => 
          value !== null && 
          value !== undefined && 
          value.toString().toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (field: keyof Package) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusBadge = (status: Package['status']) => {
    if (status === 'pending-delivery') {
      return <Badge variant="info">Pendiente de Entrega</Badge>;
    } else if (status === 'pending-return') {
      return <Badge variant="warning">Pendiente de Devolución</Badge>;
    }
    return null;
  };

  return (
    <div className="bg-white shadow-sm rounded-md overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Total: {filteredPackages.length} bultos
          </span>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          icon={<Download className="h-4 w-4" />}
        >
          Exportar a Excel
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { key: 'code', label: 'Código de bulto' },
                { key: 'aisle', label: 'Pasillo' },
                { key: 'column', label: 'Columna' },
                { key: 'height', label: 'Altura' },
                { key: 'locationUserCode', label: 'Código Usuario' },
                { key: 'locationDate', label: 'Fecha Ubicación' },
                { key: 'destinationZipCode', label: 'CP Destino' },
                { key: 'recipient', label: 'Destinatario' },
                { key: 'incidentType', label: 'Tipo Incidencia' },
                { key: 'deliveryAttempts', label: 'Intentos' },
                { key: 'client', label: 'Cliente' },
                { key: 'extractionDate', label: 'Fecha Extracción' },
              ].map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(column.key as keyof Package)}
                >
                  <div className="flex items-center">
                    {column.label}
                    {sortField === column.key && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedPackages.length > 0 ? (
              sortedPackages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      {pkg.code}
                      {getStatusBadge(pkg.status)}
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.aisle}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.column}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.height}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.locationUserCode}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.locationDate}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.destinationZipCode}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.recipient}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.incidentType || '—'}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.deliveryAttempts}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.client}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{pkg.extractionDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="px-3 py-4 text-center text-sm text-gray-500">
                  No se encontraron bultos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageTable;
export interface Warehouse {
  id: string;
  name: string;
  code: string;
}

export interface Package {
  id: string;
  code: string;
  aisle: string;
  column: string;
  height: string;
  locationUserCode: string;
  locationDate: string;
  destinationZipCode: string;
  recipient: string;
  incidentType: string;
  deliveryAttempts: number;
  client: string;
  extractionDate: string;
  status: 'normal' | 'pending-delivery' | 'pending-return';
}

export type TabType = 'list' | 'new-delivery' | 'return';
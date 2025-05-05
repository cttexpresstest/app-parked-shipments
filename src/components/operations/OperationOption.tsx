import React from 'react';
import Card from '../ui/Card';

interface OperationOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  notificationCount?: number;
}

const OperationOption: React.FC<OperationOptionProps> = ({
  title,
  description,
  icon,
  onClick,
  notificationCount,
}) => {
  return (
    <Card variant="hover" onClick={onClick} className="relative">
      <div className="flex items-start">
        <div className="mr-4 p-2 bg-gray-50 rounded-full">
          {icon}
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            {notificationCount && notificationCount > 0 && (
              <div className="ml-2">
                <div className="h-5 w-5 flex items-center justify-center bg-red-600 text-white rounded-full text-xs font-bold">
                  {notificationCount}
                </div>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default OperationOption;
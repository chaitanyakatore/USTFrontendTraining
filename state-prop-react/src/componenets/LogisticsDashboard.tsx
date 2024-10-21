import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(0);
  const [dispatchCount, setDispatchCount] = useState<number>(0); 

  const handleTruckDeparture = (amount: number) => {
    if (warehouseItems >= amount) {
      setWarehouseItems(prevCount => prevCount - amount); 
      setDispatchCount(prevCount => prevCount + 1); 
    } else {
      alert("Not enough inventory to dispatch the truck.");
    }
  };

  const handleAddInventory = (amount: number) => {
    setWarehouseItems(prevCount => prevCount + amount); 
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} onAddInventory={handleAddInventory} />
        <DeliveryStatus 
          onTruckDeparture={handleTruckDeparture} 
          dispatchCount={dispatchCount} 
          totalInventory={warehouseItems} 
        />
      </div>
      <div>
        <h3>Total Truck Dispatches: {dispatchCount}</h3>
      </div>
    </div>
  );
};

export default LogisticsDashboard;

import React, { useState } from 'react';


interface DeliveryStatusProps {
  onTruckDeparture: (amount: number) => void; 
  dispatchCount: number; 
  totalInventory: number;
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ onTruckDeparture, dispatchCount, totalInventory }) => {
  const [newInventory, setNewInventory] = useState<number>(5); // Start at minimum of 5

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNewInventory(value);
  };

  const handleDispatch = () => {
   
    if (newInventory < 5) {
      alert("Input is less than 5 add more input");
      return; 
    }
    if (newInventory > 20) {
      alert("Input is greater than the maximum allowed of 20.");
      return; 
    }
    if (newInventory > totalInventory) {
      alert(`Cannot dispatch more than available inventory: ${totalInventory}`);
      return;
    }
    onTruckDeparture(newInventory); 
  };

  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      <p>Current Inventory Status: Check the inventory level.</p>
      {}
      <button onClick={handleDispatch}>Dispatch Truck</button>
      <p>Truck Dispatch Count: {dispatchCount}</p> {}

      <input
        type="number"
        value={newInventory} 
        onChange={handleInputChange} 
        min="5" 
        max="20" 
      />
      <p>Enter a value between 5 and 20.</p> 
    </div>
  );
};

export default DeliveryStatus;

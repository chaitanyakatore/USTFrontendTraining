import React, { useState } from 'react';


interface WarehouseInventoryProps {
  itemCount: number;
  onAddInventory: (amount: number) => void; 
}

const WarehouseInventory: React.FC<WarehouseInventoryProps> = ({ itemCount, onAddInventory }) => {
  const [newInventory, setNewInventory] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewInventory(Number(event.target.value));
  };

  const handleAddInventory = () => {
    if (newInventory > 0) {
      onAddInventory(newInventory); 
      setNewInventory(0); 
    }
  };

  return (
    <div className="warehouse-inventory">
      <h2>Warehouse Inventory</h2>
      <p>Items in Warehouse: {itemCount}</p>
      <input
        type="number"
        value={newInventory}
        onChange={handleInputChange}
      />
      
      <button style={{ marginTop: '10px' }} onClick={handleAddInventory}>Add Inventory</button>

    </div>
  );
};

export default WarehouseInventory;

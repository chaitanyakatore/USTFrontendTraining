import React, { useState } from 'react';

interface LedgerEntryProps {
  addEntry: (date: string, description: string, credited?: number, debited?: number) => void;
  clearAll: () => void; // Add clearAll function as a prop
}

const LedgerEntry: React.FC<LedgerEntryProps> = ({ addEntry, clearAll }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [credited, setCredited] = useState<number | undefined>(undefined);
  const [debited, setDebited] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEntry(date, description, credited, debited);
    setDate('');
    setDescription('');
    setCredited(undefined);
    setDebited(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Credited Amount"
        value={credited || ''}
        onChange={(e) => setCredited(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Debited Amount"
        value={debited || ''}
        onChange={(e) => setDebited(Number(e.target.value))}
      />
      <button type="submit" className="add-entry-button">Add Entry</button>
      <button type="button" className="clear-sheet-button" onClick={clearAll}>Clear Sheet</button>
    </form>
  );
};

export default LedgerEntry;

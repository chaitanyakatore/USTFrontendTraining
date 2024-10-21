import React, { useState } from 'react';
import LedgerList from './LedgerList';
import LedgerEntry from './LedgerEntry';

interface Entry {
  date: string;
  description: string;
  credited?: number;
  debited?: number;
}

const BalanceSheet: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([
    { date: '2024-10-21', description: 'Opening Balance', credited: 10000 },
  ]);

  const totalCredited = entries.reduce((acc, entry) => acc + (entry.credited || 0), 0);
  const totalDebited = entries.reduce((acc, entry) => acc + (entry.debited || 0), 0);
  const remainingAmount = totalCredited - totalDebited;

  const addEntry = (date: string, description: string, credited?: number, debited?: number) => {
    const newEntry: Entry = { date, description, credited, debited };
    setEntries([...entries, newEntry]);
  };

  const clearAll = () => {
    setEntries([]); // Clear all entries
  };

  return (
    <div>
      <h1>My Ledger</h1>
      <LedgerEntry addEntry={addEntry} clearAll={clearAll} />
      <LedgerList entries={entries} remainingAmount={remainingAmount} />
      <div>
        <h3>Summary</h3>
        <p>Total Credited: ${totalCredited}</p>
        <p>Total Debited: ${totalDebited}</p>
        <p>Remaining Amount: ${remainingAmount}</p>
      </div>
    </div>
  );
};

export default BalanceSheet;

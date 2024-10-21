import React from 'react';

interface Entry {
  date: string;
  description: string;
  credited?: number;
  debited?: number;
}

interface LedgerListProps {
  entries: Entry[];
  remainingAmount: number;
}

const LedgerList: React.FC<LedgerListProps> = ({ entries, remainingAmount }) => {
  return (
    <div>
      <h2>Ledger Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credited Element</th>
            <th>Debited Element</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.description}</td>
              <td>{entry.credited ? `$${entry.credited}` : '-'}</td>
              <td>{entry.debited ? `$${entry.debited}` : '-'}</td>
              <td>{remainingAmount + (entry.credited || 0) - (entry.debited || 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LedgerList;

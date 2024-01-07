import React, { useState } from 'react';

const SimpleTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    // Add more entries as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);

  // Function to filter the data based on search term
  const filteredData = data.filter((entry) =>
    Object.values(entry).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Function to sort the data based on a specific key
  const sortedData = sortBy
    ? [...filteredData].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    : filteredData;

  return (
    <div>
      <h2>Simple Table</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th onClick={() => setSortBy('id')}>ID</th>
            <th onClick={() => setSortBy('name')}>Name</th>
            <th onClick={() => setSortBy('age')}>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;

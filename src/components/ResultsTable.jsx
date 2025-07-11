import React from 'react';

const ResultsTable = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-3 text-left font-bold text-gray-800">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;

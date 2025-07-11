import React from 'react';
import GameCard from '../components/GameCard';
import ResultsTable from '../components/ResultsTable';
import { recentResults } from '../utils/data';

const Results = () => {
  const columns = [
    { key: 'time', header: 'Time' },
    { key: 'date', header: 'Date' },
    { 
      key: 'numbers', 
      header: 'Winning Numbers',
      render: (numbers) => (
        <div className="flex space-x-1">
          {numbers.map((num, index) => (
            <div key={index} className="bg-indigo-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm font-bold">
              {num}
            </div>
          ))}
        </div>
      )
    },
    { key: 'totalBets', header: 'Total Bets', render: (value) => <span className="text-xs md:text-sm">{value.toLocaleString()}</span> },
    { key: 'totalWinners', header: 'Winners', render: (value) => <span className="font-bold text-green-600 text-xs md:text-sm">{value}</span> },
    { key: 'totalPayout', header: 'Total Payout', render: (value) => <span className="font-bold text-green-600 text-xs md:text-sm">{value}</span> },
  ];

  return (
    <div className="gradient-bg py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Results</h1>
          <p className="text-base md:text-lg text-gray-600">Check the most recent Lucky 3 draw results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <GameCard className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="text-center p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Latest Draw</h3>
              <div className="text-xl md:text-2xl font-bold mb-2">14:30 Today</div>
              <div className="flex justify-center space-x-2 mb-4">
                {[3, 7, 9].map((num, index) => (
                  <div key={index} className="bg-white text-green-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl">
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-green-100 text-sm md:text-base">23 Winners • KSH 45,600 Paid Out</p>
            </div>
          </GameCard>

          <GameCard className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="text-center p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Next Draw</h3>
              <div className="text-2xl md:text-3xl font-bold mb-2">15:00</div>
              <div className="text-lg md:text-xl mb-4">In 27 minutes</div>
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs md:text-sm font-semibold">Get your numbers ready!</span>
            </div>
          </GameCard>

          <GameCard className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="text-center p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Today's Stats</h3>
              <div className="text-xl md:text-2xl font-bold mb-2">28 Draws</div>
              <div className="text-base md:text-lg mb-2">642 Total Winners</div>
              <div className="text-xs md:text-sm text-purple-100">KSH 1,284,500 Paid Out</div>
            </div>
          </GameCard>
        </div>

        <GameCard>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Recent Draw Results</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  {columns.map((column, index) => (
                    <th key={index} className="px-2 md:px-4 py-3 text-left font-bold text-gray-800 text-xs md:text-sm">
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentResults.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className="px-2 md:px-4 py-3 text-xs md:text-sm">
                        {column.render ? column.render(row[column.key], row) : row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GameCard>
      </div>
    </div>
  );
};

export default Results;

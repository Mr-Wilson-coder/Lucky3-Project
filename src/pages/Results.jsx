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
            <div key={index} className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              {num}
            </div>
          ))}
        </div>
      )
    },
    { key: 'totalBets', header: 'Total Bets', render: (value) => value.toLocaleString() },
    { key: 'totalWinners', header: 'Winners', render: (value) => <span className="font-bold text-green-600">{value}</span> },
    { key: 'totalPayout', header: 'Total Payout', render: (value) => <span className="font-bold text-green-600">{value}</span> },
  ];

  return (
    <div className="gradient-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Latest Results</h1>
          <p className="text-lg text-gray-600">Check the most recent Lucky 3 draw results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <GameCard className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Latest Draw</h3>
              <div className="text-2xl font-bold mb-2">14:30 Today</div>
              <div className="flex justify-center space-x-2 mb-4">
                {[3, 7, 9].map((num, index) => (
                  <div key={index} className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-green-100">23 Winners • KSH 45,600 Paid Out</p>
            </div>
          </GameCard>

          <GameCard className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Next Draw</h3>
              <div className="text-3xl font-bold mb-2">15:00</div>
              <div className="text-xl mb-4">In 27 minutes</div>
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Get your numbers ready!</span>
            </div>
          </GameCard>

          <GameCard className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Today's Stats</h3>
              <div className="text-2xl font-bold mb-2">28 Draws</div>
              <div className="text-lg mb-2">642 Total Winners</div>
              <div className="text-sm text-purple-100">KSH 1,284,500 Paid Out</div>
            </div>
          </GameCard>
        </div>

        <GameCard>
          <h2 className="text-2xl font-bold mb-6">Recent Draw Results</h2>
          <ResultsTable data={recentResults} columns={columns} />
        </GameCard>
      </div>
    </div>
  );
};

export default Results;

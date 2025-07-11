import React from 'react';
import GameCard from '../components/GameCard';
import ResultsTable from '../components/ResultsTable';
import { recentWinners, bigWinners } from '../utils/data';

const Winners = () => {
  const columns = [
    { key: 'phone', header: 'Phone' },
    { 
      key: 'numbers', 
      header: 'Numbers',
      render: (numbers) => (
        <div className="flex space-x-1">
          {numbers.map((num, index) => (
            <div key={index} className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {num}
            </div>
          ))}
        </div>
      )
    },
    { 
      key: 'match', 
      header: 'Match',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          value === 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {value}/3
        </span>
      )
    },
    { key: 'prize', header: 'Prize', render: (value) => <span className="font-bold text-green-600">{value}</span> },
    { key: 'time', header: 'Time' },
  ];

  return (
    <div className="gradient-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Lucky Winners</h1>
          <p className="text-lg text-gray-600">Congratulations to our recent winners!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <GameCard className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">235</div>
              <div className="text-sm">Winners Today</div>
            </div>
          </GameCard>
          
          <GameCard className="bg-gradient-to-br from-green-400 to-green-600 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">KSH 1.2M</div>
              <div className="text-sm">Paid Out Today</div>
            </div>
          </GameCard>
          
          <GameCard className="bg-gradient-to-br from-blue-400 to-blue-600 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">KSH 300K</div>
              <div className="text-sm">Biggest Win Today</div>
            </div>
          </GameCard>
          
          <GameCard className="bg-gradient-to-br from-purple-400 to-purple-600 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">15,347</div>
              <div className="text-sm">Total Winners This Week</div>
            </div>
          </GameCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GameCard>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-bold">Recent Winners</h2>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Live</span>
            </div>
            <ResultsTable data={recentWinners} columns={columns} />
          </GameCard>

          <GameCard>
            <h2 className="text-xl font-bold mb-6">Biggest Wins This Week</h2>
            <div className="space-y-4">
              {bigWinners.map((winner, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
                  <div>
                    <div className="font-bold text-xl text-green-600">{winner.amount}</div>
                    <div className="text-sm text-gray-600">
                      Numbers: {winner.numbers.join('-')} • {winner.location}
                    </div>
                    <div className="text-xs text-gray-500">{winner.date}</div>
                  </div>
                  <div className="text-4xl">🎉</div>
                </div>
              ))}
            </div>
          </GameCard>
        </div>

        <GameCard className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Could You Be Next?</h2>
            <p className="text-lg mb-6 text-indigo-100">
              Join thousands of winners who play Lucky 3 every day. Your lucky numbers could be just one draw away!
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">Every 30 Minutes</div>
                <div className="text-sm text-indigo-200">New chances to win</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">Up to 300x</div>
                <div className="text-sm text-indigo-200">Your bet amount</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">KSH 10</div>
                <div className="text-sm text-indigo-200">Minimum bet</div>
              </div>
            </div>
          </div>
        </GameCard>
      </div>
    </div>
  );
};

export default Winners;

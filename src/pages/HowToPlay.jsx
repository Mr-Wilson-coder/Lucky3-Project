import React, { useState } from 'react';
import GameCard from '../components/GameCard';

const HowToPlay = () => {
  const [activeTab, setActiveTab] = useState('quickstart');

  const tabs = [
    { id: 'quickstart', label: 'Quick Start' },
    { id: 'detailed', label: 'Detailed Guide' },
    { id: 'payouts', label: 'Payouts' },
    { id: 'tips', label: 'Tips & Strategy' },
  ];

  return (
    <div className="gradient-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How to Play Lucky 3</h1>
          <p className="text-lg text-gray-600">Learn how to play and win big with Lucky 3!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-200 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'quickstart' && (
            <div className="space-y-6">
              <GameCard>
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-2xl font-bold">🚀 Quick Start Guide</h2>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">3 Easy Steps</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                    <h3 className="font-bold mb-2">Pick Your Numbers</h3>
                    <p className="text-sm text-gray-600">Choose 3 numbers from 0-9. Order matters!</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                    <h3 className="font-bold mb-2">Place Your Bet</h3>
                    <p className="text-sm text-gray-600">Minimum KSH 10, Maximum KSH 1,000</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                    <h3 className="font-bold mb-2">Wait for Results</h3>
                    <p className="text-sm text-gray-600">Draws every 30 minutes, 24/7!</p>
                  </div>
                </div>
              </GameCard>

              <GameCard className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <div className="text-center p-8">
                  <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
                  <p className="mb-6">Use M-PESA Paybill 150150 to place your first bet!</p>
                  <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-colors">
                    Play Now
                  </button>
                </div>
              </GameCard>
            </div>
          )}

          {activeTab === 'payouts' && (
            <div className="space-y-6">
              <GameCard>
                <h2 className="text-2xl font-bold mb-6">💰 Payout Structure</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h3 className="text-xl font-bold mb-4 text-orange-600">Match 3 Numbers (Exact Order)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Bet KSH 10:</span>
                        <span className="font-bold text-green-600">Win KSH 3,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bet KSH 100:</span>
                        <span className="font-bold text-green-600">Win KSH 30,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bet KSH 1,000:</span>
                        <span className="font-bold text-green-600">Win KSH 300,000</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-100 rounded text-center">
                      <strong>300x Multiplier!</strong>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-400">
                    <h3 className="text-xl font-bold mb-4 text-blue-600">Match 2 Numbers (Exact Order)</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Bet KSH 10:</span>
                        <span className="font-bold text-green-600">Win KSH 100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bet KSH 100:</span>
                        <span className="font-bold text-green-600">Win KSH 1,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bet KSH 1,000:</span>
                        <span className="font-bold text-green-600">Win KSH 10,000</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 rounded text-center">
                      <strong>10x Multiplier!</strong>
                    </div>
                  </div>
                </div>
              </GameCard>
            </div>
          )}

          {/* Add other tab content similarly */}
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;

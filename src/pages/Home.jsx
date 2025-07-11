import React, { useState } from 'react';
import NumberGrid from '../components/NumberGrid';
import GameCard from '../components/GameCard';
import ResultsTable from '../components/ResultsTable';
import { oddsData } from '../utils/data';

const Home = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [stakeAmount, setStakeAmount] = useState('10');

  const handleNumberSelect = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < 3) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const generateRandomNumbers = () => {
    const numbers = [];
    while (numbers.length < 3) {
      const num = Math.floor(Math.random() * 10);
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    setSelectedNumbers(numbers);
  };

  const columns = [
    { key: 'bet', header: 'YOUR BET' },
    { key: 'numbers', header: 'YOUR NUMBERS' },
    { key: 'winning', header: 'WINNING NUMBERS' },
    { key: 'odds', header: 'ODDS' },
    { 
      key: 'multiplier', 
      header: 'MULTIPLIER',
      render: (value) => <span className="font-bold text-orange-600 text-xs md:text-sm">{value}</span>
    },
    { 
      key: 'payout', 
      header: 'YOU WOULD WIN',
      render: (value) => <span className="font-bold text-green-600 text-xs md:text-sm">{value}</span>
    },
  ];

  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-base md:text-lg mb-4">
              Join the <span className="font-bold text-amber-300">235</span> lucky people who have won in the last 24 hours!
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left side - Promotional Content */}
            <div className="flex-1 w-full">
              <GameCard className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 border-0 shadow-2xl">
                <div className="text-center p-6 md:p-8">
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <div className="bg-white rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
                      <span className="text-2xl md:text-4xl font-bold text-red-500">3</span>
                    </div>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    Turn your 100 Bob into KSH 30,000 in 30 Minutes!
                  </h2>
                  <p className="text-white/90 text-base md:text-lg">
                    Pick your 3 Lucky numbers from 0-9 to win 300x your Money
                  </p>
                </div>
              </GameCard>
            </div>

            {/* Right side - Game Form */}
            <div className="flex-1 w-full max-w-md">
              <GameCard className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                <div className="p-4 md:p-6">
                  <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2">DRAW EVERY 30 MINUTES</h3>
                    <input
                      type="tel"
                      placeholder="+254 Mobile Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full mb-4 px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
                    />
                  </div>

                  <div className="mb-4 md:mb-6">
                    <h4 className="text-center font-semibold mb-3 md:mb-4 text-sm md:text-base">WHAT ARE YOUR 3 LUCKY NUMBERS?</h4>
                    <div className="flex justify-center mb-3 md:mb-4">
                      <button
                        onClick={generateRandomNumbers}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold transition-colors"
                      >
                        RANDOM PICKS
                      </button>
                    </div>
                    
                    <NumberGrid 
                      selectedNumbers={selectedNumbers}
                      onNumberSelect={handleNumberSelect}
                    />

                    <div className="text-center mb-4">
                      <p className="mb-2 font-semibold text-sm md:text-base">YOUR STAKE</p>
                      <input
                        type="text"
                        value={`KSH ${stakeAmount} Min`}
                        onChange={(e) => setStakeAmount(e.target.value.replace(/[^\d]/g, ''))}
                        className="w-full text-center px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
                      />
                    </div>

                    <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 md:py-3 rounded-full text-base md:text-lg transition-all">
                      PLAY NOW
                    </button>
                  </div>
                </div>
              </GameCard>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            It's as easy as 1-2-3! Over{' '}
            <span className="text-red-500">KSH385,000,000</span> won so far!
          </h2>
        </div>
      </section>

      {/* Game Instructions */}
      <section className="py-12 md:py-16 gradient-bg">
        <div className="container mx-auto px-4">
          <GameCard className="bg-gradient-to-br from-red-500 to-red-600 border-0 shadow-2xl">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between text-white gap-4 md:gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-3xl font-bold mb-4">
                    Pick your 3 Lucky numbers from 0-9 to win 300x your Money
                  </h3>
                </div>
                <div className="bg-white rounded-full w-20 h-20 md:w-32 md:h-32 flex items-center justify-center shadow-lg">
                  <span className="text-3xl md:text-6xl font-bold text-red-500">3</span>
                </div>
              </div>
            </div>
          </GameCard>

          <div className="mt-8 md:mt-12 bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <p className="text-base md:text-lg text-gray-700 mb-4">
                Lucky 3 is a simple game where you can win up to <span className="font-bold text-red-500">KSH300,000!</span> Simply pick three single-digit numbers from 0-9 in any order you'd like and place your minimum 10 KES bet now.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Lucky 3 makes every day exciting with draws <span className="font-bold">every 30 minutes</span> 24 hours a day, seven days a week. You can win <span className="font-bold">300x</span> your bet with Lucky 3!
              </p>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-start space-x-3 md:space-x-4">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-base">1</span>
                <p className="text-gray-700 text-sm md:text-base">Go to M-PESA on your phone and select Lipa na M-PESA. Enter Mpesa paybill number 150150</p>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-base">2</span>
                <p className="text-gray-700 text-sm md:text-base">Enter your 3 lucky numbers from 0-9 followed by WEB on the account name section eg 637 WEB</p>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm md:text-base">3</span>
                <p className="text-gray-700 text-sm md:text-base">Enter your bet amount. Minimum 10 KES maximum 1,000 KES</p>
              </div>
            </div>

            <div className="text-center mt-6 md:mt-8">
              <p className="text-base md:text-lg font-semibold text-gray-700 mb-4">That's it! You will receive your ticket by SMS.</p>
              <p className="text-gray-600 mb-2 text-sm md:text-base">
                Match 2 or 3 numbers in order and you can win between <span className="font-bold text-red-500">KSH100</span> and <span className="font-bold text-red-500">KSH300,000</span>
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                You will receive an sms upon winning, and your winnings will automatically be transferred to your Mpesa account.
              </p>
              <p className="text-base md:text-lg font-semibold text-gray-700 mt-4">
                Join the <span className="text-red-500">235</span> lucky people who have won in the last 24 hours!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Odds Table */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Odds & Payouts - Example Table</h2>
            <p className="text-gray-600 text-sm md:text-base">Every bet is split into a "hybrid bet" - 50% is bet on matching 2 numbers and 50% is bet on matching 3 numbers.</p>
          </div>

          <GameCard className="shadow-xl">
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
                  {oddsData.map((row, rowIndex) => (
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
      </section>
    </div>
  );
};

export default Home;

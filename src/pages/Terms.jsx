import React from 'react';
import GameCard from '../components/GameCard';

const Terms = () => {
  return (
    <div className="gradient-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">Please read these terms carefully before playing Lucky 3</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <GameCard>
            <h2 className="text-2xl font-bold mb-4">📋 General Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By participating in Lucky 3, you agree to be bound by these Terms and Conditions. 
                These terms constitute a legally binding agreement between you and Lucky 3 Gaming Ltd.
              </p>
              <p>
                <strong>Effective Date:</strong> January 1, 2024<br />
                <strong>Last Updated:</strong> January 15, 2024
              </p>
            </div>
          </GameCard>

          <GameCard>
            <h2 className="text-2xl font-bold mb-4">🎯 Game Rules</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">How Lucky 3 Works</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Players select 3 numbers from 0-9 in a specific order</li>
                <li>Minimum bet amount is KSH 10, maximum is KSH 1,000</li>
                <li>Draws occur every 30 minutes, 24 hours a day, 7 days a week</li>
                <li>Each bet is automatically split: 50% for 2-number match, 50% for 3-number match</li>
                <li>Winning numbers must match in exact order (sequence matters)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">Payout Structure</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li><strong>3-Number Match:</strong> 300x your stake amount</li>
                  <li><strong>2-Number Match:</strong> 10x your stake amount</li>
                  <li><strong>1-Number or No Match:</strong> No payout</li>
                </ul>
              </div>
            </div>
          </GameCard>

          <GameCard>
            <h2 className="text-2xl font-bold mb-4">👤 Player Eligibility</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800">Age Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 18 years old to participate</li>
                <li>We may request age verification at any time</li>
                <li>Accounts of underage players will be immediately suspended</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800">Geographic Restrictions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service is available only to residents of Kenya</li>
                <li>Valid Kenyan mobile number required for participation</li>
                <li>M-PESA account must be registered in Kenya</li>
              </ul>
            </div>
          </GameCard>

          <div className="text-center text-gray-500 text-sm py-8">
            <p>Last Updated: January 15, 2024</p>
            <p>© 2024 Lucky 3 Gaming Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

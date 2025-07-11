import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LUCKY 3</h3>
            <p className="text-gray-400">Your chance to win big every 30 minutes!</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/how-to-play" className="hover:text-white transition-colors">How to Play</a></li>
              <li><a href="/results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="/winners" className="hover:text-white transition-colors">Winners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Payment</h4>
            <p className="text-gray-400">M-PESA Paybill: 150150</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lucky 3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

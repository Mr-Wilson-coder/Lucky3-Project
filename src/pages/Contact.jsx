import React, { useState } from 'react';
import GameCard from '../components/GameCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="gradient-bg py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-base md:text-lg text-gray-600">We're here to help! Get in touch with our support team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <GameCard>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
                <h3 className="text-lg md:text-xl font-bold">📞 Customer Support</h3>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">24/7</span>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Phone Support</h4>
                  <p className="text-blue-600 text-sm md:text-base">+254 700 123 456</p>
                  <p className="text-xs md:text-sm text-blue-500">Available 24 hours, 7 days a week</p>
                </div>
                <div className="p-3 md:p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 text-sm md:text-base">WhatsApp</h4>
                  <p className="text-green-600 text-sm md:text-base">+254 700 123 456</p>
                  <p className="text-xs md:text-sm text-green-500">Quick support via WhatsApp</p>
                </div>
                <div className="p-3 md:p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 text-sm md:text-base">Email</h4>
                  <p className="text-purple-600 text-sm md:text-base">support@lucky3.co.ke</p>
                  <p className="text-xs md:text-sm text-purple-500">Response within 2 hours</p>
                </div>
              </div>
            </GameCard>

            <GameCard>
              <h3 className="text-lg md:text-xl font-bold mb-4">🏢 Office Address</h3>
              <div className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                <p className="font-semibold">Lucky 3 Gaming Ltd.</p>
                <p>Westlands Road, Nairobi</p>
                <p>P.O. Box 12345-00100</p>
                <p>Nairobi, Kenya</p>
              </div>
              <div className="mt-3 md:mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Office Hours:</strong><br />
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </GameCard>

            <GameCard>
              <h3 className="text-lg md:text-xl font-bold mb-4">💳 Payment Support</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-800 text-sm md:text-base">M-PESA Paybill</span>
                  <span className="font-bold text-green-600 text-sm md:text-base">150150</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">
                  For payment issues, have your M-PESA transaction code ready when contacting support.
                </p>
              </div>
            </GameCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 mt-6 lg:mt-0">
            <GameCard>
              <h2 className="text-lg md:text-xl font-bold mb-6">✉️ Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your issue or question in detail..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2 text-sm md:text-base">📋 For Faster Support, Please Include:</h4>
                  <ul className="text-xs md:text-sm text-yellow-700 space-y-1">
                    <li>• Your phone number used for betting</li>
                    <li>• M-PESA transaction codes (if payment related)</li>
                    <li>• Specific date and time of the issue</li>
                    <li>• Screenshots if applicable</li>
                  </ul>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-2 md:py-3 rounded-lg transition-all text-sm md:text-base">
                  Send Message
                </button>
              </form>
            </GameCard>

            {/* FAQ Section */}
            <GameCard className="mt-6 md:mt-8">
              <h2 className="text-lg md:text-xl font-bold mb-6">❓ Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-gray-800 cursor-pointer py-2 border-b border-gray-200 text-sm md:text-base">
                    How do I check if I won?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-2 text-gray-600 text-sm md:text-base">
                    Winners are notified immediately via SMS. You can also check the Results page on our website or call our support line.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-gray-800 cursor-pointer py-2 border-b border-gray-200 text-sm md:text-base">
                    When will I receive my winnings?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-2 text-gray-600 text-sm md:text-base">
                    Winnings are automatically sent to your M-PESA account within 5 minutes of the draw results being confirmed.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-gray-800 cursor-pointer py-2 border-b border-gray-200 text-sm md:text-base">
                    Can I cancel a bet after payment?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-2 text-gray-600 text-sm md:text-base">
                    Once payment is confirmed, bets cannot be cancelled as they are immediately entered into the next available draw.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-gray-800 cursor-pointer py-2 border-b border-gray-200 text-sm md:text-base">
                    What if my M-PESA payment failed?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-2 text-gray-600 text-sm md:text-base">
                    If payment fails, you'll receive an SMS notification. No bet will be placed and no money will be deducted. You can try again.
                  </div>
                </details>
              </div>
            </GameCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

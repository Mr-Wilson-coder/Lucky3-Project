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
    <div className="gradient-bg py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We're here to help! Get in touch with our support team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <GameCard>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold">📞 Customer Support</h3>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">24/7</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Phone Support</h4>
                  <p className="text-blue-600">+254 700 123 456</p>
                  <p className="text-sm text-blue-500">Available 24 hours, 7 days a week</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">WhatsApp</h4>
                  <p className="text-green-600">+254 700 123 456</p>
                  <p className="text-sm text-green-500">Quick support via WhatsApp</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Email</h4>
                  <p className="text-purple-600">support@lucky3.co.ke</p>
                  <p className="text-sm text-purple-500">Response within 2 hours</p>
                </div>
              </div>
            </GameCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GameCard>
              <h2 className="text-2xl font-bold mb-6">✉️ Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </GameCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { CreditCard, DollarSign, Calendar, Heart, QrCode, Smartphone, Building, AlertCircle, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const Donation= () => {
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState(false);
  const [donationType, setDonationType] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount(false);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setDonationAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would process the payment here
    setShowThankYou(true);
    window.scrollTo(0, 0);
  };

  const impactStatements = [
    { amount: 25, impact: 'Provides educational materials for 5 children' },
    { amount: 50, impact: 'Sponsors a teacher training session' },
    { amount: 100, impact: 'Funds a community workshop for 20 participants' },
    { amount: 250, impact: 'Equips a classroom with learning technology' },
    { amount: 500, impact: 'Supports a rural school for one month' },
  ];

  const getImpactStatement = () => {
    if (!donationAmount) return '';
    
    // Find the closest impact statement without going over
    const validImpacts = impactStatements.filter(item => donationAmount >= item.amount);
    if (validImpacts.length === 0) return '';
    
    return validImpacts[validImpacts.length - 1].impact;
  };

  if (showThankYou) {
    return (
      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-[#94DEA5] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#023D54] mb-4">Thank You for Your Donation!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your generous contribution of ${typeof donationAmount === 'number' ? donationAmount.toFixed(2) : '0.00'} will make a real difference.
            </p>
            <p className="text-gray-600 mb-8">
              We've sent a confirmation email to {formData.email} with the details of your donation.
            </p>
            <div className="bg-[#023D54]/5 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#023D54] mb-3">Your Impact</h3>
              <p className="text-gray-700">{getImpactStatement() || 'Your donation helps support our educational programs'}</p>
            </div>
            <button 
              onClick={() => setShowThankYou(false)}
              className="bg-[#023D54] text-white py-3 px-8 rounded-lg hover:bg-[#023D54]/90 transition-all duration-300"
            >
              Make Another Donation
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070)' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Support Our Mission</h1>
            <p className="text-lg md:text-xl text-white/90">Your donation helps us create lasting change through education</p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Donation Information */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                  <h2 className="text-2xl font-bold text-[#023D54] mb-6">Your Donation</h2>
                  
                  {donationAmount && (
                    <div className="bg-[#94DEA5]/10 p-4 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Amount:</span>
                        <span className="text-xl font-bold text-[#023D54]">${typeof donationAmount === 'number' ? donationAmount.toFixed(2) : '0.00'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Type:</span>
                        <span className="text-[#023D54] capitalize">{donationType}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#023D54] mb-3">Your Impact</h3>
                    {donationAmount ? (
                      <p className="text-gray-700">{getImpactStatement() || 'Your donation helps support our educational programs'}</p>
                    ) : (
                      <p className="text-gray-700">Select an amount to see your impact</p>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-[#023D54] mb-3">Why Donate?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Heart className="w-5 h-5 text-[#94DEA5] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Support quality education for underprivileged children</span>
                      </li>
                      <li className="flex items-start">
                        <Heart className="w-5 h-5 text-[#94DEA5] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Empower communities through sustainable development</span>
                      </li>
                      <li className="flex items-start">
                        <Heart className="w-5 h-5 text-[#94DEA5] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Create lasting change for future generations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-[#023D54] mb-6">Make a Donation</h2>
                  
                  <form onSubmit={handleSubmit}>
                    {/* Donation Amount */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[#023D54] mb-4">Select Amount</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {[25, 50, 100, 250].map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            className={`py-3 px-4 rounded-lg border-2 transition-all ${
                              donationAmount === amount && !customAmount
                                ? 'border-[#94DEA5] bg-[#94DEA5]/10 text-[#023D54]'
                                : 'border-gray-200 hover:border-[#94DEA5] text-gray-700'
                            }`}
                            onClick={() => handleAmountSelect(amount)}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="Custom Amount"
                          min="1"
                          value={customAmount || donationAmount === '' ? donationAmount : ''}
                          onChange={handleCustomAmount}
                          onFocus={() => setCustomAmount(true)}
                          className="w-full py-3 px-4 pl-10 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                        />
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Donation Type */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[#023D54] mb-4">Donation Type</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
                            donationType === 'one-time'
                              ? 'border-[#94DEA5] bg-[#94DEA5]/10 text-[#023D54]'
                              : 'border-gray-200 hover:border-[#94DEA5] text-gray-700'
                          }`}
                          onClick={() => setDonationType('one-time')}
                        >
                          <DollarSign className="w-5 h-5 mr-2" />
                          One-time
                        </button>
                        <button
                          type="button"
                          className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
                            donationType === 'monthly'
                              ? 'border-[#94DEA5] bg-[#94DEA5]/10 text-[#023D54]'
                              : 'border-gray-200 hover:border-[#94DEA5] text-gray-700'
                          }`}
                          onClick={() => setDonationType('monthly')}
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Monthly
                        </button>
                      </div>
                    </div>
                    
                    {/* Payment Method */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[#023D54] mb-4">Payment Method</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        <button
                          type="button"
                          className={`py-3 px-4 rounded-lg border-2 transition-all flex flex-col items-center ${
                            paymentMethod === 'card'
                              ? 'border-[#94DEA5] bg-[#94DEA5]/10 text-[#023D54]'
                              : 'border-gray-200 hover:border-[#94DEA5] text-gray-700'
                          }`}
                          onClick={() => setPaymentMethod('card')}
                        >
                          <CreditCard className="w-6 h-6 mb-1" />
                          <span className="text-sm">Card</span>
                        </button>
                        <button
                          type="button"
                          className={`py-3 px-4 rounded-lg border-2 transition-all flex flex-col items-center ${
                            paymentMethod === 'paypal'
                              ? 'border-[#94DEA5] bg-[#94DEA5]/10 text-[#023D54]'
                              : 'border-gray-200 hover:border-[#94DEA5] text-gray-700'
                          }`}
                          onClick={() => setPaymentMethod('paypal')}
                        >
                          <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.641.641 0 0 1 .632-.539h6.964c2.075 0 3.75.417 4.756 1.252 1.006.835 1.355 2.07 1.054 3.795-.109.626-.29 1.202-.539 1.724a6.8 6.8 0 0 1-.985 1.475 5.388 5.388 0 0 1-1.534 1.14 7.365 7.365 0 0 1-2.12.714 11.954 11.954 0 0 1-2.796.236H7.988L7.076 21.337zM19.259 7.82c.03-.22.058-.444.084-.672.303-2.637-.442-4.416-2.187-5.382C15.53.86 13.082.5 10.255.5H3.424C2.144.5 1.077 1.395.82 2.643L.011 9.112c-.045.35.235.672.586.672h5.613c.38 0 .624-.407.53-.77l-.157-.607c-.045-.174.08-.348.258-.348h1.32c2.604 0 4.629-.631 5.941-1.87 1.312-1.24 1.955-2.897 1.87-4.977l-.022-.348c-.011-.174.126-.326.3-.326h1.32c.45 0 .83.326.866.77l.823 5.512z" />
                          </svg>
                          <span className="text-sm">PayPal</span>
                        </button>
                        <button
                          type="button"
                          className={`py-3 px-4 rounded-lg border-2 transition-all flex flex-col items-center ${
                            paymentMethod === 'gpay'
                              ? 'border-[#94DEA5] bg-[#94DEA5]/10 text-[#023D54]'
                              : 'border-gray-200 hover:border-[#94DEA5] text-gray-700'
                          }`}
                          onClick={() => setPaymentMethod('gpay')}
                        >
                          <Smartphone className="w-6 h-6 mb-1" />
                          <span className="text-sm">Google Pay</span>
                        </button>
                        <button
                          type="button"
                          className={`py-3 px-4 rounded-lg border-2 transition-all flex flex-col items-center ${
                            paymentMethod === 'bank'
                              ? 'border-[#94DEA5] bg-[#94DEA5]/10 text-[#023D54]'
                              : 'border-gray-200 hover:border-[#94DEA5] text-gray-700'
                          }`}
                          onClick={() => setPaymentMethod('bank')}
                        >
                          <Building className="w-6 h-6 mb-1" />
                          <span className="text-sm">Bank</span>
                        </button>
                      </div>
                      
                      {/* QR Code Option */}
                      <div className="bg-[#023D54]/5 p-6 rounded-lg mb-6">
                        <div className="flex flex-col md:flex-row items-center">
                          <div className="mb-4 md:mb-0 md:mr-6 bg-white p-3 rounded-lg">
                            <QrCode className="w-24 h-24 text-[#023D54]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#023D54] mb-2">Scan to Donate</h4>
                            <p className="text-gray-700 mb-3">
                              Use your phone's camera to scan this QR code and make a quick donation.
                            </p>
                            <button
                              type="button"
                              className="text-[#023D54] font-medium hover:text-[#94DEA5] transition-colors flex items-center"
                            >
                              Download QR Code
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Personal Information */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[#023D54] mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name*</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name*</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-1">Email*</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-gray-700 mb-1">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-gray-700 mb-1">Country</label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full py-3 px-4 rounded-lg border-2 border-gray-200 focus:border-[#94DEA5] focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Security Note */}
                    <div className="bg-[#023D54]/5 p-4 rounded-lg mb-8 flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#023D54] mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">
                        Your payment information is securely processed. We do not store your credit card details.
                        All transactions are encrypted and protected.
                      </p>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!donationAmount}
                      className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
                        donationAmount
                          ? 'bg-[#94DEA5] hover:bg-[#82c896]'
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                    >
                      Complete Donation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[#023D54]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Your Donation Makes a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-[#94DEA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
              <p className="text-white/80">Providing quality education to underprivileged children</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-[#94DEA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Infrastructure</h3>
              <p className="text-white/80">Building and improving educational facilities</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-[#94DEA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-white/80">Empowering communities through sustainable development</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-[#94DEA5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Health</h3>
              <p className="text-white/80">Supporting health and wellness programs for children</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023D54] mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#023D54] mb-3">Is my donation tax-deductible?</h3>
                <p className="text-gray-700">Yes, KSHRujan Foundation is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#023D54] mb-3">How is my donation used?</h3>
                <p className="text-gray-700">Your donation directly supports our educational programs, infrastructure development, teacher training, and community empowerment initiatives. We ensure that at least 85% of all donations go directly to our programs.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#023D54] mb-3">Can I make a recurring donation?</h3>
                <p className="text-gray-700">Yes, you can set up monthly recurring donations. This helps us plan our programs more effectively and ensures sustainable support for our initiatives.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#023D54] mb-3">Is my payment information secure?</h3>
                <p className="text-gray-700">Absolutely. We use industry-standard encryption and security protocols to protect your personal and payment information. We do not store your credit card details on our servers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Giving */}
      <section className="py-16 bg-[#023D54]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#023D54] mb-6">Corporate Giving</h2>
                <p className="text-gray-700 mb-6">
                  Partner with KSHRujan Foundation to make a significant impact on education and community development. Our corporate partnerships help us expand our reach and create sustainable change.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#94DEA5] rounded-full p-1 mr-4 mt-1">
                      <div className="bg-white rounded-full w-4 h-4"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023D54]">Sponsorship Opportunities</h4>
                      <p className="text-gray-600">Support specific programs or events</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#94DEA5] rounded-full p-1 mr-4 mt-1">
                      <div className="bg-white rounded-full w-4 h-4"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023D54]">Matching Gift Programs</h4>
                      <p className="text-gray-600">Double the impact of employee donations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#94DEA5] rounded-full p-1 mr-4 mt-1">
                      <div className="bg-white rounded-full w-4 h-4"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023D54]">Cause Marketing</h4>
                      <p className="text-gray-600">Align your brand with our mission</p>
                    </div>
                  </div>
                </div>
                <button className="bg-[#023D54] text-white py-3 px-6 rounded-md hover:bg-[#023D54]/90 transition-colors">
                  Contact Our Partnership Team
                </button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070" 
                  alt="Corporate partnership" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
};

export default Donation;
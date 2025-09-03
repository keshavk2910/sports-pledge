import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout';
import DonationHero from '../../components/DonationHero';
import CallToAction from '../../components/CallToAction';
import { avatarImage } from '../../components/images/shared';

export default function DonatePage() {
  const router = useRouter();
  const { campaignId } = router.query;
  const [currentStep, setCurrentStep] = useState(1);
  const [donationType, setDonationType] = useState('one-time');

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // Mock campaign data
  const campaign = {
    id: campaignId,
    name: 'East Side Eagles',
    description: 'New Equipment Fundraiser',
    sport: 'Basketball',
    location: 'Portland, OR',
    dates: 'May 1 - June 30, 2023',
    raised: 8500,
    goal: 10000,
    progress: 85
  };

  const steps = [
    { number: 1, title: 'Select Donation Type', active: currentStep === 1 },
    { number: 2, title: 'Your Information', active: currentStep === 2 },
    { number: 3, title: 'Payment Details', active: currentStep === 3 },
    { number: 4, title: 'Review & Confirm', active: currentStep === 4 }
  ];

  const amountOptions = [25, 50, 100, 250];
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedStats, setSelectedStats] = useState({
    teamRoster: { enabled: true, amount: 1 },
    rebounds: { enabled: true, amount: 2 },
    assists: { enabled: false, amount: 1 },
    threePointers: { enabled: false, amount: 1 },
    wins: { enabled: false, amount: 1 },
    blocks: { enabled: false, amount: 7 }
  });
  const [maxCap, setMaxCap] = useState(1000);
  const [billingFrequency, setBillingFrequency] = useState('after-each-game');

  const stats = [
    { key: 'teamRoster', title: 'Team Roster', description: 'Pledge per point scored by the team', avgPoints: 65, icon: '🏀' },
    { key: 'rebounds', title: 'Rebounds', description: 'Pledge per rebound by the team', avgPoints: 65, icon: '🏀' },
    { key: 'assists', title: 'Assists', description: 'Pledge per assist by the team', avgPoints: 65, icon: '🏀' },
    { key: 'threePointers', title: 'Three-Pointers', description: 'Pledge per three-pointer made', avgPoints: 65, icon: '🏀' },
    { key: 'wins', title: 'Wins', description: 'Pledge per game won', avgPoints: 65, icon: '🏀' },
    { key: 'blocks', title: 'Blocks', description: 'Pledge per blocked shot', avgPoints: 65, icon: '🏀' }
  ];

  const handleStatToggle = (statKey) => {
    setSelectedStats(prev => ({
      ...prev,
      [statKey]: {
        ...prev[statKey],
        enabled: !prev[statKey].enabled
      }
    }));
  };

  const handleStatAmountChange = (statKey, amount) => {
    setSelectedStats(prev => ({
      ...prev,
      [statKey]: {
        ...prev[statKey],
        amount: Number(amount)
      }
    }));
  };

  const calculatePledgeEstimate = () => {
    let total = 0;
    Object.entries(selectedStats).forEach(([key, stat]) => {
      if (stat.enabled) {
        const avgPoints = stats.find(s => s.key === key)?.avgPoints || 65;
        total += stat.amount * avgPoints;
      }
    });
    return Math.min(total, maxCap);
  };

  const onSubmit = (data) => {
    console.log('Form data:', data);
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Layout>
      <DonationHero campaign={campaign} />

      {/* Main Form Section */}
      <main className="relative bg-[#F3F4F6] -mt-22" style={{clipPath: 'polygon(0px 5%, 100% 0px, 100% 94%, 0% 100%)'}}>
        <div className="py-18">
          <div className="max-w-5xl mx-auto">
            {/* Step Progress */}
            <div className="w-full py-8">
              {/* Desktop Progress */}
              <div className="hidden md:block relative">
                <div className="relative grid grid-cols-4 gap-0">
                  {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-medium transition-all duration-300 ${
                        step.active ? 'bg-[#EF6C2F] text-white shadow-lg' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step.number}
                      </div>
                      <div className="mt-4 text-center max-w-40">
                        <h3 className={`text-sm font-medium leading-tight ${
                          step.active ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-300 mt-3.5 h-1 w-full relative">
                  <span 
                    className="bg-[#EF6C2F] h-1 inline-block absolute top-0 rounded-full transition-all duration-500"
                    style={{
                      width: '122px',
                      left: `${((currentStep - 1) / 3) * 100}%`
                    }}
                  ></span>
                </div>
              </div>

              {/* Mobile Progress */}
              <div className="block md:hidden">
                <div className="flex items-center justify-between mb-4">
                  {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.active ? 'bg-[#EF6C2F] text-white shadow-lg' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step.number}
                      </div>
                      {index < steps.length - 1 && <div className="h-1 w-16 mx-2 bg-gray-300"></div>}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {steps.find(step => step.active)?.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="pb-48 -mb-18">
          <div className="bg-white rounded-lg max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {currentStep === 1 && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Donation Type</h2>
                
                {/* Donation Type Toggle */}
                <div className="mb-6">
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button 
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 px-6 rounded-md text-base font-medium transition-all ${
                        donationType === 'one-time' 
                          ? 'bg-[#EF6C2F] text-white shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      One-Time Donation
                    </button>
                    <button 
                      onClick={() => setDonationType('per-stat')}
                      className={`flex-1 py-3 px-6 rounded-md text-base font-medium transition-all ${
                        donationType === 'per-stat' 
                          ? 'bg-[#EF6C2F] text-white shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Per-Stat Pledge
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Per-stat pledges are charged after games based on player performance. Support the team based on their achievements!
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {donationType === 'one-time' ? (
                    <>
                      {/* One-Time Donation - Amount Selection */}
                      <div>
                        <h3 className="text-base font-medium text-gray-700 mb-4">Select Amount</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                          {amountOptions.map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => setSelectedAmount(amount)}
                              className={`h-10 rounded-lg border text-sm font-medium transition-all ${
                                selectedAmount === amount
                                  ? 'bg-[#EF6C2F] text-white border-[#EF6C2F]'
                                  : 'bg-gray-100 text-gray-600 border-gray-100 hover:bg-gray-200'
                              }`}
                            >
                              ${amount}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Custom Amount */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Custom Amount</h3>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <input
                            {...register('customAmount')}
                            placeholder="Enter amount"
                            className="w-full h-14 pl-8 pr-4 border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sports-orange focus:border-transparent"
                            type="number"
                            min="1"
                            step="1"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Per-Stat Pledge - Statistics Selection */}
                      <div className="mb-8">
                        <h3 className="text-base font-medium text-gray-700 mb-4">Select Statistics to Pledge For</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {stats.map((stat) => (
                            <div key={stat.key} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-xl">{stat.icon}</span>
                                  <h4 className="font-semibold text-gray-900">{stat.title}</h4>
                                </div>
                                <input
                                  type="checkbox"
                                  checked={selectedStats[stat.key]?.enabled || false}
                                  onChange={() => handleStatToggle(stat.key)}
                                  className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                />
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{stat.description}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500">$</span>
                                <input
                                  type="number"
                                  value={selectedStats[stat.key]?.amount || 1}
                                  onChange={(e) => handleStatAmountChange(stat.key, e.target.value)}
                                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-center"
                                  min="1"
                                  disabled={!selectedStats[stat.key]?.enabled}
                                />
                                <span className="text-gray-500">per point</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-2">📊 Avg: {stat.avgPoints} points</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pledge Estimator */}
                      <div className="bg-[#2C3E50] text-white p-6 rounded-lg mb-8">
                        <div className="flex items-center mb-4">
                          <span className="text-lg">📊</span>
                          <h3 className="text-lg font-semibold ml-2">Pledge Estimator</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <h4 className="text-sm font-medium mb-1">Per Game Estimate</h4>
                            <p className="text-2xl font-bold">${calculatePledgeEstimate()}</p>
                            <p className="text-xs opacity-80">Based on average team performance</p>
                          </div>
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <h4 className="text-sm font-medium mb-1">Monthly Estimate</h4>
                            <p className="text-2xl font-bold">${calculatePledgeEstimate()}</p>
                            <p className="text-xs opacity-80">Based on 4 games per month</p>
                          </div>
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <h4 className="text-sm font-medium mb-1">Season Total</h4>
                            <p className="text-2xl font-bold">${calculatePledgeEstimate()}</p>
                            <p className="text-xs opacity-80">Based on 20 game season</p>
                          </div>
                        </div>
                        <div className="border-t border-white/20 pt-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Set a maximum cap (optional)</span>
                            <div className="flex items-center gap-2">
                              <span>$</span>
                              <input
                                type="number"
                                value={maxCap}
                                onChange={(e) => setMaxCap(Number(e.target.value))}
                                className="w-24 px-2 py-1 bg-white/20 border border-white/30 rounded text-white text-center"
                                min="1"
                              />
                            </div>
                          </div>
                          <p className="text-xs opacity-80 mt-1">Limit your total contribution for the season</p>
                        </div>
                      </div>

                      {/* Billing Frequency */}
                      <div className="mb-8">
                        <h3 className="text-base font-medium text-gray-700 mb-4">Billing Frequency</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { key: 'after-each-game', title: 'After Each Game', selected: billingFrequency === 'after-each-game' },
                            { key: 'weekly', title: 'Weekly', selected: billingFrequency === 'weekly' },
                            { key: 'monthly', title: 'Monthly', selected: billingFrequency === 'monthly' }
                          ].map((option) => (
                            <button
                              key={option.key}
                              type="button"
                              onClick={() => setBillingFrequency(option.key)}
                              className={`p-4 border rounded-lg text-center transition-all ${
                                option.selected
                                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center justify-center">
                                <div className={`w-4 h-4 rounded-full border-2 mr-2 ${
                                  option.selected ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
                                }`}>
                                  {option.selected && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>}
                                </div>
                                <span className="font-medium">{option.title}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Processing Fee Option */}
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <input
                          type="checkbox"
                          id="processingFee"
                          className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <div>
                          <label htmlFor="processingFee" className="text-sm font-medium text-gray-900">
                            Add 5% to cover processing fees
                          </label>
                          <p className="text-xs text-gray-600">This ensures the team receives your full intended donation amount.</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Message - Common for both types */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Add a Message (Optional)</h3>
                    <textarea
                      {...register('message')}
                      placeholder="Write a message of support..."
                      className="w-full h-[120px] p-4 border border-gray-400 rounded-lg text-gray-700 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-sports-orange focus:border-transparent"
                    />
                  </div>

                  {/* Continue Button */}
                  <div className="flex justify-end">
                    <button 
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="bg-[#EF6C2F] text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer"
                    >
                      Continue to Personal Information
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      {...register('fullName', { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (optional)</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address (optional)</label>
                    <input
                      {...register('address')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your address"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        {...register('makeAnonymous')}
                        type="checkbox"
                        id="makeAnonymous"
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label htmlFor="makeAnonymous" className="ml-3 text-sm font-medium text-gray-700">
                        Make my donation anonymous
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        {...register('subscribeUpdates')}
                        type="checkbox"
                        id="subscribeUpdates"
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label htmlFor="subscribeUpdates" className="ml-3 text-sm font-medium text-gray-700">
                        Subscribe to updates from this team
                      </label>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <button 
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button 
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="bg-[#EF6C2F] text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                    >
                      Continue to Payment Details
                    </button>
                  </div>
                </form>

                {/* Secure Process Notice */}
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center text-green-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Secure Donation Process</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your payment information is encrypted and secure. We never store your full credit card details.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Payment Details */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Credit Card Section */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                        </svg>
                        <span className="text-base font-medium text-gray-700">Credit / Debit Card</span>
                      </div>
                      <div className="flex gap-1">
                        {/* Credit Card Icons */}
                        <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                          MC
                        </div>
                        <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                          DC
                        </div>
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          AX
                        </div>
                      </div>
                    </div>

                    {/* Card Number */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        {...register('cardNumber', { required: true })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    {/* Expiry and CVV */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                        <input
                          {...register('expiry', { required: true })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="MM / YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          {...register('cvv', { required: true })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    {/* Name on Card */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                      <input
                        {...register('nameOnCard', { required: true })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Card Number"
                      />
                    </div>

                    {/* Address */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address (optional)</label>
                      <input
                        {...register('billingAddress')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your billing address"
                      />
                    </div>

                    {/* Save Payment Info Checkbox */}
                    <div className="flex items-center mb-6">
                      <input
                        {...register('savePaymentInfo')}
                        type="checkbox"
                        id="savePaymentInfo"
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label htmlFor="savePaymentInfo" className="ml-3 text-sm font-medium text-gray-700">
                        Save my payment information for future donations
                      </label>
                    </div>

                    {/* Security Notice */}
                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Your payment information is secure and encrypted. We never store your full card details.</span>
                    </div>

                    {/* Alternative Payment Methods */}
                    <div className="flex justify-center gap-4 mb-8">
                      <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        <span className="text-sm font-medium">PayPal</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs">🍎</span>
                        </div>
                        <span className="text-sm font-medium">Apple Pay</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">G</span>
                        </div>
                        <span className="text-sm font-medium">Google Pay</span>
                      </button>
                    </div>

                    {/* Donate Now Button */}
                    <button 
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="w-full bg-[#EF6C2F] text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
                    >
                      Donate Now
                    </button>
                  </div>
                </form>

                {/* Bottom Security Notice */}
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center text-green-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Secure Donation Process</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Donation Confirmation */}
            {currentStep === 4 && (
              <div className="bg-white rounded-lg p-8">
                {/* Confirmation Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Donation Confirmed</h2>
                  <p className="text-sm text-gray-600">Thank you for your support!</p>
                </div>

                {/* Donation Details */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">One-time donation</span>
                      <span className="text-sm font-semibold">$5.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Processing fee</span>
                      <span className="text-sm font-semibold">$0.30</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-base font-semibold text-gray-900">Total amount</span>
                        <span className="text-base font-semibold">$5.30</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    A receipt has been sent to your email regarding your contribution. 
                    You are now part of the donations. Thank you so much and congratulations.
                  </p>
                </div>

                {/* Your Impact Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
                  
                  {/* Team Card */}
                  <div className="border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                        <img 
                          src={avatarImage.src} 
                          alt="East Side Eagles" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">East Side Eagles</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>📍 Portland • 🏀 Basketball • 📅 May 1 - Jul 1</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">
                          Your donation helps our team reach competitive tournaments and equipment we need to keep training. 
                          Thank you for the team support. Thank you so much for helping our team set out to grow...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coach Message */}
                  <div className="bg-[#EF6C2F] text-white p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3">🏀 Coach Message</h4>
                    <p className="text-sm leading-relaxed">
                      &quot;Thank you so much for your generous support. Your contribution will help our team get the equipment we need to 
                      succeed. We look forward to representing our community and striving for great this season.&quot;
                    </p>
                    <p className="text-sm mt-3 opacity-90">
                      - Coach Johnson and the East Side Eagles
                    </p>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* What's Next Section - Outside Form Box */}
          {currentStep === 4 && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Download Receipt */}
                  <div className="text-center p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Download Receipt</h4>
                    <p className="text-xs text-gray-600 mb-3">Save a copy of your donation receipt for your records</p>
                    <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded">Download PDF</button>
                  </div>

                  {/* Print Receipt */}
                  <div className="text-center p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Print Receipt</h4>
                    <p className="text-xs text-gray-600 mb-3">Print a physical copy of your donation confirmation</p>
                    <button className="bg-gray-800 text-white text-xs px-4 py-2 rounded">Print Receipt</button>
                  </div>

                  {/* Share Support */}
                  <div className="text-center p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Share Your Support</h4>
                    <p className="text-xs text-gray-600 mb-3">Help spread the word and encourage others to support this team</p>
                    <div className="flex justify-center gap-2">
                      <button className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center">f</button>
                      <button className="w-6 h-6 bg-blue-400 rounded text-white text-xs flex items-center justify-center">t</button>
                      <button className="w-6 h-6 bg-pink-500 rounded text-white text-xs flex items-center justify-center">i</button>
                      <button className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center">w</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Team Section */}
              <div className="bg-[#2C3E50] text-white p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Follow the East Side Eagles</h3>
                <p className="text-sm opacity-90 mb-4">Stay updated on the team&apos;s progress and upcoming games.</p>
                <button className="bg-[#EF6C2F] text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Visit Team Page
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <CallToAction />
    </Layout>
  );
}
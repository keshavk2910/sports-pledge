import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function PlayerDonationForm({ player, onSubmit }) {
  const [donationType, setDonationType] = useState('one-time');
  const [fundDirection, setFundDirection] = useState(true); // true = direct to player
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAllocation, setSelectedAllocation] = useState('shoes');

  // Per-stat pledge states
  const [selectedStats, setSelectedStats] = useState({
    points: { enabled: true, amount: 2 },
    rebounds: { enabled: false, amount: 1 },
    assists: { enabled: false, amount: 3 },
    steals: { enabled: false, amount: 5 },
    blocks: { enabled: false, amount: 10 },
    threePointers: { enabled: false, amount: 5 },
  });
  const [maxCap, setMaxCap] = useState(1000);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const stats = [
    {
      key: 'points',
      title: 'Points Scored',
      description: 'Pledge per point scored by Marcus',
      avgPerGame: 18.4,
      icon: '🏀',
    },
    {
      key: 'rebounds',
      title: 'Rebounds',
      description: 'Pledge per rebound by Marcus',
      avgPerGame: 4.2,
      icon: '🏀',
    },
    {
      key: 'assists',
      title: 'Assists',
      description: 'Pledge per assist by Marcus',
      avgPerGame: 3.1,
      icon: '🏀',
    },
    {
      key: 'steals',
      title: 'Steals',
      description: 'Pledge per steal by Marcus',
      avgPerGame: 2.8,
      icon: '🏀',
    },
    {
      key: 'blocks',
      title: 'Blocks',
      description: 'Pledge per block by Marcus',
      avgPerGame: 0.5,
      icon: '🏀',
    },
    {
      key: 'threePointers',
      title: 'Three-Pointers',
      description: 'Pledge per three-pointer made',
      avgPerGame: 2.1,
      icon: '🏀',
    },
  ];

  const handleStatToggle = (statKey) => {
    setSelectedStats((prev) => ({
      ...prev,
      [statKey]: {
        ...prev[statKey],
        enabled: !prev[statKey].enabled,
      },
    }));
  };

  const handleStatAmountChange = (statKey, amount) => {
    setSelectedStats((prev) => ({
      ...prev,
      [statKey]: {
        ...prev[statKey],
        amount: Number(amount),
      },
    }));
  };

  const calculatePledgeEstimate = () => {
    let total = 0;
    Object.entries(selectedStats).forEach(([key, stat]) => {
      if (stat.enabled) {
        const avgPerGame = stats.find((s) => s.key === key)?.avgPerGame || 0;
        total += stat.amount * avgPerGame;
      }
    });
    return Math.min(total, maxCap);
  };

  const handleFormSubmit = (data) => {
    const formData = {
      ...data,
      donationType,
      fundDirection: fundDirection ? 'direct-to-player' : 'team-fund',
      amount: customAmount || selectedAmount,
      selectedStats: donationType === 'per-stat' ? selectedStats : null,
      maxCap: donationType === 'per-stat' ? maxCap : null,
      allocation: selectedAllocation,
      playerId: player.id,
    };

    if (onSubmit) {
      onSubmit(formData);
    }
    console.log('Player donation form data:', formData);
  };

  return (
    <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl mx-auto text-center relative z-10'>
      <h2 className='text-2xl font-bold mb-6'>
        Support {player.name}&apos;s Season
      </h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-6'>
        {/* Donation Type Toggle */}
        <div className='flex justify-center mb-6'>
          <button
            type='button'
            onClick={() => setDonationType('one-time')}
            className={`px-6 py-2 rounded-l-lg font-semibold transition-colors ${
              donationType === 'one-time'
                ? 'bg-[#EF6C2F] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            One-Time Donation
          </button>
          <button
            type='button'
            onClick={() => setDonationType('per-stat')}
            className={`px-6 py-2 rounded-r-lg font-semibold transition-colors ${
              donationType === 'per-stat'
                ? 'bg-[#EF6C2F] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Per-Stat Pledge
          </button>
        </div>

        {/* Fund Direction Toggle */}
        <div className='flex items-center justify-center gap-4 mb-4'>
          <span className='text-gray-700 font-semibold'>Team Fund</span>
          <label
            htmlFor='fundToggle'
            className='relative inline-flex items-center cursor-pointer'
          >
            <input
              id='fundToggle'
              className='sr-only peer'
              type='checkbox'
              checked={fundDirection}
              onChange={(e) => setFundDirection(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0057FF]"></div>
          </label>
          <span className='text-gray-700 font-semibold'>
            Direct to {player.name.split(' ')[0]}
          </span>
        </div>
        <p className='text-sm text-gray-600 mb-6'>
          Your donation will be directed specifically to{' '}
          {player.name.split(' ')[0]}&apos;s equipment and training needs.
        </p>

        {donationType === 'one-time' ? (
          <>
            {/* One-Time Donation Amount Selection */}
            <div className='grid grid-cols-4 gap-4 mb-4'>
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  type='button'
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`px-4 py-3 rounded-lg font-semibold hover:cursor-pointer transition-colors ${
                    selectedAmount === amount && !customAmount
                      ? 'bg-[#EF6C2F] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className='relative mb-6'>
              <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500'>
                $
              </span>
              <input
                {...register('customAmount')}
                placeholder='Custom Amount'
                className='w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057FF] text-gray-700'
                type='number'
                min='1'
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  if (e.target.value) setSelectedAmount(0);
                }}
              />
              {errors.customAmount && (
                <p className='text-red-500 text-sm mt-1'>
                  Please enter a valid amount
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Per-Stat Pledge - Statistics Selection */}
            <div className='mb-8'>
              <h3 className='text-base font-medium text-gray-700 mb-4'>
                Select Statistics to Pledge For
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className='border border-gray-200 rounded-lg p-4'
                  >
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-2'>
                        <span className='text-xl'>{stat.icon}</span>
                        <h4 className='font-semibold text-gray-900'>
                          {stat.title}
                        </h4>
                      </div>
                      <input
                        type='checkbox'
                        checked={selectedStats[stat.key]?.enabled || false}
                        onChange={() => handleStatToggle(stat.key)}
                        className='w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500'
                      />
                    </div>
                    <p className='text-sm text-gray-600 mb-3'>
                      {stat.description}
                    </p>
                    <div className='flex items-center gap-2'>
                      <span className='text-gray-500'>$</span>
                      <input
                        type='number'
                        value={selectedStats[stat.key]?.amount || 1}
                        onChange={(e) =>
                          handleStatAmountChange(stat.key, e.target.value)
                        }
                        className='flex-1 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-orange-500'
                        min='1'
                        disabled={!selectedStats[stat.key]?.enabled}
                      />
                      <span className='text-gray-500'>
                        per{' '}
                        {stat.key === 'threePointers'
                          ? '3PT'
                          : stat.key.slice(0, -1)}
                      </span>
                    </div>
                    <p className='text-xs text-gray-500 mt-2'>
                      📊 Avg: {stat.avgPerGame} per game
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pledge Estimator */}
            <div className='bg-[#2C3E50] text-white p-6 rounded-lg mb-8'>
              <div className='flex items-center mb-4'>
                <span className='text-lg'>📊</span>
                <h3 className='text-lg font-semibold ml-2'>Pledge Estimator</h3>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                <div className='bg-white/10 p-4 rounded-lg text-center'>
                  <h4 className='text-sm font-medium mb-1'>
                    Per Game Estimate
                  </h4>
                  <p className='text-2xl font-bold'>
                    ${calculatePledgeEstimate()}
                  </p>
                  <p className='text-xs opacity-80'>
                    Based on average performance
                  </p>
                </div>
                <div className='bg-white/10 p-4 rounded-lg text-center'>
                  <h4 className='text-sm font-medium mb-1'>Monthly Estimate</h4>
                  <p className='text-2xl font-bold'>
                    ${calculatePledgeEstimate() * 4}
                  </p>
                  <p className='text-xs opacity-80'>
                    Based on 4 games per month
                  </p>
                </div>
                <div className='bg-white/10 p-4 rounded-lg text-center'>
                  <h4 className='text-sm font-medium mb-1'>Season Total</h4>
                  <p className='text-2xl font-bold'>
                    ${Math.min(calculatePledgeEstimate() * 20, maxCap)}
                  </p>
                  <p className='text-xs opacity-80'>
                    Based on 20 game season (capped)
                  </p>
                </div>
              </div>
              <div className='border-t border-white/20 pt-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Set a maximum cap (optional)</span>
                  <div className='flex items-center gap-2'>
                    <span>$</span>
                    <input
                      type='number'
                      value={maxCap}
                      onChange={(e) => setMaxCap(Number(e.target.value))}
                      className='w-24 px-2 py-1 bg-white/20 border border-white/30 rounded text-white text-center focus:outline-none focus:ring-2 focus:ring-white/50'
                      min='1'
                    />
                  </div>
                </div>
                <p className='text-xs opacity-80 mt-1'>
                  Limit your total contribution for the season
                </p>
              </div>
            </div>
          </>
        )}

        {/* Allocation Options */}
        <div className='text-left mb-6'>
          <h3 className='text-lg font-bold mb-3'>
            Allocate your donation (optional):
          </h3>
          <div className='space-y-2'>
            <label className='flex items-center cursor-pointer'>
              <input
                className='form-radio text-[#0057FF] focus:ring-[#0057FF]'
                type='radio'
                name='allocation'
                value='uniforms'
                checked={selectedAllocation === 'uniforms'}
                onChange={(e) => setSelectedAllocation(e.target.value)}
              />
              <span className='ml-2 text-gray-700'>Uniforms</span>
            </label>
            <label className='flex items-center cursor-pointer'>
              <input
                className='form-radio text-[#0057FF] focus:ring-[#0057FF]'
                type='radio'
                name='allocation'
                value='shoes'
                checked={selectedAllocation === 'shoes'}
                onChange={(e) => setSelectedAllocation(e.target.value)}
              />
              <span className='ml-2 text-gray-700'>Performance Shoes</span>
            </label>
            <label className='flex items-center cursor-pointer'>
              <input
                className='form-radio text-[#0057FF] focus:ring-[#0057FF]'
                type='radio'
                name='allocation'
                value='camp'
                checked={selectedAllocation === 'camp'}
                onChange={(e) => setSelectedAllocation(e.target.value)}
              />
              <span className='ml-2 text-gray-700'>Summer Skills Camp</span>
            </label>
            <label className='flex items-center cursor-pointer'>
              <input
                className='form-radio text-[#0057FF] focus:ring-[#0057FF]'
                type='radio'
                name='allocation'
                value='general'
                checked={selectedAllocation === 'general'}
                onChange={(e) => setSelectedAllocation(e.target.value)}
              />
              <span className='ml-2 text-gray-700'>General Support</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div className='text-left mb-6'>
          <h3 className='text-lg font-bold mb-3'>Add a message (optional)</h3>
          <textarea
            {...register('message')}
            placeholder={`Enter a message of support for ${
              player.name.split(' ')[0]
            }...`}
            rows='4'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057FF] text-gray-700 resize-none'
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-[#EF6C2F] text-white py-3 px-6 rounded-lg w-full font-semibold hover:bg-orange-600 transition duration-200 mb-4'
        >
          Complete Donation
        </button>

        <p className='text-sm font-semibold text-gray-500'>
          All donations are secure and tax-deductible where applicable.
        </p>

        {/* Current Selection Display */}
        <div className='mt-6 p-4 bg-gray-50 rounded-lg text-left'>
          <h4 className='font-semibold text-gray-900 mb-2'>
            Donation Summary:
          </h4>
          <div className='space-y-1 text-sm text-gray-700'>
            <p>
              <span className='font-medium'>Type:</span>{' '}
              {donationType === 'one-time'
                ? 'One-Time Donation'
                : 'Per-Stat Pledge'}
            </p>
            <p>
              <span className='font-medium'>Amount:</span> $
              {customAmount || selectedAmount}
            </p>
            {donationType === 'per-stat' && (
              <>
                <p>
                  <span className='font-medium'>Estimated per game:</span> $
                  {calculatePledgeEstimate()}
                </p>
                <p>
                  <span className='font-medium'>Season cap:</span> ${maxCap}
                </p>
              </>
            )}
            <p>
              <span className='font-medium'>Direction:</span>{' '}
              {fundDirection
                ? `Direct to ${player.name.split(' ')[0]}`
                : 'Team Fund'}
            </p>
            <p>
              <span className='font-medium'>Allocation:</span>{' '}
              {selectedAllocation.charAt(0).toUpperCase() +
                selectedAllocation.slice(1)}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

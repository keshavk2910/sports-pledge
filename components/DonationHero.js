import Link from 'next/link';
import Navigation from './Navigation';
import { basketball2Icon, locationIcon, clipPathIcon, tagSeparator } from './images/donation';

export default function DonationHero({ campaign = null }) {
  // Mock campaign data if none provided
  const campaignData = campaign || {
    name: 'East Side Eagles',
    description: 'New Equipment Fundraiser',
    sport: 'Basketball',
    location: 'Portland, OR',
    dates: 'May 1 - June 30, 2023',
    raised: 8500,
    goal: 10000,
    progress: 85
  };

  return (
    <section className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-[60%] h-full bg-[#102250]"></div>
          <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-500"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pt-8">
          <Navigation />
          <div className="grid grid-cols-1 lg:grid-cols-2 pb-10 items-center pt-16">
            <div className="text-center lg:text-left max-w-lg py-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 font-manrope leading-tight text-nowrap">
                {campaignData.name}
              </h1>
              <p className="text-xl text-white/90 mb-4 leading-relaxed">
                {campaignData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center sm:items-start flex-wrap">
                <div className="flex items-center gap-2">
                  <img src={basketball2Icon.src} alt="Basketball" />
                  <p className="text-white text-sm sm:text-base">{campaignData.sport}</p>
                </div>
                <img className="mt-1.5" src={tagSeparator.src} alt="separator" />
                <div className="flex items-center gap-2">
                  <img src={locationIcon.src} alt="Location" />
                  <p className="text-white text-sm sm:text-base">{campaignData.location}</p>
                </div>
                <img className="mt-1.5" src={tagSeparator.src} alt="separator" />
                <div className="flex items-center gap-2">
                  <img src={clipPathIcon.src} alt="Dates" />
                  <p className="text-white text-sm sm:text-base">{campaignData.dates}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end py-16">
              <div className="flex flex-col items-center">
                <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="10"></circle>
                  <g transform="rotate(-90 50 50)">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#102250" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                      strokeDasharray="282.743" 
                      strokeDashoffset={282.743 - (282.743 * campaignData.progress / 100)}
                    ></circle>
                  </g>
                  <text x="50" y="54" fontFamily="system-ui, Arial" fontSize="18" fontWeight="700" fill="#ffffff" textAnchor="middle">
                    {campaignData.progress}%
                  </text>
                </svg>
                <h3 className="text-white text-3xl font-bold mt-4">${campaignData.raised.toLocaleString()}</h3>
                <p className="text-white text-sm mb-4">${campaignData.goal.toLocaleString()}</p>
                <Link href={`/donate/${campaignData.id || 1}`}>
                  <button className="bg-[#ffffff] text-black px-6 py-2 rounded-full hover:bg-[#0b1c3f] transition">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-white" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path d="M0,80 L1200,80 L1200,0 L0,80 Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
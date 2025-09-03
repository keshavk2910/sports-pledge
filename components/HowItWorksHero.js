import Navigation from './Navigation';

export default function HowItWorksHero() {
  return (
    <section className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-[60%] h-full bg-[#102250]"></div>
          <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-500"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pt-8">
          <Navigation />
          <section>
            <div className="text-white px-10 py-20 flex-2">
              <h2 className="text-[36px] md:text-5xl mb-4 font-manrope">How SportsPledge Works</h2>
              <p className="text-[16px] mb-8 font-normal">
                A revolutionary approach to sports fundraising that benefits coaches, <br />
                athletes, and donors alike.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 border rounded-full text-black bg-white hover:bg-gray-400">Watch Demo</button>
                <button className="px-6 py-3 bg-orange-500 rounded-full hover:bg-black">Start Fundraising</button>
              </div>
            </div>
          </section>
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
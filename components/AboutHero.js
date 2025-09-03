import Navigation from './Navigation';

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-[60%] h-full bg-[#102250]"></div>
          <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-500"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pt-8">
          <Navigation />
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="text-center lg:text-left max-w-lg py-16">
              <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-2 font-manrope leading-tight">
                Empowering Athletes,
              </h1>
              <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-2 font-manrope leading-tight text-nowrap">
                Building Communities
              </h1>
              <p className="text-xl text-white mb-4 leading-relaxed">
                Our journey to revolutionize sports fundraising and create lasting impact for teams across the nation.
              </p>
              <button className="bg-[#F97316] text-white px-6 py-4 rounded-full transition text-lg">
                Start Fundraising
              </button>
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
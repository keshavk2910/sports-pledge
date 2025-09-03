import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative">
      <div className="bg-orange-500 text-center px-8 py-4 rounded-lg transform rotate-5 origin-top-left w-[110%] -ml-[5%] z-10 relative">
        <h2 className="text-5xl font-semibold text-white m-0"><span className="text-[#0C1E4A]">Unlock</span> the <span className="text-[#102250]">potential</span> of your team <span className="text-[#102250]">today!</span></h2>
      </div>
      <div className="relative pt-48 pb-40 bg-[#102250] transform -skew-y-3 origin-top-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform skew-y-3 origin-top-left">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Team's Fundraising?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">Join hundreds of teams already using SportsPledge to reach their goals faster and engage their communities better.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate/1" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 text-lg font-semibold">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8 4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8zM7 4h2v4h4v2H9v4H7V10H3V8h4V4z"/>
              </svg>
              Create Your Fundraiser
            </Link>
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2 text-lg font-semibold">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.24L10.5 9.5a.5.5 0 0 1-.146.354L6.646 12.5a.5.5 0 0 1-.354-.146L3.5 9.646a.5.5 0 0 1 .146-.354L7.354 6.5a.5.5 0 0 1 .417-.055z"/>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
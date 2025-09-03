import { vectorRope, teamImage1, teamImage2, teamImage3, teamImage4, teamImage5 } from './images/homepage';

export default function TeamFinder() {
  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 z-0">
        <img className="w-full h-auto" src={vectorRope.src} alt="Decorative rope design background" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-medium text-[#102250] mb-4">Find your Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <div className="w-full rounded-4xl">
            <div className="relative">
              <button className="relative w-full cursor-pointer rounded-4xl bg-[#0C1E4A] px-6 py-3 pl-4 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">Select State</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="w-full rounded-4xl">
            <div className="relative">
              <button className="relative w-full cursor-pointer rounded-4xl bg-[#0C1E4A] px-6 py-3 pl-4 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">Select School</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="w-full rounded-4xl">
            <div className="relative">
              <button className="relative w-full cursor-pointer rounded-4xl bg-[#0C1E4A] px-6 py-3 pl-4 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">Select Sport</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-4xl hover:bg-orange-600 transition-colors font-semibold w-full">Search</button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mb-8 relative">
        <div className="flex flex-col gap-4 mt-80">
          <div>
            <img className="object-cover rounded-lg" src={teamImage4.src} alt="Runners on trail" />
          </div>
          <div>
            <img className="object-cover rounded-lg" src={teamImage2.src} alt="Boys with rope exercise" />
          </div>
        </div>
        <div>
          <img className="object-cover rounded-lg" src={teamImage1.src} alt="Coach with soccer team" />
        </div>
        <div className="flex flex-col gap-4 -mt-72">
          <div>
            <img className="object-cover rounded-lg" src={teamImage5.src} alt="Soccer team huddle" />
          </div>
          <div>
            <img className="object-cover rounded-lg" src={teamImage3.src} alt="Coach with soccer players" />
          </div>
        </div>
      </div>
    </section>
  );
}
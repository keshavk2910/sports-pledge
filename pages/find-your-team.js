import Layout from '../components/Layout';
import FindYourTeamHero from '../components/FindYourTeamHero';
import CallToAction from '../components/CallToAction';
import FundraiserCard from '../components/FundraiserCard';
import { filterIcon, searchIcon, arrowLeftIcon, arrowRightIcon } from '../components/images/find-team';
import { vectorRope } from '../components/images/homepage';
import { mockFundraisers } from '../data/mockFundraisers';

export default function FindTeam() {
  return (
    <Layout>
      <FindYourTeamHero />

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-7xl mx-auto mt-24 px-4">
        <button className="flex items-center gap-2">
          <img src={filterIcon.src} alt="Filter" />
          <h1>Filter</h1>
        </button>
        <div className="flex gap-4 justify-center">
          <select className="px-6 py-2 bg-[#EF6C2F] text-white rounded-lg border-0 cursor-pointer">
            <option className="bg-blue-900 text-white">State/Location</option>
          </select>
          <select className="px-6 py-2 bg-[#EF6C2F] text-white rounded-lg border-0 cursor-pointer">
            <option className="bg-blue-900 text-white">Select School</option>
          </select>
          <select className="px-6 py-2 bg-[#EF6C2F] text-white rounded-lg border-0 cursor-pointer">
            <option className="bg-blue-900 text-white">Select Sport</option>
          </select>
          <select className="px-6 py-2 bg-[#EF6C2F] text-white rounded-lg border-0 cursor-pointer">
            <option className="bg-blue-900 text-white">Fundraiser Type</option>
          </select>
          <button className="flex items-center">
            <select className="px-6 py-2 rounded-lg border-0 cursor-pointer">
              <option className="bg-blue-900 text-white">Sort By: Newest</option>
            </select>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto w-full mt-18 flex rounded-xl border border-[#102250] overflow-hidden">
        <input className="flex-grow py-4 px-6 outline-none border-r-0 rounded-l-full" placeholder="Search for teams, schools, or locations..." />
        <button className="bg-[#102250] text-white px-32 py-4 flex items-center justify-center hover:cursor-pointer">
          <img className="mr-2" src={searchIcon.src} alt="Search" />
          Search
        </button>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12 px-4">
        {mockFundraisers.map((fundraiser) => (
          <div key={fundraiser.id} className="mt-12">
            <FundraiserCard fundraiser={fundraiser} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 mb-8">
        <button disabled className="px-4 h-10 border rounded-l-lg text-white border-gray-400 hover:cursor-pointer">
          <img src={arrowLeftIcon.src} alt="arrow-left" />
        </button>
        <button className="px-5 py-3 bg-[#102250] text-white hover:cursor-pointer">1</button>
        <button className="px-5 py-3 border border-gray-400 text-gray-700">2</button>
        <button className="px-5 py-3 border border-gray-400 text-gray-700">3</button>
        <button className="px-5 py-3 border border-gray-400 text-gray-700">4</button>
        <button className="px-5 py-3 border border-gray-400 text-gray-700">5</button>
        <button className="px-4 py-2 border rounded-r-lg border-gray-400 hover:cursor-pointer">
          <img src={arrowRightIcon.src} alt="arrow-right" />
        </button>
      </div>

      {/* FAQ Section */}
      <section className="bg-[#F5F5F5] h-screen flex items-center justify-center relative pb-52 -mb-18" style={{clipPath: 'polygon(0px 10%, 100% 0px, 100% 88%, 0% 100%)'}}>
        <div className="absolute inset-x-0 top-0 z-0">
          <img className="w-full h-auto" src={vectorRope.src} alt="Decorative rope design background" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto my-12 px-6 z-0 mt-64">
          <h2 className="text-4xl font-bold mb-6 text-[#102250]">Frequently Asked Questions</h2>
          <div className="py-4 border-b last:border-b-0 border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How are the funds used?</h3>
            <p className="text-gray-600">All donations go directly to the team for equipment, travel expenses, and other team needs as outlined in their campaign.</p>
          </div>
          <div className="py-4 border-b last:border-b-0 border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Is my donation tax-deductible?</h3>
            <p className="text-gray-600">Most donations are tax-deductible. You will receive a receipt via email that can be used for tax purposes.</p>
          </div>
          <div className="py-4 border-b last:border-b-0 border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">What is a per-stat pledge?</h3>
            <p className="text-gray-600">A per-stat pledge allows you to donate a specific amount for each statistic achieved by the team or a player, such as points scored or games won.</p>
          </div>
          <div className="py-4 border-b last:border-b-0 border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I make my donation anonymous?</h3>
            <p className="text-gray-600">Yes, you can choose to make your donation anonymous during the checkout process.</p>
          </div>
          <div className="py-4 border-b last:border-b-0 border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When will I be charged for per-stat pledges?</h3>
            <p className="text-gray-600">Per-stat pledges are processed after each game once the official statistics are recorded, typically within 24-48 hours.</p>
          </div>
          <div className="py-4 border-b last:border-b-0 border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I set a maximum limit on my per-stat pledges?</h3>
            <p className="text-gray-600">Yes, you can set a maximum cap on your total contribution to ensure you stay within your budget.</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
}
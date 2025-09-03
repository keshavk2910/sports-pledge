import FundraiserCard from './FundraiserCard';
import { mockFundraisers } from '../data/mockFundraisers';

export default function FeaturedFundraisers() {
  // Use first 3 fundraisers for homepage
  const featuredFundraisers = mockFundraisers.slice(0, 3);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-medium mb-4">Featured Fundraisers</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFundraisers.map((fundraiser) => (
            <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
          ))}
        </div>
      </div>
    </section>
  );
}
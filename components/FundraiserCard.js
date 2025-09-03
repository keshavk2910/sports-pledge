import Link from 'next/link';

export default function FundraiserCard({ fundraiser }) {
  return (
    <div className="bg-[#FBFBFB] border border-[#F3F3F3] overflow-hidden p-2">
      <div className={`bg-gradient-to-br ${fundraiser.gradientColors} flex items-center justify-center`}>
        <img className="w-full h-auto" src={fundraiser.image.src} alt="Fundraising" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 rounded-full mr-3" src={fundraiser.avatar.src} alt="Avatar" />
          <div>
            <h3 className="text-xl font-semibold text-gray-500">{fundraiser.teamName}</h3>
            <p className="text-gray-400">{fundraiser.sport} • {fundraiser.type}</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>${fundraiser.raised.toLocaleString()} raised</span>
            <span>${fundraiser.goal.toLocaleString()} goal</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full" 
              style={{width: `${Math.min((fundraiser.raised / fundraiser.goal) * 100, 100)}%`}}
            ></div>
          </div>
        </div>
        <Link href={`/fundraiser/${fundraiser.id}`}>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors hover:cursor-pointer">
            View Fundraiser
          </button>
        </Link>
      </div>
    </div>
  );
}
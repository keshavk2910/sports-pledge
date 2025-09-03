import Link from 'next/link';

export default function TeamMemberCard({ player }) {
  return (
    <Link href={`/player/${player.id}`}>
      <div className="flex flex-col items-start hover:cursor-pointer">
        <img 
          className="h-auto object-cover rounded-lg" 
          src={player.image.src} 
          alt={player.name} 
        />
        <div className="flex flex-col mt-2 ml-5 space-y-1 w-full max-w-[290px]">
          <p className="text-black font-semibold text-base sm:text-sm">{player.name}</p>
          <p className="text-gray-400 text-sm sm:text-xs">{player.position}</p>
          <div className="bg-gray-200 rounded-full h-1.5 w-30">
            <div 
              className="bg-green-500 h-1.5 rounded-full" 
              style={{width: `${player.progress}%`}}
            ></div>
          </div>
          <p className="text-gray-600 text-xs sm:text-xs">${player.raised} raised</p>
        </div>
      </div>
    </Link>
  );
}
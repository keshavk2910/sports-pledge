import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import PlayerDonationForm from '../../components/PlayerDonationForm';
import { avatarImage } from '../../components/images/shared';
import { fundraisingImage3 } from '../../components/images/homepage';
import { chartIcon, ballIcon, ballWhiteIcon, statsIcon, meterIcon, medalIcon, shirtIcon, shoesIcon, graduationCapIcon, bar2Icon, datesIcon, qrCodeIcon, facebookBlueIcon, twitterBlueIcon, instagramBlueIcon, linkedinBlueIcon, youtubeBlueIcon } from '../../components/images/player';
import { vectorRope } from '../../components/images/homepage';
import { peopleIcon } from '../../components/images/how-it-works';
import { mockTeamMembers } from '../../data/mockTeamMembers';

export default function PlayerProfile() {
  const router = useRouter();
  const { id } = router.query;

  // Get player data
  const player = mockTeamMembers.find(p => p.id === parseInt(id)) || mockTeamMembers[0];

  const upcomingGames = [
    { date: 'Jan 15, 2024', opponent: 'Westside Warriors', location: 'Home', time: '7:00 PM' },
    { date: 'Jan 22, 2024', opponent: 'North Central Tigers', location: 'Away', time: '6:30 PM' },
    { date: 'Jan 29, 2024', opponent: 'Southridge Falcons', location: 'Home', time: '7:00 PM' },
    { date: 'Feb 5, 2024', opponent: 'Lakeside Bulldogs', location: 'Away', time: '7:30 PM' }
  ];

  const handleDonationSubmit = (formData) => {
    console.log('Player donation submitted:', formData);
    // Here you would typically send data to your API
    // For now, redirect to donation page
    router.push(`/donate/${player.id}`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white overflow-hidden">
        <section className="relative bg-white min-h-screen">
          {/* Hero Section */}
          <section className="relative">
            <div className="relative">
              <div className="absolute inset-0">
                <div className="absolute left-0 top-0 w-[60%] h-full bg-[#102250]"></div>
                <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-500"></div>
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pt-8">
                <Navigation />
                <div className="relative z-10 flex justify-center items-center">
                  <section className="grid grid-cols-2 gap-8 mt-8">
                    <div className="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden h-[379px]">
                      <div className="relative">
                        <img 
                          className="rounded-lg" 
                          src={fundraisingImage3.src} 
                          alt="Marcus Johnson"
                          style={{color: 'transparent', width: '100%', height: 'auto'}}
                        />
                        <div className="absolute bottom-4 left-4 flex space-x-2">
                          <span className="bg-[#EF6C2F] text-white px-3 py-1 rounded-lg text-sm">Shooting Guard</span>
                          <span className="bg-[#1F2937CC] text-white px-3 py-1 rounded-lg text-sm">Season 2023-2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg h-[366px]">
                      <div className="flex items-center mb-4">
                        <img 
                          className="rounded-full mr-4" 
                          src={avatarImage.src} 
                          alt="Player Avatar"
                          width="60"
                          height="60"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-[#102250]">{player.name}</h3>
                          <p className="text-gray-600">#34 • Shooting Guard</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 mb-6">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{player.year}</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Height: {player.height}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2 gap-2 font-bold">
                        <p className="text-lg font-semibold text-gray-700">Personal Fundraising Goal</p>
                        <div className="flex gap-1">
                          <span className="text-lg">$520</span>
                          <span className="text-lg">of $1,000</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div className="bg-[#EF6C2F] h-2.5 rounded-full" style={{width: '52%'}}></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 font-bold mb-6">
                        <span>52% Funded</span>
                        <span>$480 to go</span>
                      </div>
                      <Link href={`/donate/${player.id}`}>
                        <button className="bg-[#EF6C2F] w-full text-white py-2.5 px-6 rounded-lg mb-4 font-semibold hover:bg-orange-600 transition duration-200">
                          Support Marcus
                        </button>
                      </Link>
                      <div className="flex space-x-4 mb-6">
                        <button className="border w-full border-[#EF6C2F] text-[#EF6C2F] py-2 px-5 rounded-lg font-semibold hover:bg-orange-50 transition duration-200">
                          Share Profile
                        </button>
                        <Link href="/fundraiser/1">
                          <button className="border w-full border-gray-300 text-gray-700 py-2 px-5 rounded-lg font-semibold hover:bg-gray-50 transition duration-200">
                            View Team
                          </button>
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-20 text-white" viewBox="0 0 1200 80" preserveAspectRatio="none">
                  <path d="M0,80 L1200,80 L1200,0 L0,80 Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </section>

          {/* Yellow Background */}
          <div className="bg-[#FBAA1A] h-[786px] absolute inset-x-0 -mt-48" style={{clipPath: 'polygon(0px 10%, 100% 0px, 100% 90%, 0% 100%)'}}></div>
          
          {/* Statistics Section */}
          <div className="relative z-10 -mt-10">
            <section className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl text-white mb-4 flex items-center">
                <img className="mr-3" src={chartIcon.src} alt="Season Stats Icon" />
                Season Statistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Offensive Stats */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full z-10">
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl font-bold text-[#102250] mr-2">Offensive Stats</h3>
                    <img src={ballIcon.src} alt="icon" />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Points Per Game</span>
                      <span className="text-gray-900 font-bold">18.4</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(16, 34, 80)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '17.3913%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 15.2</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Field Goal %</span>
                      <span className="text-gray-900 font-bold">46</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(16, 34, 80)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '8.69565%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 42</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">3PT %</span>
                      <span className="text-gray-900 font-bold">38</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(16, 34, 80)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '13.1579%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 33</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Free Throw %</span>
                      <span className="text-gray-900 font-bold">84</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(16, 34, 80)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '9.52381%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 76</p>
                    </div>
                  </div>
                </div>

                {/* Defensive Stats */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full z-10">
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl font-bold text-[#102250] mr-2">Defensive Stats</h3>
                    <img src={statsIcon.src} alt="icon" />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Rebounds Per Game</span>
                      <span className="text-gray-900 font-bold">4.2</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '61.7647%', backgroundColor: 'rgb(34, 197, 94)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '0%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 6.8</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Steals Per Game</span>
                      <span className="text-gray-900 font-bold">2.8</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(34, 197, 94)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '42.8571%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 1.6</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Blocks Per Game</span>
                      <span className="text-gray-900 font-bold">0.5</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '41.6667%', backgroundColor: 'rgb(34, 197, 94)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '0%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 1.2</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Deflections</span>
                      <span className="text-gray-900 font-bold">3.4</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(34, 197, 94)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '26.4706%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 2.5</p>
                    </div>
                  </div>
                </div>

                {/* Efficiency Metrics */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full z-10">
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl font-bold text-[#102250] mr-2">Efficiency Metrics</h3>
                    <img src={meterIcon.src} alt="icon" />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Minutes Per Game</span>
                      <span className="text-gray-900 font-bold">28.5</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(168, 85, 247)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '15.0877%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 24.2</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Player Efficiency</span>
                      <span className="text-gray-900 font-bold">19.2</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(168, 85, 247)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '21.875%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 15</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Assist/Turnover</span>
                      <span className="text-gray-900 font-bold">2.4</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(168, 85, 247)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '25%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 1.8</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">Plus/Minus</span>
                      <span className="text-gray-900 font-bold">8.2</span>
                    </div>
                    <div className="relative w-full h-2 rounded-full bg-gray-200">
                      <div className="absolute left-0 h-full rounded-full" style={{width: '100%', backgroundColor: 'rgb(168, 85, 247)'}}></div>
                      <div className="absolute right-0 h-full rounded-full bg-gray-400" style={{width: '58.5366%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-sm text-gray-500 mt-1">Team Avg: 3.4</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Player Story Section */}
          <section className="mt-64 bg-">
            <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <img className="w-6 h-6" src={peopleIcon.src} alt="People icon" />
                  Player Story
                </h2>
                <div className="space-y-4">
                  <p className="text-xl">
                    As a junior at East Side High School, Marcus has established himself as one of the team's most reliable scorers and perimeter defenders. His journey with basketball began at age 8, inspired by his older brother who played college basketball.
                  </p>
                  <p className="text-lg">
                    "Basketball isn't just a sport for me—it's where I've learned about discipline, teamwork, and pushing through challenges," says Marcus. "Every time I step on the court, I want to make my family, teammates, and community proud."
                  </p>
                  <p className="text-lg">
                    Last season, Marcus averaged 15.2 points per game, but has elevated his game significantly this year. His improved shooting percentage and defensive presence have been crucial for the Eagles' success in close games.
                  </p>
                  <p className="text-lg">
                    Beyond basketball, Marcus maintains a 3.7 GPA and volunteers as a youth coach at the community center where he first learned to play. He hopes to earn a basketball scholarship to study sports management or business in college.
                  </p>
                  <p className="text-lg">
                    "The support from our community means everything to us," Marcus explains. "The equipment and training opportunities this fundraiser provides will help me and my teammates continue to improve and represent East Side with pride."
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1 space-y-8 mt-24">
                {/* Coach's Corner */}
                <div className="bg-[#EFF6FF] shadow rounded-lg p-6 font-bold">
                  <h3 className="text-xl font-bold mb-4">Coach's Corner</h3>
                  <p className="text-gray-700 italic mb-4">
                    "Marcus is not only one of our most talented players, but his work ethic and leadership set the standard for the entire program. He's the first one in the gym and the last one to leave. His development as a complete player this season has been remarkable to watch."
                  </p>
                  <p className="font-semibold text-gray-800">Coach Michael Thompson</p>
                  <p className="text-sm text-gray-600">Head Coach, East Side Eagles</p>
                </div>
                <div className="bg-white font-bold p-6">
                  <h3 className="text-xl mb-4">Season Highlights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <img className="w-5 h-5" src={medalIcon.src} alt="Basketball icon" />
                      Career-high 32 points vs. Westside High
                    </li>
                    <li className="flex items-center gap-2">
                      <img className="w-5 h-5" src={medalIcon.src} alt="Basketball icon" />
                      Game-winning three-pointer against rival North Central
                    </li>
                    <li className="flex items-center gap-2">
                      <img className="w-5 h-5" src={medalIcon.src} alt="Basketball icon" />
                      Named to All-Tournament Team at Holiday Classic
                    </li>
                    <li className="flex items-center gap-2">
                      <img className="w-5 h-5" src={medalIcon.src} alt="Basketball icon" />
                      Currently on a streak of 18 consecutive free throws made
                    </li>
                    <li className="flex items-center gap-2">
                      <img className="w-5 h-5" src={medalIcon.src} alt="Basketball icon" />
                      Lead team with 7 games of 20+ points
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact of Support */}
            <div className="py-24">
              <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-start gap-2">
                  <img className="w-6 h-6" src={bar2Icon.src} alt="Chart icon" />
                  Impact of Your Support
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 flex flex-col items-start text-black">
                    <div className="flex items-center">
                      <div className="py-4.5 px-4 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-4">
                        <img src={shirtIcon.src} alt="New Home & Away Uniforms" width="25" height="25" />
                      </div>
                      <h3 className="font-semibold mb-2 ml-3">New Home & Away Uniforms</h3>
                    </div>
                    <div className="flex justify-between w-full text-sm mb-2">
                      <span className="font-bold">$220 raised</span>
                      <span className="text-gray-600">Goal: $300</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div className="bg-[#0C1E4A] h-2 rounded-full" style={{width: '73%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-xs font-semibold text-gray-600 mb-4">73% funded</p>
                    </div>
                    <p className="text-sm text-gray-500">High-quality game uniforms to replace 5-year old worn sets</p>
                  </div>
                  
                  <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 flex flex-col items-start text-black">
                    <div className="flex items-center">
                      <div className="py-4.5 px-4 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-4">
                        <img src={shoesIcon.src} alt="Performance Basketball Shoes" width="25" height="25" />
                      </div>
                      <h3 className="font-semibold mb-2 ml-3">Performance Basketball Shoes</h3>
                    </div>
                    <div className="flex justify-between w-full text-sm mb-2">
                      <span className="font-bold">$120 raised</span>
                      <span className="text-gray-600">Goal: $180</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div className="bg-[#0C1E4A] h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-xs font-semibold text-gray-600 mb-4">67% funded</p>
                    </div>
                    <p className="text-sm text-gray-500">Specialized court shoes for improved stability and performance</p>
                  </div>

                  <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 flex flex-col items-start text-black">
                    <div className="flex items-center">
                      <div className="py-4.5 px-4 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-4">
                        <img src={graduationCapIcon.src} alt="Summer Skills Camp" width="25" height="25" />
                      </div>
                      <h3 className="font-semibold mb-2 ml-3">Summer Skills Camp</h3>
                    </div>
                    <div className="flex justify-between w-full text-sm mb-2">
                      <span className="font-bold">$180 raised</span>
                      <span className="text-gray-600">Goal: $520</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div className="bg-[#0C1E4A] h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <div className="flex w-full justify-end">
                      <p className="text-xs font-semibold text-gray-600 mb-4">35% funded</p>
                    </div>
                    <p className="text-sm text-gray-500">Intensive training with college coaches for skill development</p>
                  </div>
                </div>

                {/* How Donation Helps */}
                <div className="p-8 rounded-lg bg-[#0C1E4A] text-white">
                  <h3 className="text-2xl font-bold mb-4">How Your Donation Helps Marcus Excel</h3>
                  <p className="text-lg mb-6">
                    Your support directly impacts Marcus's ability to compete at his best and develop his skills for the future. From essential equipment to training opportunities, every contribution makes a difference in his athletic journey.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <img src={ballWhiteIcon.src} alt="Basketball icon" />
                      Proper equipment reduces injury risk by up to 35%
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={ballWhiteIcon.src} alt="Basketball icon" />
                      Training with advanced tools improves shooting accuracy by 25%
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={ballWhiteIcon.src} alt="Basketball icon" />
                      Summer skills camps increase chances of college recruitment
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={ballWhiteIcon.src} alt="Basketball icon" />
                      Quality shoes designed for basketball reduce foot fatigue
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Yellow Background for Donation Form */}
        <div className="bg-[#FBAA1A] h-[786px] absolute inset-x-0 mt-54" style={{clipPath: 'polygon(0px 10%, 100% 0px, 100% 90%, 0% 100%)'}}></div>

        {/* Donation Form Section */}
        <section className="relative">
          <div className="absolute inset-x-0 top-2 z-0 -mt-96">
            <img className="w-full h-auto" src={vectorRope.src} alt="Decorative rope design background" />
          </div>
          <PlayerDonationForm player={player} onSubmit={handleDonationSubmit} />
        </section>

        {/* Upcoming Games */}
        <section className="text-white mt-46">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl text-black font-bold mb-8 text-center flex items-center justify-center gap-2">
              <img src={datesIcon.src} alt="Calendar icon" />
              Upcoming Games
            </h2>
            <div className="bg-white shadow-lg overflow-hidden text-left mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#102250] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Opponent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">Jan 15, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">Westside Warriors</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Home</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">7:00 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">Jan 22, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">North Central Tigers</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Away</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">6:30 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">Jan 29, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">Southridge Falcons</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Home</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">7:00 PM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">Feb 5, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">Lakeside Bulldogs</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Away</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">7:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center font-semibold text-gray-700 mt-3">
              Come see Marcus and the team in action! Your support helps them perform at their best.
            </p>
          </div>
        </section>

        {/* Share Section */}
        <section className="relative py-24 bg-[#0C1E4A] text-white overflow-hidden mt-18 h-[600px]" style={{clipPath: 'polygon(0px 10%, 100% 0px, 100% 90%, 0% 100%)'}}>
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-8">Share Marcus's Fundraiser</h2>
            <div className="flex justify-center space-x-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-white text-[#0C1E4A] flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-200">
                <img src={facebookBlueIcon.src} alt="Facebook" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-[#0C1E4A] flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-200">
                <img src={twitterBlueIcon.src} alt="Twitter" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-[#0C1E4A] flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-200">
                <img src={instagramBlueIcon.src} alt="Instagram" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-[#0C1E4A] flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-200">
                <img src={linkedinBlueIcon.src} alt="LinkedIn" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-[#0C1E4A] flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-200">
                <img src={youtubeBlueIcon.src} alt="YouTube" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <img src={qrCodeIcon.src} alt="QR Code" width="150" height="150" />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Scan to Share</h3>
                <p className="text-white">
                  Scan this QR code with your phone camera to share<br />
                  Marcus's fundraiser with friends and family via text,<br />
                  email, or social media.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
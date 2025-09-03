import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import FundraiserHero from '../../components/FundraiserHero';
import CallToAction from '../../components/CallToAction';
import TeamMemberCard from '../../components/TeamMemberCard';
import { iconAbout, teamRoster, iconUpdate, donorIcon, basketballIcon, clipPathGroupIcon, cyclesImage } from '../../components/images/fundraiser';
import { tagSeparator } from '../../components/images/donation';
import { locationIcon } from '../../components/images/about';
import { mockTeamMembers } from '../../data/mockTeamMembers';

export default function CampaignDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Mock campaign data
  const campaign = {
    id: id,
    name: 'East Side Eagles',
    description: 'New Equipment Fundraiser',
    sport: 'Basketball',
    location: 'Portland, OR',
    dates: 'May 1 - June 30, 2023',
    raised: 8500,
    goal: 10000,
    progress: 85
  };

  // Use mock team members data

  return (
    <Layout>
      <div className="min-h-screen bg-white overflow-hidden">
        <FundraiserHero campaign={campaign} />

        {/* Navigation Tabs */}
        <section className="py-8 px-4 sm:px-8 lg:px-[185px]">
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-start flex-wrap">
            <div className="flex items-center gap-2 text-black text-[16px] sm:text-[18px]">
              <img src={iconAbout.src} alt="about" />
              <p>About</p>
            </div>
            <div className="flex items-center gap-2 text-black text-[16px] sm:text-[18px]">
              <img src={teamRoster.src} alt="roster" />
              <p>Team Roster</p>
            </div>
            <div className="flex items-center gap-2 text-black text-[16px] sm:text-[18px]">
              <img src={iconUpdate.src} alt="update" />
              <p>Updates</p>
            </div>
            <div className="flex items-center gap-2 text-black text-[16px] sm:text-[18px]">
              <img src={donorIcon.src} alt="donor" />
              <p>Donors</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-black leading-tight">
                About This Fundraiser
              </h1>
              <p className="text-gray-700 text-[14px] sm:text-[16px] leading-relaxed w-full">
                The East Side Eagles basketball team is raising funds for new equipment for the upcoming season. 
                Our current equipment is worn out and needs to be replaced to ensure our players can perform at their best.
              </p>
              <p className="text-gray-700 text-[14px] sm:text-[16px] leading-relaxed w-full">
                With your support, we plan to purchase new uniforms, basketballs, training equipment, and portable scoreboards. 
                These upgrades will not only improve our practice sessions but also enhance our game-day experience.
              </p>
              <p className="text-gray-700 text-[14px] sm:text-[16px] leading-relaxed w-full">
                Our team has been a pillar of the East Portland community for over 15 years, providing a positive outlet 
                for youth development and fostering teamwork, discipline, and sportsmanship. Your contribution will directly 
                impact the lives of 24 student-athletes who are passionate about basketball.
              </p>
              
              {/* Tags */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded text-[14px] sm:text-[18px]">
                  <img src={basketballIcon.src} alt="Basketball" />
                  <p>Statraiser</p>
                </div>
                <img src={tagSeparator.src} alt="separator" />
                <div className="flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded text-[14px] sm:text-[18px]">
                  <img src={clipPathGroupIcon.src} alt="Date" />
                  <p>May 1 - June 30, 2023</p>
                </div>
                <img src={tagSeparator.src} alt="separator" />
                <div className="flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded text-[14px] sm:text-[18px]">
                  <img src={locationIcon.src} alt="Location" />
                  <p>Portland, OR</p>
                </div>
              </div>
            </div>

            {/* Coach Info Sidebar */}
            <div className="flex flex-col items-center lg:items-end space-y-4 w-full max-w-sm mx-auto lg:mx-0">
              <img 
                className="rounded-lg transform -translate-y-6 sm:-translate-y-10 w-full max-w-[350px] h-auto object-cover"
                src={cyclesImage.src} 
                alt="cycle" 
              />
              <div className="text-center lg:text-left text-black max-w-xs">
                <p className="font-semibold">Organized by:</p>
                <p>Coach Michael Thompson</p>
                <p>Head Coach, East Side Eagles</p>
                <p className="text-blue-600 break-words text-sm sm:text-base">
                  coach.thompson@eastsideeagles.org
                </p>
              </div>
            </div>
          </div>

          {/* Meet the Team Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 w-full px-4 sm:px-0">
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-black">Meet the team</h2>
            <p className="text-[14px] sm:text-[17px] text-gray-400 cursor-pointer mt-2 sm:mt-0">View all players</p>
          </div>

          {/* Team Members Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center px-4 sm:px-0">
            {mockTeamMembers.map((player) => (
              <TeamMemberCard key={player.id} player={player} />
            ))}
          </div>

          {/* Recent Updates Section */}
          <section className="mt-10 px-4 sm:px-0">
            <h2 className="text-[22px] sm:text-[24px] font-semibold text-black mb-6">Recent Updates</h2>
            
            <div className="flex flex-col gap-1 mb-6">
              <p className="text-gray-500 text-xs sm:text-sm">Mar 15, 2023</p>
              <h4 className="text-black font-semibold text-[16px] sm:text-[18px]">Halfway to our goal!</h4>
              <p className="text-gray-700 text-[14px] sm:text-[16px] leading-relaxed">
                We're excited to announce that we've reached the halfway point of our fundraising goal! 
                Thank you to everyone who has contributed so far. Your support means the world to our team.
              </p>
            </div>
            
            <div className="flex flex-col gap-1 mb-6">
              <p className="text-gray-500 text-xs sm:text-sm">Mar 20, 2023</p>
              <h4 className="text-black font-semibold text-[16px] sm:text-[18px]">New Equipment Arrived!</h4>
              <p className="text-gray-700 text-[14px] sm:text-[16px] leading-relaxed">
                We've received our new basketballs and uniforms! The team is thrilled, and practice sessions 
                are now even more fun and productive. Thank you for making this possible!
              </p>
            </div>
          </section>
        </section>

        <CallToAction />
      </div>
    </Layout>
  );
}
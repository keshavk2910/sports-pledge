import Layout from '../components/Layout';
import HowItWorksHero from '../components/HowItWorksHero';
import SuccessStories from '../components/SuccessStories';
import CallToAction from '../components/CallToAction';
import { process1, process2, process3, process4, notebookIcon, handshakeIcon, athleteIcon, fundIcon, checkIcon, roundCheckIcon, clockIcon, peopleIcon, percentageIcon, barIcon, timerIcon, teamSupport1, teamSupport2, teamSupport3, teamSupport4, vector156 } from '../components/images/how-it-works';

export default function HowItWorks() {
  return (
    <Layout>
      <HowItWorksHero />

      {/* Process Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h3 className="text-center text-5xl font-medium mb-10">The SportsPledge Process</h3>
        <p className="text-center text-lg font-light mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-3 rounded-lg border border-gray-200 bg-white">
            <div className="mb-4 relative">
              <img src={process1.src} alt="Coach Creates" />
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#FFF1E8] rounded-full relative flex items-center justify-center">
                <img className="object-cover" src={notebookIcon.src} alt="Coach Creates" />
              </div>
              <h4 className="font-semibold text-lg">Coach Creates</h4>
            </div>
            <p className="text-sm text-gray-600 mt-2">Fundraiser setup and goal definition</p>
          </div>
          <div className="p-3 rounded-lg border border-gray-200 bg-white">
            <div className="mb-4 relative">
              <img src={process2.src} alt="Donors Pledge Support" />
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#FFF1E8] rounded-full relative flex items-center justify-center">
                <img className="object-cover" src={handshakeIcon.src} alt="Donors Pledge Support" />
              </div>
              <h4 className="font-semibold text-lg">Donors Pledge Support</h4>
            </div>
            <p className="text-sm text-gray-600 mt-2">Supporters pledge by performance metric</p>
          </div>
          <div className="p-3 rounded-lg border border-gray-200 bg-white">
            <div className="mb-4 relative">
              <img src={process3.src} alt="Athletes Perform" />
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#FFF1E8] rounded-full relative flex items-center justify-center">
                <img className="object-cover" src={athleteIcon.src} alt="Athletes Perform" />
              </div>
              <h4 className="font-semibold text-lg">Athletes Perform</h4>
            </div>
            <p className="text-sm text-gray-600 mt-2">Athletes reach their goals with motivation</p>
          </div>
          <div className="p-3 rounded-lg border border-gray-200 bg-white">
            <div className="mb-4 relative">
              <img src={process4.src} alt="Funds Collected" />
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#FFF1E8] rounded-full relative flex items-center justify-center">
                <img className="object-cover" src={fundIcon.src} alt="Funds Collected" />
              </div>
              <h4 className="font-semibold text-lg">Funds Collected</h4>
            </div>
            <p className="text-sm text-gray-600 mt-2">Payments collected securely</p>
          </div>
        </div>
      </section>

      {/* Find Team Section */}
      <section className="bg-[#102250] text-white px-6 py-20 space-y-12 max-w-full overflow-hidden" style={{clipPath: 'polygon(0px 8%, 100% 0px, 100% 100%, 0% 100%)'}}>
        <div className="absolute">
          <img className="relative left-40 top-65" src={vector156.src} alt="vector" />
        </div>
        <h3 className="text-5xl text-center mt-38 mb-8">Find a Team to Support</h3>
        <p className="text-center text-lg font-light mb-24">
          Our performance-based fundraising model creates accountability and engagement, resulting in more <br /> successful campaigns and stronger community connections.
        </p>
        <div className="grid md:grid-cols-2 gap-24 max-w-7xl mx-auto">
          <div className="bg-gray-700 h-96 rounded-lg relative overflow-hidden">
            <img className="object-cover" src={teamSupport1.src} alt="Team-Image" style={{position: 'absolute', height: '100%', width: '100%', inset: '0px'}} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-medium mb-6 bg-[#EF6C2F] rounded-lg px-2 py-2 w-20">Step 1</h4>
            <h1 className="text-2xl font-semibold mb-4">Coach Creates Fundraiser</h1>
            <ul className="list-inside text-gray-200 space-y-4">
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Create a team profile with photos, stories, and goals
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Set up performance metrics that are relevant to your sport
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Add individual athlete profiles to personalize the campaign
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Set fundraising goals and timeline for your campaign
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h4 className="text-xl font-medium mb-6 bg-[#EF6C2F] rounded-lg px-2 py-2 w-20">Step 2</h4>
            <h1 className="text-2xl font-semibold mb-4">Donors Pledge Support</h1>
            <ul className="list-inside text-gray-200 space-y-4">
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Supporters can pledge per performance metric (e.g., $2 per goal)
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Or make one-time donations to support the team
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Share campaigns on social media to reach more supporters
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Donors receive updates on team performance and impact
              </li>
            </ul>
          </div>
          <div className="bg-gray-700 h-96 rounded-lg relative overflow-hidden">
            <img className="object-cover" src={teamSupport2.src} alt="Team-Image" style={{position: 'absolute', height: '100%', width: '100%', inset: '0px'}} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-gray-700 h-96 relative overflow-hidden">
            <img className="object-cover" src={teamSupport3.src} alt="Team-Image" style={{position: 'absolute', height: '100%', width: '100%', inset: '0px'}} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-medium mb-6 bg-[#EF6C2F] rounded-lg px-2 py-2 w-20">Step 3</h4>
            <h1 className="text-2xl font-semibold mb-4">Athletes Perform</h1>
            <ul className="list-inside text-gray-200 space-y-4">
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Athletes compete in games, matches, or events
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Coaches record and verify performance metrics
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Real-time updates keep supporters engaged
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Athletes are motivated by performance-based pledges
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h4 className="text-xl font-medium mb-6 bg-[#EF6C2F] rounded-lg px-2 py-2 w-20">Step 4</h4>
            <h1 className="text-2xl font-semibold mb-4">Funds Collected</h1>
            <ul className="list-inside text-gray-200 space-y-4">
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Pledges are automatically calculated based on verified performance
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Secure payment processing with transparent fee structure
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Funds are transferred directly to team accounts
              </li>
              <li className="flex items-center gap-4">
                <span><img src={checkIcon.src} alt="check" /></span>
                Detailed reporting on funds raised and performance metrics
              </li>
            </ul>
          </div>
          <div className="bg-gray-700 h-96 rounded-lg relative mb-12 overflow-hidden">
            <img className="object-cover" src={teamSupport4.src} alt="Team-Image" style={{position: 'absolute', height: '100%', width: '100%', inset: '0px'}} />
          </div>
        </div>
      </section>

      {/* Why Choose SportsPledge */}
      <section className="px-6 py-16 max-w-7xl mx-auto mt-12">
        <h3 className="text-5xl text-center mb-12">Why Choose SportsPledge?</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="px-7 py-8">
            <h4 className="text-xl font-bold mb-4">Athletes Perform</h4>
            <ul className="list-inside space-y-4 text-gray-700">
              <li className="flex items-center gap-4">
                <span><img src={clockIcon.src} alt="clock-icon" /></span>
                Time-consuming events that take focus away from training
              </li>
              <li className="flex items-center gap-4">
                <span><img src={peopleIcon.src} alt="people-icon" /></span>
                Limited reach to immediate community only
              </li>
              <li className="flex items-center gap-4">
                <span><img src={percentageIcon.src} alt="percentage-icon" /></span>
                Low profit margins on product sales (candy, car washes, etc.)
              </li>
              <li className="flex items-center gap-4">
                <span><img src={barIcon.src} alt="bar-icon" /></span>
                No connection between athletic performance and fundraising
              </li>
              <li className="flex items-center gap-4">
                <span><img src={timerIcon.src} alt="timer-icon" /></span>
                Delayed fund collection and distribution
              </li>
            </ul>
          </div>
          <div className="bg-[#1BB04C] text-white px-7 py-8 rounded-lg">
            <h4 className="text-xl font-bold mb-4">SportsPledge Platform</h4>
            <ul className="list-inside space-y-4">
              <li className="flex items-center gap-4">
                <span><img src={roundCheckIcon.src} alt="timer-icon" /></span>
                Quick setup that allows teams to focus on their sport
              </li>
              <li className="flex items-center gap-4">
                <span><img src={roundCheckIcon.src} alt="timer-icon" /></span>
                Digital campaigns reach supporters anywhere in the world
              </li>
              <li className="flex items-center gap-4">
                <span><img src={roundCheckIcon.src} alt="timer-icon" /></span>
                100% of pledges go directly to teams (minus small processing fee)
              </li>
              <li className="flex items-center gap-4">
                <span><img src={roundCheckIcon.src} alt="timer-icon" /></span>
                Performance-based pledges motivate athletes to excel
              </li>
              <li className="flex items-center gap-4">
                <span><img src={roundCheckIcon.src} alt="timer-icon" /></span>
                Immediate fund processing and transparent tracking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-[#FBAA1A] mt-28 flex flex-col items-center justify-center transform -rotate-4 origin-top-left w-[110%] -ml-[5%] pt-16 pb-24">
        <h3 className="text-center text-5xl text-white mb-12 transform rotate-4 origin-center">Our Success Metrics</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center transform rotate-4 origin-center">
          <div className="bg-white rounded-lg py-6">
            <p className="text-[64px] font-light leading-tight">85%</p>
            <p>of teams reach their fundraising goals</p>
          </div>
          <div className="bg-white rounded-lg py-6">
            <p className="text-[64px] font-light leading-tight">3x</p>
            <p>more funds raised compared to traditional methods</p>
          </div>
          <div className="bg-white rounded-lg py-6">
            <p className="text-[64px] font-light leading-tight">92%</p>
            <p>of donors prefer performance-based pledges</p>
          </div>
          <div className="bg-white rounded-lg py-6">
            <p className="text-[64px] font-light leading-tight">45%</p>
            <p>increase in athletic performance metrics</p>
          </div>
        </div>
      </section>

      <SuccessStories />
      <CallToAction />
    </Layout>
  );
}
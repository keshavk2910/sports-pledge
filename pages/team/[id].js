import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { 
  TrophyIcon,
  UserGroupIcon,
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ShareIcon,
  StarIcon,
  FireIcon
} from '@heroicons/react/24/outline';

export default function TeamProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('overview');

  // Mock team data
  const team = {
    id: 1,
    name: 'Madison Academy Eagles',
    sport: 'Soccer',
    level: 'High School',
    school: 'Madison Academy',
    location: 'Austin, TX',
    coach: {
      name: 'Coach Martinez',
      email: 'coach.martinez@example.com',
      experience: '8 years',
      bio: 'Dedicated to developing young athletes both on and off the field. Former college soccer player with a passion for community engagement.'
    },
    description: 'The Madison Academy Eagles Soccer Team has been a cornerstone of our school\'s athletic program for over 20 years. We compete in the Central Texas High School Soccer League and are known for our teamwork, dedication, and community involvement.',
    stats: {
      founded: '2004',
      totalPlayers: 24,
      averageAge: 16,
      championships: 3,
      totalGoals: 156,
      totalWins: 18,
      currentSeason: '2024 Spring'
    },
    achievements: [
      { year: '2023', title: 'Regional Champions', description: 'Won the Central Texas Regional Championship' },
      { year: '2022', title: 'State Semi-Finalists', description: 'Advanced to state semi-finals for the first time' },
      { year: '2021', title: 'League Champions', description: 'Undefeated season in regular league play' }
    ],
    campaigns: [
      {
        id: 1,
        name: 'Equipment & Uniforms Fund',
        status: 'Active',
        goal: 5000,
        raised: 3200,
        type: 'Stat-based',
        supporters: 48,
        daysLeft: 12
      },
      {
        id: 2,
        name: 'Tournament Travel Fund',
        status: 'Completed',
        goal: 3000,
        raised: 3450,
        type: 'Thon-based',
        supporters: 67,
        daysLeft: 0
      }
    ],
    players: [
      { name: 'Alex Johnson', position: 'Forward', number: 10, grade: 12, goals: 15 },
      { name: 'Sam Rodriguez', position: 'Midfielder', number: 8, grade: 11, goals: 8 },
      { name: 'Taylor Kim', position: 'Defender', number: 4, grade: 10, goals: 2 },
      { name: 'Jordan Smith', position: 'Goalkeeper', number: 1, grade: 12, goals: 0 },
      { name: 'Casey Williams', position: 'Forward', number: 9, grade: 11, goals: 12 },
      { name: 'Morgan Davis', position: 'Midfielder', number: 6, grade: 10, goals: 5 }
    ],
    schedule: [
      { date: '2024-01-25', opponent: 'Central High Hawks', type: 'Home', result: 'W 3-1' },
      { date: '2024-02-01', opponent: 'Riverside Rams', type: 'Away', result: 'W 2-0' },
      { date: '2024-02-08', opponent: 'Valley View Tigers', type: 'Home', result: 'Upcoming' },
      { date: '2024-02-15', opponent: 'North Hills Wolves', type: 'Away', result: 'Upcoming' }
    ]
  };

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <TrophyIcon className="w-12 h-12 text-orange-500" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{team.name}</h1>
              <div className="flex items-center justify-center space-x-6 text-white/90 mb-6">
                <span className="flex items-center">
                  <AcademicCapIcon className="w-5 h-5 mr-2" />
                  {team.school}
                </span>
                <span className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  {team.location}
                </span>
                <span className="flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2" />
                  {team.sport} • {team.level}
                </span>
              </div>
              <div className="flex justify-center space-x-4">
                <Button variant="secondary">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Follow Team
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {['overview', 'players', 'campaigns', 'schedule'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <Card>
                  <Card.Header>
                    <h2 className="text-xl font-bold text-gray-900">About the Team</h2>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-gray-700 leading-relaxed">{team.description}</p>
                  </Card.Body>
                </Card>

                {/* Recent Achievements */}
                <Card>
                  <Card.Header>
                    <h2 className="text-xl font-bold text-gray-900">Recent Achievements</h2>
                  </Card.Header>
                  <Card.Body>
                    <div className="space-y-4">
                      {team.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                              <TrophyIcon className="w-6 h-6 text-orange-500" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                              <span className="text-sm text-gray-500">{achievement.year}</span>
                            </div>
                            <p className="text-gray-600">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Team Stats */}
                <Card>
                  <Card.Header>
                    <h3 className="text-lg font-semibold text-gray-900">Team Statistics</h3>
                  </Card.Header>
                  <Card.Body>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Founded:</span>
                        <span className="font-medium">{team.stats.founded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Players:</span>
                        <span className="font-medium">{team.stats.totalPlayers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Championships:</span>
                        <span className="font-medium">{team.stats.championships}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Season Goals:</span>
                        <span className="font-medium">{team.stats.totalGoals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Season Wins:</span>
                        <span className="font-medium">{team.stats.totalWins}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Coach Info */}
                <Card>
                  <Card.Header>
                    <h3 className="text-lg font-semibold text-gray-900">Coach Information</h3>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                      <h4 className="font-semibold text-gray-900">{team.coach.name}</h4>
                      <p className="text-sm text-gray-600">{team.coach.experience} experience</p>
                    </div>
                    <p className="text-gray-700 text-sm">{team.coach.bio}</p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'players' && (
            <Card>
              <Card.Header>
                <h2 className="text-xl font-bold text-gray-900">Team Roster</h2>
              </Card.Header>
              <Card.Body>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Position
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Number
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Grade
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Goals
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {team.players.map((player, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{player.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {player.position}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            #{player.number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {player.grade}th
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {player.goals}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          )}

          {activeTab === 'campaigns' && (
            <div className="space-y-6">
              {team.campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <Card.Body>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{campaign.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            campaign.type === 'Stat-based' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {campaign.type}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            campaign.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {campaign.status}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Campaign
                      </Button>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>${campaign.raised.toLocaleString()} raised</span>
                        <span>${campaign.goal.toLocaleString()} goal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getProgressPercentage(campaign.raised, campaign.goal)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">
                        <UserGroupIcon className="w-4 h-4 inline mr-1" />
                        {campaign.supporters} supporters
                      </span>
                      {campaign.daysLeft > 0 && (
                        <span className="text-orange-600">
                          <CalendarIcon className="w-4 h-4 inline mr-1" />
                          {campaign.daysLeft} days left
                        </span>
                      )}
                      {campaign.daysLeft === 0 && (
                        <span className="text-green-600 font-medium">
                          Campaign Completed
                        </span>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'schedule' && (
            <Card>
              <Card.Header>
                <h2 className="text-xl font-bold text-gray-900">Game Schedule</h2>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  {team.schedule.map((game, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-600">{game.date}</div>
                          <div className="font-medium text-gray-900">vs {game.opponent}</div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            game.type === 'Home' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {game.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        {game.result === 'Upcoming' ? (
                          <span className="text-gray-600 font-medium">Upcoming</span>
                        ) : (
                          <span className={`font-medium ${
                            game.result.startsWith('W') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {game.result}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
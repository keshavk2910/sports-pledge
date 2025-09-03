import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { 
  TrophyIcon,
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function SuccessStories() {
  const featuredStories = [
    {
      id: 1,
      teamName: 'Madison Academy Eagles',
      coach: 'Coach Martinez',
      sport: 'Soccer',
      location: 'Riverside, TX',
      amountRaised: 8500,
      goal: 6000,
      timeline: '3 weeks',
      campaignType: 'Stat-based',
      quote: "We raised $8,500 in just 3 weeks using SportsPledge. The stat-based donations made it so engaging for our community! Parents and fans were checking our game stats constantly.",
      achievements: [
        'Exceeded goal by 42%',
        'Engaged 120+ supporters',
        'Funded entire uniform upgrade',
        'Covered tournament travel costs'
      ],
      stats: {
        supporters: 120,
        gamesPlayed: 12,
        goalsScored: 34,
        avgDonationPerGoal: 25
      }
    },
    {
      id: 2,
      teamName: 'Central Track Club',
      coach: 'Coach Johnson',
      sport: 'Track & Field',
      location: 'Austin, TX',
      amountRaised: 12000,
      goal: 10000,
      timeline: '6 weeks',
      campaignType: 'Thon-based',
      quote: "The community rallied behind our kids like never before. SportsPledge made it easy to track progress and keep everyone engaged throughout the campaign.",
      achievements: [
        'Reached goal 2 weeks early',
        'Funded new track equipment',
        'Sponsored 15 athletes for state',
        'Built stronger community bonds'
      ],
      stats: {
        supporters: 200,
        milesRun: 1250,
        events: 8,
        avgDonation: 60
      }
    },
    {
      id: 3,
      teamName: 'Riverside Youth FC',
      coach: 'Coach Williams',
      sport: 'Football',
      location: 'Houston, TX',
      amountRaised: 15000,
      goal: 12000,
      timeline: '4 weeks',
      campaignType: 'Stat-based',
      quote: "Amazing results! Our players were motivated to perform better knowing each touchdown and yard gained meant more support for the team.",
      achievements: [
        'Record-breaking season',
        'New equipment for 40 players',
        'Championship tournament fees',
        'Team building camp funded'
      ],
      stats: {
        supporters: 180,
        touchdowns: 28,
        yardsGained: 2400,
        gamesWon: 10
      }
    }
  ];

  const quickStats = [
    { label: 'Total Raised', value: '$2.5M+', icon: CurrencyDollarIcon },
    { label: 'Teams Helped', value: '500+', icon: TrophyIcon },
    { label: 'Success Rate', value: '94%', icon: ChartBarIcon },
    { label: 'Active Supporters', value: '25K+', icon: UsersIcon }
  ];

  const testimonials = [
    {
      quote: "SportsPledge transformed our fundraising. We went from selling candy bars to having the whole community invested in our success.",
      author: "Sarah Chen",
      title: "Basketball Coach",
      school: "Lincoln High School"
    },
    {
      quote: "The stat-based approach is genius. Our swimmers pushed harder knowing each lap counted toward our team's funding.",
      author: "Mike Rodriguez",
      title: "Swim Team Coach",
      school: "Oceanview Academy"
    },
    {
      quote: "We raised more in one month than we had in the entire previous year. The platform is incredibly user-friendly.",
      author: "Jennifer Adams",
      title: "Volleyball Coach",
      school: "Valley Middle School"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Real teams, real results. See how SportsPledge has helped hundreds of teams 
            exceed their fundraising goals and strengthen their communities.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that tell the story</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-lg text-gray-600">Detailed case studies from our most successful campaigns</p>
          </div>

          <div className="space-y-16">
            {featuredStories.map((story, index) => (
              <div key={story.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      story.campaignType === 'Stat-based' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {story.campaignType}
                    </span>
                    <span className="ml-3 text-gray-600">{story.sport} • {story.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.teamName}</h3>
                  <p className="text-lg text-orange-600 font-semibold mb-4">
                    Raised ${story.amountRaised.toLocaleString()} in {story.timeline}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="w-6 h-6 text-gray-400 mb-2 font-serif text-2xl leading-none">"</div>
                    <p className="text-gray-700 italic">"{story.quote}"</p>
                    <p className="text-gray-600 font-medium mt-2">- {story.coach}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {story.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <TrophyIcon className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button>View Full Case Study</Button>
                </div>

                {/* Stats Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card>
                    <Card.Header>
                      <h4 className="text-lg font-semibold text-gray-900">Campaign Stats</h4>
                    </Card.Header>
                    <Card.Body>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500">${story.amountRaised.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Amount Raised</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-500">{Math.round((story.amountRaised / story.goal) * 100)}%</div>
                          <div className="text-sm text-gray-600">Goal Achievement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-500">{story.stats.supporters}</div>
                          <div className="text-sm text-gray-600">Supporters</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-500">{story.timeline}</div>
                          <div className="text-sm text-gray-600">Duration</div>
                        </div>
                      </div>
                      
                      {story.campaignType === 'Stat-based' && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-3">Performance Metrics</h5>
                          <div className="space-y-2 text-sm">
                            {story.sport === 'Soccer' && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Goals Scored:</span>
                                  <span className="font-medium">{story.stats.goalsScored}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Avg per Goal:</span>
                                  <span className="font-medium">${story.stats.avgDonationPerGoal}</span>
                                </div>
                              </>
                            )}
                            {story.sport === 'Track & Field' && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Miles Run:</span>
                                  <span className="font-medium">{story.stats.milesRun}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Events:</span>
                                  <span className="font-medium">{story.stats.events}</span>
                                </div>
                              </>
                            )}
                            {story.sport === 'Football' && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Touchdowns:</span>
                                  <span className="font-medium">{story.stats.touchdowns}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Yards Gained:</span>
                                  <span className="font-medium">{story.stats.yardsGained}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Coaches Say</h2>
            <p className="text-xl text-white/90">Hear from the coaches who've transformed their fundraising</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <Card.Body>
                  <div className="w-8 h-8 text-yellow-500 mb-4 font-serif text-4xl leading-none flex items-center justify-center">"</div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-orange-600">{testimonial.title}</p>
                    <p className="text-gray-600 text-sm">{testimonial.school}</p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of teams who've already exceeded their fundraising goals with SportsPledge.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Start Your Campaign</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              View More Stories
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
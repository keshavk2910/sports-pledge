import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { 
  CheckCircleIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function StartCampaign() {
  const [selectedType, setSelectedType] = useState('stat-based');
  const [currentStep, setCurrentStep] = useState(1);

  const campaignTypes = [
    {
      id: 'stat-based',
      title: 'Stat-Based Campaign',
      description: 'Supporters pledge based on performance metrics',
      features: [
        'Goals scored, points earned, games won',
        'Higher engagement and motivation',
        'Performance-driven donations',
        'Real-time tracking'
      ],
      icon: ChartBarIcon
    },
    {
      id: 'thon-based',
      title: 'Thon-Based Campaign',
      description: 'Traditional pledge drives with modern tools',
      features: [
        'Set participation goals',
        'Track team activities',
        'Community challenges',
        'Easy donation collection'
      ],
      icon: ClockIcon
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Choose Campaign Type',
      description: 'Select between stat-based or thon-based fundraising'
    },
    {
      number: 2,
      title: 'Team Information',
      description: 'Tell us about your team and goals'
    },
    {
      number: 3,
      title: 'Campaign Details',
      description: 'Set your fundraising targets and timeline'
    },
    {
      number: 4,
      title: 'Launch',
      description: 'Review and launch your campaign'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Campaign
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Create an engaging fundraising campaign that motivates your team and 
            connects with your community like never before.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.number 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircleIcon className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className="text-sm font-medium text-gray-900">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.number ? 'bg-orange-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Step 1: Campaign Type Selection */}
          {currentStep === 1 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Choose Your Campaign Type
                </h2>
                <p className="text-lg text-gray-600">
                  Select the fundraising approach that best fits your team
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {campaignTypes.map((type) => (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedType === type.id 
                        ? 'ring-2 ring-orange-500 shadow-lg' 
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <Card.Body className="text-center">
                      <type.icon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      <ul className="space-y-2 text-left">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button size="lg" onClick={() => setCurrentStep(2)}>
                  Continue with {selectedType === 'stat-based' ? 'Stat-Based' : 'Thon-Based'} Campaign
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Team Information */}
          {currentStep === 2 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tell Us About Your Team
                </h2>
                <p className="text-lg text-gray-600">
                  Help us create the perfect campaign for your team
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <Card.Body className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your team name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sport
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="">Select your sport</option>
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                        <option value="soccer">Soccer</option>
                        <option value="baseball">Baseball</option>
                        <option value="track">Track & Field</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        School/Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter school or organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team Level
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="">Select team level</option>
                        <option value="youth">Youth (Under 12)</option>
                        <option value="middle">Middle School</option>
                        <option value="high">High School</option>
                        <option value="college">College</option>
                        <option value="adult">Adult/Recreation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Players
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter number of players"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Coach/Contact Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter coach or contact name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter contact email"
                      />
                    </div>
                  </Card.Body>
                </Card>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(3)}>
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Campaign Details */}
          {currentStep === 3 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Campaign Details
                </h2>
                <p className="text-lg text-gray-600">
                  Set your fundraising goals and campaign timeline
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <Card.Body className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fundraising Goal
                      </label>
                      <div className="relative">
                        <CurrencyDollarIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Enter fundraising goal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Duration
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="">Select duration</option>
                        <option value="2">2 weeks</option>
                        <option value="4">1 month</option>
                        <option value="8">2 months</option>
                        <option value="12">3 months</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>

                    {selectedType === 'stat-based' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tracking Statistics
                        </label>
                        <div className="space-y-2">
                          {['Goals Scored', 'Games Won', 'Points Earned', 'Miles Run'].map((stat) => (
                            <label key={stat} className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm text-gray-700">{stat}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Description
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Tell supporters what you're raising money for..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Funds Will Be Used For
                      </label>
                      <div className="space-y-2">
                        {['Equipment', 'Uniforms', 'Travel', 'Tournament Fees', 'Facility Costs'].map((use) => (
                          <label key={use} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-gray-700">{use}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setCurrentStep(2)}>
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(4)}>
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Launch */}
          {currentStep === 4 && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Launch!
                </h2>
                <p className="text-lg text-gray-600">
                  Review your campaign details and launch when ready
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <Card.Header>
                    <h3 className="text-lg font-semibold text-gray-900">Campaign Summary</h3>
                  </Card.Header>
                  <Card.Body className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Campaign Type:</span>
                      <span className="font-medium">{selectedType === 'stat-based' ? 'Stat-Based' : 'Thon-Based'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Team Name:</span>
                      <span className="font-medium">Madison Academy Soccer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fundraising Goal:</span>
                      <span className="font-medium">$5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">1 month</span>
                    </div>
                  </Card.Body>
                </Card>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Your campaign will be reviewed and approved within 24 hours</li>
                    <li>• You'll receive setup instructions and marketing materials</li>
                    <li>• Start sharing with your community and collecting pledges</li>
                    <li>• Track progress in real-time through your dashboard</li>
                  </ul>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setCurrentStep(3)}>
                    Back
                  </Button>
                  <Button size="lg">
                    Launch Campaign
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { 
  PlusIcon,
  EyeIcon,
  ShareIcon,
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  CalendarIcon,
  BellIcon,
  CogIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: 'Coach Martinez',
    email: 'coach.martinez@example.com',
    role: 'Team Coach',
    school: 'Madison Academy',
    joinDate: '2024-01-15'
  };

  // Mock campaign data
  const campaigns = [
    {
      id: 1,
      name: 'Madison Eagles Soccer Team',
      type: 'Stat-based',
      status: 'Active',
      goal: 5000,
      raised: 3200,
      supporters: 48,
      daysLeft: 12,
      recentActivity: '2 new pledges today'
    },
    {
      id: 2,
      name: 'Basketball Team Equipment Fund',
      type: 'Thon-based',
      status: 'Completed',
      goal: 3000,
      raised: 3450,
      supporters: 67,
      daysLeft: 0,
      recentActivity: 'Campaign ended successfully'
    }
  ];

  // Mock stats
  const stats = [
    {
      title: 'Total Raised',
      value: '$6,650',
      change: '+12%',
      changeType: 'increase',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Active Campaigns',
      value: '1',
      change: 'No change',
      changeType: 'neutral',
      icon: ChartBarIcon
    },
    {
      title: 'Total Supporters',
      value: '115',
      change: '+8%',
      changeType: 'increase',
      icon: UsersIcon
    },
    {
      title: 'Success Rate',
      value: '100%',
      change: 'Maintained',
      changeType: 'neutral',
      icon: TrophyIcon
    }
  ];

  // Mock recent activity
  const recentActivity = [
    {
      id: 1,
      type: 'pledge',
      message: 'John Smith pledged $25 per goal',
      time: '2 hours ago',
      campaign: 'Madison Eagles Soccer Team'
    },
    {
      id: 2,
      type: 'milestone',
      message: 'Reached 50% of funding goal',
      time: '1 day ago',
      campaign: 'Madison Eagles Soccer Team'
    },
    {
      id: 3,
      type: 'performance',
      message: 'Team scored 3 goals in last game',
      time: '2 days ago',
      campaign: 'Madison Eagles Soccer Team'
    },
    {
      id: 4,
      type: 'completion',
      message: 'Basketball campaign completed successfully',
      time: '1 week ago',
      campaign: 'Basketball Team Equipment Fund'
    }
  ];

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'pledge': return CurrencyDollarIcon;
      case 'milestone': return TrophyIcon;
      case 'performance': return ChartBarIcon;
      case 'completion': return CheckCircleIcon;
      default: return BellIcon;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-gray-600">Welcome back, {user.name}</p>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline">
                    <CogIcon className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                  <Button>
                    <PlusIcon className="w-4 h-4 mr-2" />
                    New Campaign
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <Card.Body>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-1">
                        {stat.changeType === 'increase' && (
                          <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
                        )}
                        {stat.changeType === 'decrease' && (
                          <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm ${
                          stat.changeType === 'increase' ? 'text-green-600' :
                          stat.changeType === 'decrease' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaigns Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Your Campaigns</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>

              <div className="space-y-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id}>
                    <Card.Body>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {campaign.name}
                          </h3>
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
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <EyeIcon className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <ShareIcon className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </div>
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
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-600">
                            <UsersIcon className="w-4 h-4 inline mr-1" />
                            {campaign.supporters} supporters
                          </span>
                          {campaign.daysLeft > 0 && (
                            <span className="text-orange-600">
                              <CalendarIcon className="w-4 h-4 inline mr-1" />
                              {campaign.daysLeft} days left
                            </span>
                          )}
                        </div>
                        <span className="text-green-600 font-medium">
                          {campaign.recentActivity}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => {
                      const Icon = getActivityIcon(activity.type);
                      return (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <Icon className="w-5 h-5 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500">{activity.campaign}</p>
                            <p className="text-xs text-gray-400">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card.Body>
              </Card>

              {/* Quick Actions */}
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      Create New Campaign
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <ShareIcon className="w-4 h-4 mr-2" />
                      Share Active Campaign
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <ChartBarIcon className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <UsersIcon className="w-4 h-4 mr-2" />
                      Manage Team
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Performance Summary */}
              <Card>
                <Card.Header>
                  <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">New Pledges</span>
                      <span className="text-sm font-medium">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Goals Scored</span>
                      <span className="text-sm font-medium">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Games Won</span>
                      <span className="text-sm font-medium">4/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Funds Earned</span>
                      <span className="text-sm font-medium text-green-600">$1,250</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
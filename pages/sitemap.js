import Layout from '../components/Layout';
import Card from '../components/Card';
import { 
  HomeIcon,
  InformationCircleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  TrophyIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  UserIcon,
  LockClosedIcon,
  UserPlusIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CogIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function Sitemap() {
  const pageCategories = [
    {
      title: 'Main Pages',
      description: 'Core public pages and landing areas',
      icon: HomeIcon,
      pages: [
        { name: 'Homepage', url: '/', description: 'Main landing page with hero section and featured content', icon: HomeIcon },
        { name: 'About Us', url: '/about', description: 'Company information, mission, team, and values', icon: InformationCircleIcon },
        { name: 'How It Works', url: '/how-it-works', description: 'Detailed explanation of the platform and process', icon: QuestionMarkCircleIcon },
        { name: 'Success Stories', url: '/success-stories', description: 'Case studies and testimonials from successful campaigns', icon: TrophyIcon },
        { name: 'Contact', url: '/contact', description: 'Contact form and company information', icon: PhoneIcon }
      ]
    },
    {
      title: 'Campaign & Team Management',
      description: 'Fundraising campaigns and team-related pages',
      icon: TrophyIcon,
      pages: [
        { name: 'Start a Campaign', url: '/start-campaign', description: 'Multi-step campaign creation wizard', icon: PlusIcon },
        { name: 'Find Your Team', url: '/find-team', description: 'Search and discover teams with filtering options', icon: MagnifyingGlassIcon },
        { name: 'Campaign Details', url: '/campaign/1', description: 'Individual campaign view with donation options (Dynamic: /campaign/[id])', icon: ChartBarIcon },
        { name: 'Team Profile', url: '/team/1', description: 'Team information, roster, and statistics (Dynamic: /team/[id])', icon: UserGroupIcon },
        { name: 'Donate/Payment', url: '/donate/1', description: 'Secure donation flow and payment processing (Dynamic: /donate/[campaignId])', icon: CurrencyDollarIcon }
      ]
    },
    {
      title: 'User Authentication & Account',
      description: 'User registration, login, and account management',
      icon: UserIcon,
      pages: [
        { name: 'Sign In', url: '/signin', description: 'User authentication with social login options', icon: LockClosedIcon },
        { name: 'Register', url: '/register', description: 'Comprehensive user registration form', icon: UserPlusIcon },
        { name: 'Dashboard', url: '/dashboard', description: 'User dashboard with campaign overview and analytics', icon: ChartBarIcon },
        { name: 'Profile & Settings', url: '/profile', description: 'Account settings, notifications, and privacy controls', icon: CogIcon }
      ]
    },
    {
      title: 'Legal & Support',
      description: 'Legal documents and help resources',
      icon: DocumentTextIcon,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data privacy and protection policies', icon: ShieldCheckIcon },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions for platform usage', icon: DocumentTextIcon },
        { name: 'Help/FAQ', url: '/help', description: 'Frequently asked questions and support', icon: QuestionMarkCircleIcon },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete site navigation and page listing (Current Page)', icon: ExclamationTriangleIcon }
      ]
    },
    {
      title: 'Admin & Backend (Development)',
      description: 'Administrative and backend functionality',
      icon: BuildingOfficeIcon,
      pages: [
        { name: 'Admin Dashboard', url: '/admin', description: 'Administrative interface for platform management', icon: CogIcon },
        { name: 'Admin Users', url: '/admin/users', description: 'User management and moderation tools', icon: UserGroupIcon },
        { name: 'Admin Campaigns', url: '/admin/campaigns', description: 'Campaign approval and management', icon: TrophyIcon },
        { name: 'Admin Analytics', url: '/admin/analytics', description: 'Platform-wide analytics and reporting', icon: ChartBarIcon },
        { name: 'Admin Settings', url: '/admin/settings', description: 'Platform configuration and settings', icon: CogIcon }
      ]
    },
    {
      title: 'API Endpoints (Development)',
      description: 'Backend API routes and endpoints',
      icon: AcademicCapIcon,
      pages: [
        { name: 'Hello API', url: '/api/hello', description: 'Sample API endpoint for testing', icon: ExclamationTriangleIcon },
        { name: 'Auth API', url: '/api/auth', description: 'Authentication and authorization endpoints', icon: LockClosedIcon },
        { name: 'Campaigns API', url: '/api/campaigns', description: 'Campaign CRUD operations and data', icon: TrophyIcon },
        { name: 'Users API', url: '/api/users', description: 'User management and profile operations', icon: UserIcon },
        { name: 'Donations API', url: '/api/donations', description: 'Payment processing and donation tracking', icon: CurrencyDollarIcon },
        { name: 'Teams API', url: '/api/teams', description: 'Team data and roster management', icon: UserGroupIcon }
      ]
    }
  ];

  const getStatusBadge = (url) => {
    // Check if page exists based on our created pages
    const existingPages = [
      '/', '/about', '/how-it-works', '/success-stories', '/contact',
      '/start-campaign', '/find-team', '/campaign/1', '/team/1', '/donate/1',
      '/signin', '/register', '/dashboard', '/profile', '/sitemap'
    ];
    
    if (existingPages.includes(url)) {
      return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Live</span>;
    } else if (url.startsWith('/api/')) {
      return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">API</span>;
    } else {
      return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Planned</span>;
    }
  };

  const handlePageClick = (url) => {
    if (url.startsWith('/api/') || url.startsWith('/admin/')) {
      alert(`${url} - This is a backend/API endpoint that would be implemented server-side`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SportsPledge Sitemap</h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete navigation map of all pages and functionality
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">Live</span>
                <span className="text-gray-600">Fully implemented pages</span>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">API</span>
                <span className="text-gray-600">Backend API endpoints</span>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">Planned</span>
                <span className="text-gray-600">Future development</span>
              </div>
            </div>
          </div>

          {/* Page Categories */}
          <div className="space-y-8">
            {pageCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <Card.Header>
                  <div className="flex items-center">
                    <category.icon className="w-6 h-6 text-orange-500 mr-3" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => handlePageClick(page.url)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <page.icon className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                            <h3 className="font-medium text-gray-900 text-sm">{page.name}</h3>
                          </div>
                          {getStatusBadge(page.url)}
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{page.description}</p>
                        <div className="flex items-center justify-between">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-blue-600">
                            {page.url}
                          </code>
                          {(page.url.startsWith('/api/') || page.url.startsWith('/admin/')) && (
                            <span className="text-xs text-yellow-600">Backend</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <Card.Body className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {pageCategories.reduce((total, cat) => total + cat.pages.filter(p => 
                    ['/', '/about', '/how-it-works', '/success-stories', '/contact', '/start-campaign', 
                     '/find-team', '/campaign/1', '/team/1', '/donate/1', '/signin', '/register', 
                     '/dashboard', '/profile', '/sitemap'].includes(p.url)
                  ).length, 0)}
                </div>
                <div className="text-sm text-gray-600">Live Pages</div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {pageCategories.reduce((total, cat) => total + cat.pages.filter(p => p.url.startsWith('/api/')).length, 0)}
                </div>
                <div className="text-sm text-gray-600">API Endpoints</div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  {pageCategories.reduce((total, cat) => total + cat.pages.filter(p => p.url.startsWith('/admin/')).length, 0)}
                </div>
                <div className="text-sm text-gray-600">Admin Pages</div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {pageCategories.reduce((total, cat) => total + cat.pages.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Pages</div>
              </Card.Body>
            </Card>
          </div>

          {/* Development Notes */}
          <Card className="mt-8">
            <Card.Header>
              <h2 className="text-xl font-bold text-gray-900">Development Notes</h2>
            </Card.Header>
            <Card.Body>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Live Pages (Ready for Production)</h3>
                  <p className="text-gray-600 text-sm">
                    All main user-facing pages are fully implemented with responsive design, 
                    form validation, and professional UI components. These pages provide a 
                    complete user experience for the sports fundraising platform.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Backend Integration Required</h3>
                  <p className="text-gray-600 text-sm">
                    API endpoints and admin pages need backend implementation with database 
                    integration, authentication, payment processing, and data management systems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dynamic Routes</h3>
                  <p className="text-gray-600 text-sm">
                    Pages with [id] or [campaignId] in the URL are dynamic routes that will 
                    display different content based on the ID parameter passed in the URL.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
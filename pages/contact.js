import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: 'support@sportspledge.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: '1-800-SPORTS-1',
      description: 'Monday - Friday, 9 AM - 6 PM EST'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: '123 Sports Drive, Austin, TX 78701',
      description: 'Our headquarters in the heart of Austin'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: 'Mon-Fri: 9 AM - 6 PM EST',
      description: 'Weekend support available for urgent issues'
    }
  ];

  const categories = [
    {
      id: 'general',
      title: 'General Inquiry',
      icon: QuestionMarkCircleIcon,
      description: 'General questions about SportsPledge'
    },
    {
      id: 'support',
      title: 'Technical Support',
      icon: CogIcon,
      description: 'Issues with the platform or campaigns'
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      icon: ExclamationTriangleIcon,
      description: 'Questions about fees, payments, or billing'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      icon: ChatBubbleLeftRightIcon,
      description: 'Business partnerships and collaborations'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Have questions about SportsPledge? We&apos;re here to help! Reach out to our 
            team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Multiple ways to reach our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <info.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Brief subject line"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Help Categories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Can We Help?</h3>
              <p className="text-gray-600 mb-8">
                Choose the category that best describes your inquiry for faster assistance.
              </p>

              <div className="space-y-4">
                {categories.map((category) => (
                  <Card key={category.id} className="hover:shadow-md transition-shadow">
                    <Card.Body>
                      <div className="flex items-start">
                        <category.icon className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {category.title}
                          </h4>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Quick Help */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Need Quick Help?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Check our <Link href="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link> guide</li>
                  <li>• Browse our <a href="#" className="text-blue-600 hover:underline">FAQ section</a></li>
                  <li>• View <Link href="/success-stories" className="text-blue-600 hover:underline">Success Stories</Link> for inspiration</li>
                  <li>• Download our <a href="#" className="text-blue-600 hover:underline">Quick Start Guide</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to frequently asked questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <Card.Body>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly can we start a campaign?
                </h3>
                <p className="text-gray-600">
                  Most teams can launch their campaign within 24 hours of signing up. 
                  Our streamlined setup process makes it easy to get started quickly.
                </p>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What sports do you support?
                </h3>
                <p className="text-gray-600">
                  We support all sports and activities! From traditional sports like 
                  football and basketball to dance teams, debate clubs, and more.
                </p>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is there a minimum fundraising amount?
                </h3>
                <p className="text-gray-600">
                  No minimum! Whether you&apos;re raising $500 or $50,000, SportsPledge 
                  scales to meet your team&apos;s needs and goals.
                </p>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer phone support?
                </h3>
                <p className="text-gray-600">
                  Yes! Our support team is available by phone Monday-Friday, 9 AM - 6 PM EST. 
                  We also offer email and chat support.
                </p>
              </Card.Body>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h2>
          <p className="text-white/90 mb-6">
            Our support team is standing by to help you succeed
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              Call Now: 1-800-SPORTS-1
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Start Live Chat
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
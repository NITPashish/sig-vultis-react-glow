import { Link } from 'react-router-dom';
import { useState } from 'react';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'api-reference', label: 'API Reference' },
    { id: 'sdk-docs', label: 'SDK Documentation' },
    { id: 'guides', label: 'Guides' },
  ];

  const sections = {
    'getting-started': [
      {
        title: 'Quick Start',
        content: 'Learn how to set up and start using Vultisig in minutes.',
        link: '/docs/quick-start',
      },
      {
        title: 'Installation',
        content: 'Step-by-step guide to install and configure Vultisig.',
        link: '/docs/installation',
      },
      {
        title: 'Basic Concepts',
        content: 'Understanding the core concepts of Vultisig.',
        link: '/docs/basic-concepts',
      },
    ],
    'api-reference': [
      {
        title: 'Authentication',
        content: 'Learn about API authentication and security.',
        link: '/docs/api/authentication',
      },
      {
        title: 'Endpoints',
        content: 'Complete API endpoint documentation.',
        link: '/docs/api/endpoints',
      },
      {
        title: 'Webhooks',
        content: 'Configure and manage webhooks.',
        link: '/docs/api/webhooks',
      },
    ],
    'sdk-docs': [
      {
        title: 'JavaScript SDK',
        content: 'Documentation for the JavaScript/TypeScript SDK.',
        link: '/docs/sdk/javascript',
      },
      {
        title: 'Python SDK',
        content: 'Documentation for the Python SDK.',
        link: '/docs/sdk/python',
      },
      {
        title: 'Go SDK',
        content: 'Documentation for the Go SDK.',
        link: '/docs/sdk/go',
      },
    ],
    'guides': [
      {
        title: 'Multi-Signature Setup',
        content: 'Guide to setting up multi-signature wallets.',
        link: '/docs/guides/multi-sig',
      },
      {
        title: 'Transaction Management',
        content: 'Managing and monitoring transactions.',
        link: '/docs/guides/transactions',
      },
      {
        title: 'Security Best Practices',
        content: 'Security recommendations and best practices.',
        link: '/docs/guides/security',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Documentation</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Comprehensive guides and technical documentation for integrating and using Vultisig
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-6 h-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections[activeTab as keyof typeof sections].map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <p className="text-gray-400">{section.content}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">API Status</h3>
              <p className="text-gray-400 mb-6">Check the current status of our API services.</p>
              <Link to="/status" className="text-blue-500 hover:text-blue-400">
                View Status →
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">GitHub</h3>
              <p className="text-gray-400 mb-6">Access our open-source repositories and examples.</p>
              <a
                href="https://github.com/vultisig"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Visit GitHub →
              </a>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-400 mb-6">Join our community for support and discussions.</p>
              <Link to="/community" className="text-blue-500 hover:text-blue-400">
                Join Community →
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Changelog</h3>
              <p className="text-gray-400 mb-6">Track updates and new features.</p>
              <Link to="/changelog" className="text-blue-500 hover:text-blue-400">
                View Changelog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-blue-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you with any questions or issues
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Contact Support
            </Link>
            <Link
              to="/discord"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs; 
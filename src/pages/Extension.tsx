import { Link } from 'react-router-dom';

const Extension = () => {
  const features = [
    {
      title: 'Seamless Integration',
      description: 'Connect with your favorite dApps and DeFi protocols effortlessly',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track your transactions and wallet activity in real-time',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Enhanced Security',
      description: 'Multi-signature protection for all your transactions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  const supportedPlatforms = [
    {
      name: 'Chrome',
      logo: '/images/platforms/chrome.svg',
    },
    {
      name: 'Firefox',
      logo: '/images/platforms/firefox.svg',
    },
    {
      name: 'Edge',
      logo: '/images/platforms/edge.svg',
    },
    {
      name: 'Brave',
      logo: '/images/platforms/brave.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Vultisig Extension</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Secure your DeFi activities with our powerful browser extension
          </p>
          <div className="flex justify-center mt-8">
            <Link
              to="/download"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Download Extension
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl">
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Install</h3>
              <p className="text-gray-400">Add the Vultisig extension to your browser</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-400">Link your existing wallet or create a new one</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure</h3>
              <p className="text-gray-400">Set up multi-signature protection</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Use</h3>
              <p className="text-gray-400">Start using dApps with enhanced security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Supported Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportedPlatforms.map((platform, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl text-center">
                <div className="h-16 mb-4 flex items-center justify-center">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Multi-Signature Protection</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Multiple key holders required for transactions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Customizable signature requirements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Real-time transaction monitoring
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Advanced Security</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  End-to-end encryption
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Secure key storage
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Regular security audits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-blue-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Security?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Download the Vultisig extension and start securing your DeFi activities today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/download"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Download Now
            </Link>
            <Link
              to="/docs"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extension; 
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Advanced Security Features
        </h1>

        {/* Multi-Signature Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Multi-Signature Technology</h2>
              <p className="text-gray-300 mb-6">
                Our advanced multi-signature technology ensures that no single point of failure can compromise your assets. 
                Multiple keys are required to authorize transactions, providing an additional layer of security.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple key holders for enhanced security</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customizable signature requirements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time transaction monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Security Suite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hardware Security</h3>
              <p className="text-gray-300">
                Secure key storage with hardware security modules and tamper-resistant technology.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Encryption</h3>
              <p className="text-gray-300">
                State-of-the-art encryption protocols to protect your data and transactions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Access Control</h3>
              <p className="text-gray-300">
                Granular access controls and permission management for your team.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Vultisig integrates with your existing infrastructure and workflows, making it easy to implement 
              enterprise-grade security without disrupting your operations.
            </p>
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block"
            >
              Schedule a Demo
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features; 
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">How Vultisig Works</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            A deep dive into our multi-signature technology and how it secures your digital assets
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Key Generation</h3>
              <p className="text-gray-400">
                Your private keys are split into multiple shares using advanced cryptographic algorithms. Each share is distributed to different key holders.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Transaction Signing</h3>
              <p className="text-gray-400">
                When a transaction is initiated, multiple key holders must approve it by providing their shares. The system combines these shares to sign the transaction.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Security Verification</h3>
              <p className="text-gray-400">
                Each transaction undergoes multiple security checks and verifications before being processed, ensuring the highest level of protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Multi-Signature Technology</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Threshold Signature Scheme (TSS) implementation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Distributed key generation and management
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Secure key share distribution
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Real-time transaction monitoring
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Security Features</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Hardware Security Module (HSM) integration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  End-to-end encryption
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Multi-factor authentication
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Advanced access control mechanisms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-400 mb-6">
                Seamlessly integrate Vultisig into your existing infrastructure with our comprehensive API.
              </p>
              <Link to="/docs" className="text-blue-500 hover:text-blue-400">
                View API Documentation →
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">SDK Support</h3>
              <p className="text-gray-400 mb-6">
                Multiple programming languages supported with our robust SDKs.
              </p>
              <Link to="/docs" className="text-blue-500 hover:text-blue-400">
                Explore SDKs →
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-400 mb-6">
                Tailored solutions for enterprise clients with specific requirements.
              </p>
              <Link to="/contact" className="text-blue-500 hover:text-blue-400">
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-blue-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Assets?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the growing number of institutions trusting Vultisig for their digital asset security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/download"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Download App
            </Link>
            <Link
              to="/contact"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks; 
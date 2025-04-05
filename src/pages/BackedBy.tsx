import { Link } from 'react-router-dom';

const BackedBy = () => {
  const investors = [
    {
      name: 'Binance Labs',
      logo: '/images/investors/binance-labs.svg',
      description: 'Leading blockchain investment firm and innovation incubator',
    },
    {
      name: 'Jump Crypto',
      logo: '/images/investors/jump-crypto.svg',
      description: 'Global market maker and technology company',
    },
    {
      name: 'Framework Ventures',
      logo: '/images/investors/framework.svg',
      description: 'Venture capital firm focused on blockchain technology',
    },
    {
      name: 'Blockchain Capital',
      logo: '/images/investors/blockchain-capital.svg',
      description: 'Pioneering blockchain technology investment firm',
    },
  ];

  const partners = [
    {
      name: 'Fireblocks',
      logo: '/images/partners/fireblocks.svg',
      description: 'Enterprise-grade platform for digital asset operations',
    },
    {
      name: 'Chainlink',
      logo: '/images/partners/chainlink.svg',
      description: 'Decentralized oracle network',
    },
    {
      name: 'Polygon',
      logo: '/images/partners/polygon.svg',
      description: 'Layer 2 scaling solution for Ethereum',
    },
    {
      name: 'Arbitrum',
      logo: '/images/partners/arbitrum.svg',
      description: 'Layer 2 rollup solution for Ethereum',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Backed By Industry Leaders</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Supported by the most trusted names in blockchain and digital asset security
          </p>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investors.map((investor, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl text-center">
                <div className="h-20 mb-6 flex items-center justify-center">
                  <img
                    src={investor.logo}
                    alt={investor.name}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{investor.name}</h3>
                <p className="text-gray-400">{investor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Strategic Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl text-center">
                <div className="h-20 mb-6 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-400">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">$50M+</div>
              <p className="text-gray-400">Total Investment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
              <p className="text-gray-400">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">$1B+</div>
              <p className="text-gray-400">Assets Secured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-blue-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Network</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with Vultisig to revolutionize digital asset security
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Become a Partner
            </Link>
            <Link
              to="/contact"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackedBy; 
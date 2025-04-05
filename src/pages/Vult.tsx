import { Link } from 'react-router-dom';

const Vult = () => {
  const tokenMetrics = [
    {
      label: 'Total Supply',
      value: '1,000,000,000',
    },
    {
      label: 'Circulating Supply',
      value: '750,000,000',
    },
    {
      label: 'Market Cap',
      value: '$75,000,000',
    },
    {
      label: 'Token Price',
      value: '$0.10',
    },
  ];

  const tokenomics = [
    {
      category: 'Community',
      percentage: '40%',
      description: 'Allocated for community rewards and ecosystem growth',
    },
    {
      category: 'Team',
      percentage: '20%',
      description: 'Vested over 4 years with 1-year cliff',
    },
    {
      category: 'Development',
      percentage: '15%',
      description: 'Funded for ongoing development and improvements',
    },
    {
      category: 'Marketing',
      percentage: '10%',
      description: 'Used for marketing and promotional activities',
    },
    {
      category: 'Reserve',
      percentage: '15%',
      description: 'Held in reserve for future initiatives',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">$VULT Token</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            The native token powering the Vultisig ecosystem
          </p>
        </div>
      </section>

      {/* Token Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tokenMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl text-center">
                <h3 className="text-gray-400 mb-2">{metric.label}</h3>
                <div className="text-2xl font-bold text-blue-500">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Token Utility</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Governance</h3>
              <p className="text-gray-400">
                $VULT holders can participate in governance decisions and vote on protocol upgrades.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Staking</h3>
              <p className="text-gray-400">
                Stake $VULT to earn rewards and access premium features of the platform.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Fee Reduction</h3>
              <p className="text-gray-400">
                Hold $VULT to receive discounts on transaction fees and premium services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokenomics.map((item, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{item.category}</h3>
                  <span className="text-blue-500 font-bold">{item.percentage}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How to Buy $VULT</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Wallet</h3>
              <p className="text-gray-400">Set up a compatible wallet to store your $VULT tokens</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get ETH</h3>
              <p className="text-gray-400">Purchase ETH from your preferred exchange</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Swap for $VULT</h3>
              <p className="text-gray-400">Use DEX to swap ETH for $VULT tokens</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Stake & Earn</h3>
              <p className="text-gray-400">Stake your tokens to earn rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-blue-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the $VULT Community?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get started with $VULT tokens and become part of our growing ecosystem
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/docs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Learn More
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

export default Vult; 
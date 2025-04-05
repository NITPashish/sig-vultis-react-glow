import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Airdrop Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-center">
        <p className="text-white font-medium">
          Vultisig Airdrop is LIVE! Don't miss your chance to claim your share of $VULT and be part of the future of wallet security.
          <Link to="/airdrop" className="ml-2 underline font-bold">Go to Airdrop</Link>
        </p>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Regain control with the Seedless, Multi-chain crypto vault
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience top-tier security with Vultisig, the ultimate self-custodial, multi-chain crypto vault. 
              It's based on secure threshold signatures. It's the first seedless, institutional-grade, multi-chain vault for everyone on the market.
            </p>
            <div className="space-x-4">
              <Link 
                to="/download" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block"
              >
                Download Now
              </Link>
              <Link 
                to="/learn-more" 
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Vultisig Vaults are battle-tested and trusted by thousands of users, with numbers growing daily.
          </h2>
          <h3 className="text-xl font-semibold text-center mb-8">Trusted by the best</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-lg font-bold">TC</span>
              </div>
              <p className="text-center">THORChain Treasury</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-lg font-bold">VS</span>
              </div>
              <p className="text-center">Vultisig Treasury</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-lg font-bold">WE</span>
              </div>
              <p className="text-center">WE Treasury</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-lg font-bold">DS</span>
              </div>
              <p className="text-center">DeFi Suisse Treasury</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-lg font-bold">ZK</span>
              </div>
              <p className="text-center">ZKFinance Treasury</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 flex items-center justify-center">
                <span className="text-lg font-bold">RJ</span>
              </div>
              <p className="text-center">RUJI Treasury</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Problems Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What is wrong with wallets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Single-signature wallets are dangerous</h3>
              <p className="text-gray-300">
                Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet?
                One mistake and forever rekt.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hardware wallets are clunky</h3>
              <p className="text-gray-300">
                Small screens, small buttons, annoying interfaces. Complicated setup instructions, scary firmware updates and confusing transactions.
                Why can't it be better?
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Multi-signature wallets are painful</h3>
              <p className="text-gray-300">
                Multi-sig is a solution, but it is not chain agnostic or dynamic. Different networks (ETH, BTC, SOL) have different multi-sig setups, making a single UX impossible.
                If only there was something that works for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Solution
          </h2>
          <p className="text-xl text-center mb-12">
            VULTISIG is the next evolution in crypto vaults
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Threshold Signatures</h3>
              <p className="text-gray-300">
                Multiple devices to sign—no single point of failure. Never lose funds with one compromised device.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Familiar Hardware</h3>
              <p className="text-gray-300">
                Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vault Shares</h3>
              <p className="text-gray-300">
                No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rich UI</h3>
              <p className="text-gray-300">
                Have all information displayed on big screens. Easy to see—easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Security Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Experience Security Without Sacrifice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Vault Generation</h3>
              <p className="text-gray-300 mb-4">
                KeyGen time: 3-5 seconds.
              </p>
              <p className="text-gray-300">
                Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Transaction Signing</h3>
              <p className="text-gray-300 mb-4">
                KeySign time: 1-3 seconds.
              </p>
              <p className="text-gray-300">
                One device starts the transaction. A second paired device confirms the transaction. It is natively "two-factor" and is done in real time.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Resharing</h3>
              <p className="text-gray-300 mb-4">
                Reshare Time: 3-5 seconds.
              </p>
              <p className="text-gray-300">
                Lost a device? Replace it easily without changing the vault or address. Want to increase security? Go from 2-of-3 to 3-of-4 setup easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Best features in One Place
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Vultisig: Asset Management Hub</h3>
              <p className="text-gray-300">
                Vultisig is chain agnostic - Bitcoin, Ethereum, Solana, THORChain and many more. The first multi-chain, multi-asset, multi-signature wallet in the world for everyone. You can deposit, send, swap and more inside Vultisig.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">DeFi In your pocket</h3>
              <p className="text-gray-300">
                Vultisig is natively DeFi compatible - rebalance your portfolio right inside the vault. It also supports advanced DeFi functions such as bonding to Nodes, Staking and more!
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expand Your Wallet's Power</h3>
              <p className="text-gray-300">
                Unlock new possibilities with Vultisig Plugins. From automated investments (DCA) to salary management, customize your wallet with features tailored to your needs. Simplify your crypto experience with tools that work seamlessly together. (Still in development)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Features Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Other Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Full DeFi</h3>
              <p className="text-gray-300">
                Swaps, Pools, Bridging. All DeFi functions right from your Vault.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Remote Signing</h3>
              <p className="text-gray-300">
                Sign with a remote co-signer. All messages are encrypted between devices.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Transaction Policies</h3>
              <p className="text-gray-300">
                Define transaction policies for your vault - spending limits, address whitelists and more.
                <span className="block mt-2 text-blue-400">(COMING SOON)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Vultisig is for everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">CRYPTO NATIVES</h3>
              <p className="text-gray-300">
                Swap, borrow, save, or spend in one wallet with institutional-grade security. You never need a second wallet again.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">WHALES</h3>
              <p className="text-gray-300">
                Do you hold significant funds in crypto? Then you MUST consider upgrading to a Vultisig secure vault. Your funds are at-risk on all other wallets. Download it now.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">FUNDS</h3>
              <p className="text-gray-300">
                Vultisig is the open-source audited alternative to your current "custodian". You know it's time to switch to self-custody. Remote co-signing means you can access funds anywhere in the world.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">TREASURIES</h3>
              <p className="text-gray-300">
                Vultisig is natively compatible to all chains. Together with transaction policies, designate your leads the ability to pay staff with limits, whitelists and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Secure your digital assets now!
          </h2>
          <Link 
            to="/download" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block"
          >
            Download
          </Link>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            JOIN THE DISCORD TO REQUEST NEW FEATURES!
          </h2>
          <Link 
            to="/discord" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold inline-block"
          >
            Join Discord
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import mockup1 from '../images/mobile/mockup1.png';
import mockup2 from '../images/mobile/mockup2.png';
import mockup3 from '../images/mobile/mockup3.png';
import robot1 from '../images/robots/robot1.png';
import robot2 from '../images/robots/robot2.png';
import robot3 from '../images/robots/robot3.png';
import vultisigIcon from '../images/icon/logo3.png';
import background1 from '../images/background1.png';
import background2 from '../images/background2.png';
import background3 from '../images/background3.png';
import section from '../images/section.png';
import Marquee from "react-fast-marquee";

// Add these styles at the top of the file after imports
const textAnimationStyles = `
@keyframes focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

.animate-focus-in {
  animation: focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.animate-focus-in-delay-1 {
  animation: focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s both;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-up-delay-1 {
  animation: fade-in-up 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-fade-in-up-delay-2 {
  animation: fade-in-up 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
`;

// Add these styles at the top after existing styles
const spotlightStyles = `
@keyframes spotlight {
  0% {
    opacity: 0;
    transform: translate(-72%, -62%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -40%) scale(1);
  }
}

.spotlight-card {
  position: relative;
  overflow: hidden;
}

.spotlight-card::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(147, 51, 234, 0.15),
    transparent 40%
  );
  transition: opacity 0.5s;
}

.spotlight-card:hover::before {
  opacity: 1;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(33, 85, 223, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(33, 85, 223, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(33, 85, 223, 0.5);
  }
}

.animate-glow {
  animation: glow 2s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.animate-shimmer {
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
  background-size: 1000px 100%;
  animation: shimmer 3s infinite linear;
}
`;

// Add this with the other animation styles at the top
const ctaStyles = `
@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(
    90deg,
    rgba(147, 51, 234, 0.1) 0%,
    rgba(79, 70, 229, 0.1) 50%,
    rgba(147, 51, 234, 0.1) 100%
  );
  background-size: 200% 200%;
  animation: gradientFlow 15s ease infinite;
}

.cta-glow {
  position: relative;
}

.cta-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(90deg, #9333EA, #4F46E5);
  border-radius: 16px;
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.5;
}

@keyframes border-pulse {
  0% {
    border-color: rgba(255, 255, 255, 0.1);
  }
  50% {
    border-color: rgba(33, 85, 223, 0.5);
  }
  100% {
    border-color: rgba(255, 255, 255, 0.1);
  }
}

.animate-border-pulse {
  animation: border-pulse 3s infinite;
}
`;

const companies = [
  { name: "THORChain", src: "https://vultisig.com/images/thorchain.svg" },
  { name: "Vultisig", src: "https://vultisig.com/images/vultisig.svg" },
  { name: "WEWE", src: "https://vultisig.com/images/wewe.svg" },
  { name: "DeFi Suisse", src: "https://vultisig.com/images/DeFi-suisse-treasury.svg" },
  { name: "ZKFinance", src: "https://vultisig.com/images/zkfinance.svg" },
  { name: "RUJI", src: "https://vultisig.com/images/ruji.svg" },
];

const LandingPage = () => { 
  const [currentFeature, setCurrentFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const airdropRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pulseScale, setPulseScale] = useState(1);
  const [glowOpacity, setGlowOpacity] = useState(0.5);
  const features = [
    {
      title: "Asset Management Hub",
      description: "Vultisig is chain agnostic - Bitcoin, Ethereum, Solana, THORChain and many more. The first multi-chain, multi-asset, multi-signature wallet in the world for everyone. You can deposit, send, swap and more inside Vultisig.",
      image: mockup1
    },
    {
      title: "DeFi In your pocket",
      description: "Vultisig is natively DeFi compatible - rebalance your portfolio right inside the vault. It also supports advanced DeFi functions such as bonding to Nodes, Staking and more!",
      image: mockup3
    },
    {
      title: "Expand Your Wallet's Power",
      description: "Unlock new possibilities with Vultisig Plugins. From automated investments (DCA) to salary management, customize your wallet with features tailored to your needs. Simplify your crypto experience with tools that work seamlessly together.",
      image: mockup2
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (airdropRef.current) {
        const { top } = airdropRef.current.getBoundingClientRect();
        setScrollY(top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (airdropRef.current) {
      observer.observe(airdropRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.2 : 1);
      setGlowOpacity(prev => prev === 0.5 ? 0.8 : 0.5);
    }, 2000);

    return () => clearInterval(pulseInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update the style injection to include ctaStyles
    const style = document.createElement('style');
    style.textContent = textAnimationStyles + spotlightStyles + ctaStyles;
    document.head.appendChild(style);

    // Add mouse move handler for spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.head.removeChild(style);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020817] text-white font-['Inter']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020817]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={vultisigIcon} alt="Vultisig" className="h-8 w-8" />
            <span className="text-xl font-semibold">Vultisig</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#problems" className="text-gray-300 hover:text-white transition-colors">Problems</a>
            <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Solution</a>
            <a href="#mobile" className="text-gray-300 hover:text-white transition-colors">Mobile</a>
          </div>
        </div>
      </nav>

      {/* Background with parallax effect */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(${background1})`,
          transform: `translateY(${scrollY * 0.1}px)`
        }} 
      />

      {/* Enhanced Airdrop Banner with more animations */}
      <div 
        ref={airdropRef}
        className={`relative overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#2155DF]/20 to-blue-600/20"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div className="relative z-10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#2155DF]/20 rounded-full backdrop-blur-sm"
                  style={{
                    transform: `scale(${pulseScale})`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                >
                  <span 
                    className="w-2 h-2 bg-[#2155DF] rounded-full"
                    style={{
                      boxShadow: `0 0 20px rgba(147, 51, 234, ${glowOpacity})`,
                      animation: 'pulse 2s infinite'
                    }}
                  />
                  <p className="text-lg font-semibold">
                    Vultisig Airdrop is <span className="text-[#2155DF]animate-pulse">LIVE!</span>
                  </p>
                </div>
                <p className="text-sm text-gray-300 mt-2 max-w-md animate-fade-in-up">
                  Don't miss your chance to claim your share of $VULT and be part of the future of wallet security.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="animate-spin-slow">⚡</span>
                    <span className="animate-pulse">Claim before it ends!</span>
                  </div>
                </div>
                <Link
                  to="/airdrop"
                  className="group relative px-6 py-2 bg-gradient-to-r from-[#2155DF] to-blue-600 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2155DF]to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 text-sm font-semibold">Go to Airdrop</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2155DF] to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, ${glowOpacity}) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Hero Section with Background 2 */}
      <section className="relative flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${background2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020817]/50 to-[#020817]" />
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-[#2155DF]/20 rounded-full text-[#2155DF] text-sm mb-6">
              OPEN-SOURCE AUDITED
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Clash Display'] font-bold leading-tight mb-6">
              Regain control with the{' '}
              <span className="animate-focus-in inline-block">Seedless</span>,{' '}
              <span className="animate-focus-in-delay-1 inline-block">Multi-chain</span>{' '}
              crypto vault
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Experience unmatched security without sacrificing convenience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="px-8 py-4 bg-gradient-to-r from-[#2155DF] to-blue-600 hover:from-[#2155DF] hover:to-blue-700 rounded-lg text-lg font-semibold transition-all"
              >
                Download Now
              </Link>
              <Link
                to="/docs"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-lg font-semibold transition-colors backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-circles.png')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-['Clash Display'] text-center mb-16">
            Vultisig Vaults are battle-tested and trusted by
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2155DF] to-blue-400">
              thousands of users
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-[#2155DF] animate-glow">100K+</div>
              <div className="text-gray-400 mt-2">Active Users</div>
            </div>
            <div className="text-center animate-fade-in-up-delay-1">
              <div className="text-4xl font-bold text-blue-400 animate-glow">$500M+</div>
              <div className="text-gray-400 mt-2">Assets Secured</div>
            </div>
            <div className="text-center animate-fade-in-up-delay-1">
              <div className="text-4xl font-bold text-[#2155DF] animate-glow">10+</div>
              <div className="text-gray-400 mt-2">Chains Supported</div>
            </div>
            <div className="text-center animate-fade-in-up-delay-2">
              <div className="text-4xl font-bold text-blue-400 animate-glow">99.9%</div>
              <div className="text-gray-400 mt-2">Uptime</div>
            </div>
            <div className="text-center animate-fade-in-up-delay-2">
              <div className="text-4xl font-bold text-[#2155DF] animate-glow">0</div>
              <div className="text-gray-400 mt-2">Security Breaches</div>
            </div>
            <div className="text-center animate-fade-in-up-delay-2">
              <div className="text-4xl font-bold text-blue-400 animate-glow">24/7</div>
              <div className="text-gray-400 mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Problems Section with Background 3 */}
      <section id="problems" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${background3})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-['Clash Display'] text-center mb-16">What is wrong with wallets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-colors relative animate-fade-in-up">
              <img src={robot1} alt="Robot" className="absolute -top-12 right-4 w-24 h-24 animate-float" />
              <h3 className="text-xl font-semibold mb-4 text-[#2155DF]">Single-signature wallets are dangerous</h3>
              <p className="text-gray-400">
                Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet? One mistake and forever rekt.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-colors relative animate-fade-in-up-delay-1">
              <img src={robot2} alt="Robot" className="absolute -top-12 right-4 w-24 h-24 animate-float" style={{ animationDelay: '0.5s' }} />
              <h3 className="text-xl font-semibold mb-4 text-[#2155DF]">Hardware wallets are clunky</h3>
              <p className="text-gray-400">
                Small screens, small buttons, annoying interfaces. Complicated setup instructions, scary firmware updates and confusing transactions.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-colors relative animate-fade-in-up-delay-2">
              <img src={robot3} alt="Robot" className="absolute -top-12 right-4 w-24 h-24 animate-float" style={{ animationDelay: '1s' }} />
              <h3 className="text-xl font-semibold mb-4 text-[#2155DF]">Multi-signature wallets are painful</h3>
              <p className="text-gray-400">
                Multi-sig is a solution, but it is not chain agnostic or dynamic. Different networks have different multi-sig setups, making a single UX impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2155DF]/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-['Clash Display'] text-center mb-16">
            The{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Vultisig
            </span>{' '}
            Solution
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all group animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#2155DF] transition-colors">Threshold Signatures</h3>
              <p className="text-gray-400">Multiple devices to sign—no single point of failure. Never lose funds with one compromised device.</p>
            </div>
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all group animate-fade-in-up-delay-1">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#2155DF] transition-colors">Familiar Hardware</h3>
              <p className="text-gray-400">Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.</p>
            </div>
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all group animate-fade-in-up-delay-1">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#2155DF]  transition-colors">Vault Shares</h3>
              <p className="text-gray-400">No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!</p>
            </div>
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all group animate-fade-in-up-delay-2">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#2155DF] transition-colors">Rich UI</h3>
              <p className="text-gray-400">Have all information displayed on big screens. Easy to see—easy to understand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2155DF]/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={section} 
                alt="Experience Security" 
                className="w-full max-w-[400px] mx-auto animate-float"
                style={{
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-['Clash Display'] font-bold">
                EXPERIENCE
                <br />
                <span className="text-[#00FFB2]">SECURITY</span>
                <br />
                WITHOUT SACRIFICE
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 font-['Clash Display']">Vault Generation</h3>
                  <p className="text-gray-300">KeyGen time: <span className="text-white">3-5 seconds.</span></p>
                  <p className="text-gray-300">Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 font-['Clash Display']">Transaction Signing</h3>
                  <p className="text-gray-300">KeySign time: <span className="text-white">1-3 seconds.</span></p>
                  <p className="text-gray-300">One device starts the transaction. A second paired device confirms the transaction. It is natively "two-factor" and is done in real time.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 font-['Clash Display']">Resharing</h3>
                  <p className="text-gray-300">Reshare Time: <span className="text-white">3-5 seconds.</span></p>
                  <p className="text-gray-300">Lost a device? Replace it easily without changing the vault or address. Want to increase security? Go from 2-of-3 to 3-of-4 setup easily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-6 border-design-border">
      <div className="container mx-auto">
                <h2 className="text-4xl font-['Clash Display'] text-center my-6 mb-16 animate-fade-in-up">Trusted by industry leaders worldwide.</h2>
        <Marquee autoFill={true} className="lg:mb-12 md:mb-10 mb-6 flex overflow-y-hidden w-full" pauseOnHover={true}>
          {companies.map((company, index) => (
            <li key={company.name} className={`flex px-10 mt-3 hover:scale-[104%] transition-all flex-col items-center gap-2 text-center cursor-pointer animate-fade-in-up-delay-${index % 3}`}>
              <img 
                alt={company.name} 
                loading="lazy" 
                width="80" 
                height="80" 
                decoding="async" 
                className="image animate-float" 
                style={{ animationDelay: `${index * 0.2}s` }}
                src={company.src} 
              />
              <span>{company.name} <br /> Treasury</span>
            </li>
          ))}
          </Marquee>

          
      </div>
    </section>

      {/* Mobile Features Section with Animation */}
      <section id="mobile" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${background3})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-['Clash Display'] text-center mb-16">Best Features in One Place</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] flex items-center justify-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-250 ${
                    index === currentFeature
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="max-h-[500px] object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8 h-[600px] flex flex-col justify-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentFeature
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8 absolute'
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2155DF] to-blue-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Target Audience */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-['Clash Display'] text-center mb-16">Vultisig is for everyone</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4 text-[#2155DF]">Crypto Natives</h3>
              <p className="text-gray-400">
                Swap, borrow, save, or spend in one wallet with institutional-grade security. You never need a second wallet again.
              </p>
            </div>
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all animate-fade-in-up-delay-1">
              <h3 className="text-xl font-semibold mb-4 text-[#2155DF]">Whales</h3>
              <p className="text-gray-400">
                Hold significant funds in crypto? Then you MUST consider upgrading to a Vultisig secure vault. Your funds are at-risk on all other wallets.
              </p>
            </div>
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all animate-fade-in-up-delay-1">
              <h3 className="text-xl font-semibold mb-4 text-[#2155DF]">Funds</h3>
              <p className="text-gray-400">
                The open-source audited alternative to your current "custodian". Remote co-signing means you can access funds anywhere in the world.
              </p>
            </div>
            <div className="spotlight-card p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2155DF]/50 transition-all animate-fade-in-up-delay-2">
              <h3 className="text-xl font-semibold mb-4 text-[#2155DF]">Treasuries</h3>
              <p className="text-gray-400">
                Natively compatible with all chains. Designate your leads the ability to pay staff with limits, whitelists and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="animated-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] to-transparent opacity-80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="cta-glow max-w-4xl mx-auto bg-[#0A0F1F]/40 backdrop-blur-xl rounded-2xl p-12 animate-fade-in-up">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-['Clash Display'] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2155DF] to-blue-400">
                Secure your digital assets now!
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up-delay-1">
                Join thousands of users who trust Vultisig for their digital asset security.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 animate-fade-in-up-delay-2">
                <Link
                  to="/download"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#2155DF] to-blue-600 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2155DF]to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Download App</span>
                </Link>
                <Link
                  to="/discord"
                  className="group px-8 py-4 bg-white/5 hover:bg-white/10 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2155DF] to-blue-400">
                    Join Discord
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default LandingPage; 
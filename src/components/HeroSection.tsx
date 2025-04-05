
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-sky-light">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/dcec6966-584c-46d6-a229-7fcc59b1c941.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset * 0.5}px)`,
          opacity: 0.4
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-slow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="ml-3 text-sm font-medium uppercase tracking-wider text-gray-600">
                ELEVATE YOUR DIGITAL SECURITY
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Experience <br />
              The Power Of <br />
              Multi-Signatures!
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 py-6 text-base">
                Book A Demo Now
              </Button>
              <Button variant="outline" className="rounded-full w-12 h-12 flex items-center justify-center p-0">
                <span className="sr-only">Play video</span>
                <div className="w-3 h-4 border-t-transparent border-b-transparent border-r-transparent border-l-8 border-l-primary ml-1"></div>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="animate-float">
              <img 
                src="/lovable-uploads/dcec6966-584c-46d6-a229-7fcc59b1c941.png" 
                alt="Digital Security" 
                className="max-w-full rounded-xl shadow-xl"
              />
            </div>
            
            <div className="absolute bottom-0 right-0 bg-white p-4 rounded-xl shadow-lg animate-fade-in-slow">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div className="ml-2">
                  <h4 className="font-medium text-sm">Secure Transactions</h4>
                  <p className="text-xs text-gray-500">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#partners" className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

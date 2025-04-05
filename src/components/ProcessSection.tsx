
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="process" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-display font-bold mb-3 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Journey To Security Made Simple!
        </h2>
        <p className={`text-gray-600 text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Securing your digital assets is a wonderful way to explore new possibilities. Learn about different options and gain unique experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="mx-auto mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Find Your Solution</h3>
            <p className="text-gray-600">Explore our range of security solutions to find what best fits your needs.</p>
          </div>

          <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="bg-primary p-8 rounded-3xl text-white h-full">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-3">Get A Key</h3>
              <p className="mb-6">A private key is a wonderful way to secure your digital assets. Learn about different strategies for key management.</p>

              <Button variant="secondary" className="text-primary">
                LEARN MORE
              </Button>
            </div>
          </div>

          <div className={`text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="mx-auto mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Start Secure Transactions</h3>
            <p className="text-gray-600">Begin using our multi-signature architecture to secure your digital assets with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;


import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const PromoSection = () => {
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
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
              alt="Promotional image"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-white py-3 px-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-primary">20% OFF</div>
              <div className="text-sm text-gray-500">Till 30 September, 2025</div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              UNLEASH <br />
              DIGITAL SECURITY <br />
              WITH VULTISIG
            </h2>
            
            <p className="text-gray-600 mb-6">
              Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
            </p>
            
            <p className="text-gray-600 mb-8">
              Travelling is a wonderful way to explore new places, learn about different cultures.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 py-6 text-base">
              Book A Demo Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

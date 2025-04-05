
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Multi-Signature Wallets",
    location: "Digital Security",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    rating: 4.7
  },
  {
    id: 2,
    title: "Smart Contract Creation",
    location: "Blockchain Solutions",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    rating: 4.8
  },
  {
    id: 3,
    title: "Digital Asset Management",
    location: "Crypto Portfolio",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    rating: 4.9
  }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Popular Services
            </h2>
            <p className={`text-gray-600 max-w-md transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Unleash Your Potential With Digital Security
            </p>
          </div>

          <div className={`flex space-x-2 mt-4 md:mt-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full"
              onClick={() => scroll('left')}
            >
              <ChevronLeft />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full"
              onClick={() => scroll('right')}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div 
          className="flex space-x-6 overflow-x-auto pb-6 snap-x scrollbar-hide"
          ref={scrollRef}
        >
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-start transition-all duration-1000 ${
                isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="gradient-card rounded-2xl overflow-hidden h-full">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span>{service.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{service.location}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

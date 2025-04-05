
import { useState, useEffect, useRef } from 'react';

const partners = [
  { name: 'Partner 1', logo: 'https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992', width: 100 },
  { name: 'Partner 2', logo: 'https://companieslogo.com/img/orig/BKNG-bb8142c9.png?t=1633511974', width: 150 },
  { name: 'Partner 3', logo: 'https://companieslogo.com/img/orig/TRVG.D-dd4f9f6e.png?t=1633508942', width: 120 },
  { name: 'Partner 4', logo: 'https://companieslogo.com/img/orig/EXPE-4a6fafe0.png?t=1633509236', width: 130 },
];

const PartnersSection = () => {
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
    <section id="partners" className="py-12 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <span className="text-sm font-medium text-gray-500">Follow</span>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">f</div>
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">t</div>
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">g</div>
            </div>
          </div>

          <div className="h-12 mx-12 border-r border-gray-300"></div>

          <div className="flex items-center space-x-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ maxWidth: partner.width }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

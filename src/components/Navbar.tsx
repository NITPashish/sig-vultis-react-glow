
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold flex items-center">
            <span className="font-display font-extrabold brand-gradient">VULTISIG</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link font-medium text-gray-700 hover:text-primary">ABOUT</a>
          <a href="#services" className="nav-link font-medium text-gray-700 hover:text-primary">SERVICES</a>
          <a href="#packages" className="nav-link font-medium text-gray-700 hover:text-primary">PACKAGES</a>
          <a href="#contact" className="nav-link font-medium text-gray-700 hover:text-primary">CONTACT</a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">Book Trip</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#about" className="py-2 text-gray-700 hover:text-primary">ABOUT</a>
          <a href="#services" className="py-2 text-gray-700 hover:text-primary">SERVICES</a>
          <a href="#packages" className="py-2 text-gray-700 hover:text-primary">PACKAGES</a>
          <a href="#contact" className="py-2 text-gray-700 hover:text-primary">CONTACT</a>
          <Button className="bg-primary hover:bg-primary/90 rounded-full w-full">Book Trip</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

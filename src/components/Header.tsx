
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white md:bg-white/90 md:backdrop-blur-md text-orangery-10 border-b border-gray-200/20 shadow-sm'
          : 'py-5 bg-transparent text-orangery-10',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="text-xl font-serif font-medium tracking-tight text-orangery-10 transition-opacity hover:opacity-80"
        >
          Marissa A.Beaty
        </NavLink>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} />
        </div>
        
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-6 transition-all duration-300",
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          )}>
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </span>
        </button>
      </div>
      
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          className="absolute top-5 right-5 p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-foreground transform rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-foreground transform -rotate-45" />
        </button>
        
        <nav className="flex flex-col space-y-6 text-lg">
          <button 
            className="text-left hover:text-orangery-500 transition-colors"
            onClick={() => {
              scrollToSection('home');
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </button>
          <button 
            className="text-left hover:text-orangery-500 transition-colors"
            onClick={() => {
              scrollToSection('about');
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </button>
          <button 
            className="text-left hover:text-orangery-500 transition-colors"
            onClick={() => {
              scrollToSection('my-work');
              setIsMobileMenuOpen(false);
            }}
          >
            My Work
          </button>
          <button 
            className="text-left hover:text-orangery-500 transition-colors"
            onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => (
  <>
    <button 
      className="text-sm text-orangery-10 font-medium hover:text-orangery-500 transition-colors"
      onClick={() => scrollToSection('home')}
    >
      Home
    </button>
    <button 
      className="text-sm text-orangery-10 font-medium hover:text-orangery-500 transition-colors"
      onClick={() => scrollToSection('about')}
    >
      About
    </button>
    <button 
      className="text-sm text-orangery-10 font-medium hover:text-orangery-500 transition-colors"
      onClick={() => scrollToSection('my-work')}
    >
      My Work
    </button>
    <button 
      className="text-sm text-orangery-10 font-medium hover:text-orangery-500 transition-colors"
      onClick={() => scrollToSection('contact')}
    >
      Contact
    </button>
  </>
);

export default Header;

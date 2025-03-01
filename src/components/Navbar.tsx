
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Find a Home', path: '/find' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Donate', path: '/donate' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold text-foreground flex items-center"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="text-primary">Share</span><span>Joy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-foreground/80 hover:text-foreground text-sm font-medium hover-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              className="hidden md:flex items-center gap-2 btn-ghost rounded-full w-10 h-10 p-0 justify-center"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button
              className="btn-ghost rounded-full w-10 h-10 p-0 flex items-center justify-center"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="btn-primary md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-40" onClick={() => setIsMenuOpen(false)}></div>
          <div className="container-custom py-4 relative z-50 bg-background shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-foreground/80 hover:text-foreground text-sm font-medium p-2"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path);
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <button className="flex w-full items-center gap-2 p-2 text-sm font-medium text-foreground/80 hover:text-foreground">
                  <Search className="w-4 h-4" /> Search
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

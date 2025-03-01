
import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-primary">Share</span>Joy
            </h3>
            <p className="text-muted-foreground mb-4">
              Connecting compassionate hearts with children's homes and teen mom shelters across Kenya.
            </p>
            <div className="flex items-center text-muted-foreground">
              <Heart className="w-4 h-4 mr-2 text-primary" /> Made with love in Kenya
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/find')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Find a Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/volunteer')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/donate')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Donate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.unicef.org/kenya/children-kenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/faqs')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/privacy')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/terms')}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:rushionchegge@gmail.com" className="hover:text-foreground transition-colors">
                  rushionchegge@gmail.com
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="https://wa.me/254798639575" className="hover:text-foreground transition-colors">
                  +254 798 639 575
                </a>
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-primary" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} ShareJoy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <a href="https://www.instagram.com/sharejoy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@sharejoy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">TikTok</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                  <path d="M20 9V7a4 4 0 0 0-4-4h-2"/>
                  <path d="M15 7.5V11a9 9 0 0 1-9 9h0a9 9 0 0 1-6-2.3"/>
                  <path d="M9 12a4 4 0 0 0 5 3.8"/>
                  <path d="M12 12c.7-1.2 1-2.5 1-4"/>
                  <path d="M21 3v10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

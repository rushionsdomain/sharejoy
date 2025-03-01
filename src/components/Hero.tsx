
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, HandHelping } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/5 via-background to-background"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-accent-foreground max-w-fit">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              <span>Make a difference today</span>
            </div>
            
            <h1 className="font-bold leading-tight">
              Connect with <span className="text-primary">Children's Homes</span> Across Kenya
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              ShareJoy helps you find, support, and volunteer at children's homes and teen mom shelters throughout Kenya. Your compassion can change lives.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                className="btn-primary"
                onClick={() => navigate('/find')}
              >
                <MapPin className="w-4 h-4 mr-2" /> Find a Home
              </button>
              <button 
                className="btn-outline"
                onClick={() => navigate('/volunteer')}
              >
                <HandHelping className="w-4 h-4 mr-2" /> Volunteer Now
              </button>
            </div>
          </div>
          
          <div className="relative md:h-[500px] overflow-hidden rounded-2xl animate-fade-in shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
            
            <div className="relative h-full w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Children at a home in Kenya" 
                className="object-cover w-full h-full transition-transform duration-10000 hover:scale-105"
              />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-background/90 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-sm font-medium">
                  "Every child deserves a chance to thrive in a loving environment."
                </p>
                <p className="text-xs text-muted-foreground mt-1">— ShareJoy Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

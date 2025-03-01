
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Heart } from 'lucide-react';

interface HomeCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  needsVolunteers: boolean;
  needsDonations: boolean;
  description: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  id,
  name,
  location,
  image,
  needsVolunteers,
  needsDonations,
  description
}) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-card rounded-xl overflow-hidden shadow-sm card-hover group cursor-pointer"
      onClick={() => {
        navigate(`/home/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2">
            {needsVolunteers && (
              <span className="px-2 py-1 bg-secondary/90 backdrop-blur-sm text-white text-xs rounded-full flex items-center">
                <Users className="w-3 h-3 mr-1" /> Needs Volunteers
              </span>
            )}
            {needsDonations && (
              <span className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs rounded-full flex items-center">
                <Heart className="w-3 h-3 mr-1" /> Needs Donations
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-xl mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm flex items-center mb-3">
          <MapPin className="w-4 h-4 mr-1" /> {location}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCard from './HomeCard';

const FeaturedHomes: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock data for featured homes
  const featuredHomes = [
    {
      id: "1",
      name: "Precious Hearts Children's Home",
      location: "Nairobi, Kenya",
      image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      needsVolunteers: true,
      needsDonations: true,
      description: "A loving home for orphaned children from Nairobi's most vulnerable communities. Currently caring for 27 children aged 3-16."
    },
    {
      id: "2",
      name: "Hope Haven Teen Mom Shelter",
      location: "Mombasa, Kenya",
      image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needsVolunteers: true,
      needsDonations: false,
      description: "Supporting teen mothers to care for their babies while continuing their education. Currently housing 14 mothers and their children."
    },
    {
      id: "3",
      name: "Sunshine Children's Center",
      location: "Kisumu, Kenya",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      needsVolunteers: false,
      needsDonations: true,
      description: "Providing education, nutrition, and healthcare to 42 orphaned children in the Lake Victoria region."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="font-bold">Featured Homes</h2>
            <p className="text-muted-foreground mt-2">Discover children's homes and shelters that need your support</p>
          </div>
          <button 
            className="btn-outline mt-4 md:mt-0"
            onClick={() => navigate('/find')}
          >
            View All Homes
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHomes.map((home) => (
            <HomeCard key={home.id} {...home} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHomes;

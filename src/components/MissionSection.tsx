
import React from 'react';
import { Heart, Users, Home, Lightbulb } from 'lucide-react';

const MissionSection: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Compassion",
      description: "We believe in the power of compassion to transform lives and create lasting change in our communities."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Community",
      description: "Building a community of care and support around children's homes and teen mom shelters in Kenya."
    },
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Connection",
      description: "Facilitating meaningful connections between compassionate individuals and homes in need."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Empowerment",
      description: "Empowering homes to thrive and children to reach their full potential through sustainable support."
    }
  ];

  return (
    <section className="section bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            ShareJoy exists to create a seamless connection between compassionate individuals and children's homes and teen mom shelters across Kenya. We believe in the power of community to transform lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-accent rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

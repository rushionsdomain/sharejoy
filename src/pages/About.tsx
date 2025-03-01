
import React from 'react';
import Layout from '../components/Layout';
import { Calendar, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <h1 className="text-3xl font-bold mb-6">About ShareJoy</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                ShareJoy exists to create meaningful connections between caring individuals and 
                children's homes and teen mom shelters across Kenya. We believe that everyone 
                has something valuable to contribute, whether it's their time, skills, or resources.
              </p>
              <p className="mb-4">
                Our platform makes it easy to find, support, and volunteer at facilities that align 
                with your interests and values. By bridging this gap, we aim to ensure that every 
                child and young mother in Kenya has access to the care, support, and opportunities 
                they deserve.
              </p>
              <p>
                We are dedicated to transparency, impact, and creating a community of compassionate 
                individuals who share our vision of a Kenya where every child can thrive.
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-auto overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Children smiling" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <p className="font-medium">
                  "Every act of kindness creates a ripple with no end."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          
          <div className="flex items-start mb-6">
            <div className="mr-4 bg-primary/10 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Founded in February 2025</h3>
              <p className="text-muted-foreground">
                ShareJoy was founded by Angel Virginia Njauini, who witnessed firsthand the challenges 
                faced by children's homes and shelters in Kenya. While volunteering at various facilities, 
                she noticed a disconnect between people who wanted to help and organizations that needed support. 
                This observation inspired her to create a platform that would bridge this gap and make it easier 
                for everyone to contribute meaningfully.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <div className="mr-4 bg-primary/10 p-3 rounded-full">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Our Impact</h3>
              <p className="text-muted-foreground">
                As a newly established organization, we aim to connect volunteers with children's homes and 
                teen mom shelters across Kenya. We are working towards building a network of caring individuals 
                who can provide essential supplies, educational materials, and infrastructure improvements to 
                facilities in need. Our goal is to partner with homes and shelters across the country, helping 
                them reach a wider audience and receive the support they require to continue their vital work.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 bg-primary/10 p-3 rounded-full">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                At ShareJoy, we're guided by the principles of compassion, integrity, and impact. 
                We believe in the power of community and the importance of creating sustainable change. 
                Transparency is at the core of our operations, and we're committed to ensuring that every 
                contribution, whether time or money, is used effectively to improve the lives of children 
                and young mothers in Kenya.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80" 
                alt="Angel Virginia" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Angel Virginia Njauini</h3>
              <p className="text-primary font-medium mb-3">Founder & CEO</p>
              <p className="text-muted-foreground">
                With a background in social work and a passion for child welfare, Angel founded ShareJoy 
                to create meaningful connections between caring individuals and children's homes across Kenya. 
                She oversees the strategic direction of the organization and builds partnerships with facilities 
                nationwide.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                alt="Francis Rushion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Francis Rushion Gachuri</h3>
              <p className="text-primary font-medium mb-3">Developer & Operations Director</p>
              <p className="text-muted-foreground">
                Francis brings technical expertise and operational excellence to ShareJoy. With extensive 
                experience in software development and project management, he leads the development of our 
                platform and ensures smooth day-to-day operations. Francis is passionate about using technology 
                to solve social challenges.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you want to volunteer your time, make a donation, or spread the word about our work, 
            there are many ways to contribute to ShareJoy's mission. Together, we can make a meaningful 
            difference in the lives of children and young mothers across Kenya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/volunteer" className="btn-primary">Volunteer Today</a>
            <a href="/donate" className="btn-outline">Make a Donation</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

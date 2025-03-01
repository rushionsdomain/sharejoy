
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import FeaturedHomes from '../components/FeaturedHomes';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <MissionSection />
      <FeaturedHomes />
    </Layout>
  );
};

export default Index;

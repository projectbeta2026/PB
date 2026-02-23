
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import MissionVision from '@/components/MissionVision';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>projectbeta IT Solutions - Innovative IT Services in Masinloc, Zambales</title>
        <meta
          name="description"
          content="projectbeta IT Solutions provides comprehensive IT services including system solutions, software development, cloud services, and IT consulting in Masinloc, Zambales. Transform your business with innovative technology solutions."
        />
      </Helmet>
      
      <div className="w-full">
        <Hero />
        <Services />
        <MissionVision />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;

import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import Education from '../components/Education';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="space-y-0 overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Education />
      <ContactSection />
    </div>
  );
};

export default Home;
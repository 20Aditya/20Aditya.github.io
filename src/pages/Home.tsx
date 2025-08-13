import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
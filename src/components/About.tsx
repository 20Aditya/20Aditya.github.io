import React, { useEffect, useRef } from 'react';
import { BaseComponent } from './BaseComponent';

class AboutComponent extends BaseComponent {
  constructor() {
    super('About');
  }

  protected setupEventListeners(): void {
    // Add any event listeners specific to the About component here
    // For now, this component is mostly static
  }

  protected onInit(): void {
    // Any initialization logic can go here
    // This component is mostly static content
  }
}

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutComponentRef = useRef<AboutComponent | null>(null);

  useEffect(() => {
    const initAbout = async () => {
      if (aboutRef.current && !aboutComponentRef.current) {
        aboutComponentRef.current = new AboutComponent();
        const element = await aboutComponentRef.current.init();
        aboutRef.current.appendChild(element);
      }
    };

    initAbout();

    return () => {
      if (aboutComponentRef.current) {
        aboutComponentRef.current.destroy();
        aboutComponentRef.current = null;
      }
    };
  }, []);

  return <div ref={aboutRef} />;
};

export default About;
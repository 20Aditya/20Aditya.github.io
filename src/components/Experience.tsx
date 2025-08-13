import React, { useEffect, useRef } from 'react';
import { BaseComponent } from './BaseComponent';

class ExperienceComponent extends BaseComponent {
  constructor() {
    super('Experience');
  }

  protected setupEventListeners(): void {
    // Add any event listeners specific to the Experience component here
  }

  protected onInit(): void {
    // Any initialization logic for Experience
  }
}

const Experience: React.FC = () => {
  const expRef = useRef<HTMLDivElement>(null);
  const expComponentRef = useRef<ExperienceComponent | null>(null);

  useEffect(() => {
    const initExp = async () => {
      if (expRef.current && !expComponentRef.current) {
        expComponentRef.current = new ExperienceComponent();
        const element = await expComponentRef.current.init();
        expRef.current.appendChild(element);
      }
    };
    initExp();
    return () => {
      if (expComponentRef.current) {
        expComponentRef.current.destroy();
        expComponentRef.current = null;
      }
    };
  }, []);

  return <div ref={expRef} />;
};

export default Experience;
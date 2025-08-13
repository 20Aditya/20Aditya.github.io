import React, { useEffect, useRef } from 'react';
import { BaseComponent } from './BaseComponent';

class SkillsComponent extends BaseComponent {
  constructor() {
    super('Skills');
  }

  protected setupEventListeners(): void {
    // Add any event listeners specific to the Skills component here
  }

  protected onInit(): void {
    // Any initialization logic for Skills
  }
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsComponentRef = useRef<SkillsComponent | null>(null);

  useEffect(() => {
    const initSkills = async () => {
      if (skillsRef.current && !skillsComponentRef.current) {
        skillsComponentRef.current = new SkillsComponent();
        const element = await skillsComponentRef.current.init();
        skillsRef.current.appendChild(element);
      }
    };
    initSkills();
    return () => {
      if (skillsComponentRef.current) {
        skillsComponentRef.current.destroy();
        skillsComponentRef.current = null;
      }
    };
  }, []);

  return <div ref={skillsRef} />;
};

export default Skills;
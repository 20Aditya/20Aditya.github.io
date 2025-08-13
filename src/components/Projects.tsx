import React, { useEffect, useRef } from 'react';
import { BaseComponent } from './BaseComponent';

class ProjectsComponent extends BaseComponent {
  constructor() {
    super('Projects');
  }

  protected setupEventListeners(): void {
    // Add any event listeners specific to the Projects component here
  }

  protected onInit(): void {
    // Any initialization logic for Projects
  }
}

const Projects: React.FC = () => {
  const projRef = useRef<HTMLDivElement>(null);
  const projComponentRef = useRef<ProjectsComponent | null>(null);

  useEffect(() => {
    const initProj = async () => {
      if (projRef.current && !projComponentRef.current) {
        projComponentRef.current = new ProjectsComponent();
        const element = await projComponentRef.current.init();
        projRef.current.appendChild(element);
      }
    };
    initProj();
    return () => {
      if (projComponentRef.current) {
        projComponentRef.current.destroy();
        projComponentRef.current = null;
      }
    };
  }, []);

  return <div ref={projRef} />;
};

export default Projects;
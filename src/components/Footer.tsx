import React, { useEffect, useRef } from 'react';
import { BaseComponent } from './BaseComponent';

class FooterComponent extends BaseComponent {
  constructor() {
    super('Footer');
  }

  protected setupEventListeners(): void {
    // Add any event listeners specific to the Footer component here
    // For now, this component is mostly static
  }

  protected onInit(): void {
    // Update the current year in the footer
    const currentYearElement = this.findElement('#current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString();
    }
  }
}

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerComponentRef = useRef<FooterComponent | null>(null);

  useEffect(() => {
    const initFooter = async () => {
      if (footerRef.current && !footerComponentRef.current) {
        footerComponentRef.current = new FooterComponent();
        const element = await footerComponentRef.current.init();
        footerRef.current.appendChild(element);
      }
    };

    initFooter();

    return () => {
      if (footerComponentRef.current) {
        footerComponentRef.current.destroy();
        footerComponentRef.current = null;
      }
    };
  }, []);

  return <div ref={footerRef} />;
};

export default Footer;
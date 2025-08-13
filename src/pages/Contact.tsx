import React, { useEffect, useRef } from 'react';
import { BaseComponent } from '../components/BaseComponent';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

class ContactComponent extends BaseComponent {
  private formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() {
    super('Contact');
  }

  protected setupEventListeners(): void {
    const form = this.findElement('#contact-form');
    if (form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    // Add input change listeners
    const inputs = this.findAllElements('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('change', (e) => this.handleChange(e));
    });
  }

  protected onInit(): void {
    // Any initialization logic for Contact
  }

  private handleSubmit(e: Event): void {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.resetForm();
  }

  private handleChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.formData = {
      ...this.formData,
      [target.name]: target.value
    };
  }

  private resetForm(): void {
    this.formData = { name: '', email: '', subject: '', message: '' };
    
    // Reset form inputs
    const inputs = this.findAllElements('input, textarea');
    inputs.forEach(input => {
      (input as HTMLInputElement | HTMLTextAreaElement).value = '';
    });
  }
}

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const contactComponentRef = useRef<ContactComponent | null>(null);

  useEffect(() => {
    const initContact = async () => {
      if (contactRef.current && !contactComponentRef.current) {
        contactComponentRef.current = new ContactComponent();
        const element = await contactComponentRef.current.init();
        contactRef.current.appendChild(element);
      }
    };

    initContact();

    return () => {
      if (contactComponentRef.current) {
        contactComponentRef.current.destroy();
        contactComponentRef.current = null;
      }
    };
  }, []);

  return <div ref={contactRef} />;
};

export default Contact;
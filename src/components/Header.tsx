import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BaseComponent } from './BaseComponent';

class HeaderComponent extends BaseComponent {
  private isMenuOpen: boolean = false;
  private currentPath: string = window.location.pathname;
  private onNavigate?: (path: string) => void;

  constructor() {
    super('Header');
  }

  protected setupEventListeners(): void {
    console.log('Header: Setting up event listeners');
    
    // Mobile menu toggle
    const mobileMenuBtn = this.findElement('#mobile-menu-btn');
    const mobileNav = this.findElement('#mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Handle navigation clicks
    const navItems = this.findAllElements('.nav-item, .mobile-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const path = (item as HTMLElement).getAttribute('data-path');
        if (path && this.onNavigate) {
          this.onNavigate(path);
        }
        this.handleNavClick(item as HTMLElement);
      });
    });
  }

  protected onInit(): void {
    console.log('Header: Initializing');
    this.updateActiveNav();
  }

  setNavigateHandler(handler: (path: string) => void): void {
    this.onNavigate = handler;
  }

  updateCurrentPath(path: string): void {
    this.currentPath = path;
    this.updateActiveNav();
  }

  private toggleMobileMenu(): void {
    const mobileNav = this.findElement('#mobile-nav');
    const mobileMenuBtn = this.findElement('#mobile-menu-btn');
    
    if (mobileNav) {
      this.isMenuOpen = !this.isMenuOpen;
      mobileNav.classList.toggle('hidden', !this.isMenuOpen);
      
      // Update button icon
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = this.isMenuOpen ? 
          '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>' :
          '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      }
    }
  }

  private handleNavClick(item: HTMLElement): void {
    const path = item.getAttribute('data-path');
    if (path && path !== this.currentPath) {
      this.currentPath = path;
      this.updateActiveNav();
      
      // Close mobile menu if open
      if (this.isMenuOpen) {
        this.toggleMobileMenu();
      }
    }
  }

  private updateActiveNav(): void {
    // Update desktop navigation
    const desktopNavItems = this.findAllElements('.nav-item');
    desktopNavItems.forEach(item => {
      const path = (item as HTMLElement).getAttribute('data-path');
      if (path === this.currentPath) {
        item.classList.add('text-blue-600', 'border-b-2', 'border-blue-600', 'pb-1');
        item.classList.remove('text-gray-700', 'hover:text-blue-600');
      } else {
        item.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600', 'pb-1');
        item.classList.add('text-gray-700', 'hover:text-blue-600');
      }
    });

    // Update mobile navigation
    const mobileNavItems = this.findAllElements('.mobile-nav-item');
    mobileNavItems.forEach(item => {
      const path = (item as HTMLElement).getAttribute('data-path');
      if (path === this.currentPath) {
        item.classList.add('text-blue-600', 'bg-blue-50');
        item.classList.remove('text-gray-700', 'hover:text-blue-600', 'hover:bg-gray-50');
      } else {
        item.classList.remove('text-blue-600', 'bg-blue-50');
        item.classList.add('text-gray-700', 'hover:text-blue-600', 'hover:bg-gray-50');
      }
    });
  }
}

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerComponentRef = useRef<HeaderComponent | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const initHeader = async () => {
      if (headerRef.current && !headerComponentRef.current) {
        console.log('Header: Starting initialization');
        headerComponentRef.current = new HeaderComponent();
        try {
          const element = await headerComponentRef.current.init();
          console.log('Header: Template loaded successfully', element);
          headerRef.current.appendChild(element);
          
          // Set up navigation handler
          headerComponentRef.current.setNavigateHandler((path: string) => {
            navigate(path);
          });
        } catch (error) {
          console.error('Header: Failed to load template', error);
        }
      }
    };

    initHeader();

    return () => {
      if (headerComponentRef.current) {
        headerComponentRef.current.destroy();
        headerComponentRef.current = null;
      }
    };
  }, [navigate]);

  // Update active nav when location changes
  useEffect(() => {
    if (headerComponentRef.current) {
      headerComponentRef.current.updateCurrentPath(location.pathname);
    }
  }, [location]);

  return <div ref={headerRef} />;
};

export default Header;
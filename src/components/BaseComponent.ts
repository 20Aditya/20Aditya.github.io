import { TemplateLoader } from '../utils/templateLoader';

export abstract class BaseComponent {
  protected element: HTMLElement | null = null;
  protected templateName: string;

  constructor(templateName: string) {
    this.templateName = templateName;
    console.log(`BaseComponent: Constructor called for "${templateName}"`);
  }

  async init(): Promise<HTMLElement> {
    console.log(`BaseComponent: init() called for "${this.templateName}"`);
    try {
      console.log(`BaseComponent: About to load template "${this.templateName}"`);
      this.element = await TemplateLoader.loadAndCreateElement(this.templateName);
      console.log(`BaseComponent: Template loaded successfully for "${this.templateName}"`, this.element);
      this.setupEventListeners();
      this.onInit();
      return this.element;
    } catch (error) {
      console.error(`Failed to initialize component ${this.templateName}:`, error);
      throw error;
    }
  }

  protected abstract setupEventListeners(): void;
  protected abstract onInit(): void;

  getElement(): HTMLElement | null {
    return this.element;
  }

  destroy(): void {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  }

  protected findElement(selector: string): HTMLElement | null {
    return this.element?.querySelector(selector) || null;
  }

  protected findAllElements(selector: string): NodeListOf<Element> {
    return this.element?.querySelectorAll(selector) || document.querySelectorAll(':empty');
  }
} 
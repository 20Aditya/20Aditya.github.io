export class TemplateLoader {
  private static cache: Map<string, string> = new Map();
  
  // Clear cache on module load to ensure fresh templates
  static {
    this.clearCache();
  }
  

  static async loadTemplate(templateName: string): Promise<string> {
    console.log(`TemplateLoader: Loading template "${templateName}"`);
    // console.log(`TemplateLoader: Available inline templates:`, Object.keys(this.inlineTemplates));
    
    // Check cache first
    if (this.cache.has(templateName)) {
      console.log(`TemplateLoader: Using cached template "${templateName}"`);
      return this.cache.get(templateName)!;
    }

    // // Check inline templates first
    // if (this.inlineTemplates[templateName]) {
    //   console.log(`TemplateLoader: Using inline template "${templateName}"`);
    //   const html = this.inlineTemplates[templateName];
    //   this.cache.set(templateName, html);
    //   return html;
    // }

    console.log(`TemplateLoader: Inline template not found, trying fetch for "${templateName}"`);

    try {
      // Try to load from public directory first
      const response = await fetch(`/templates/${templateName}.html`);
      if (response.ok) {
        console.log(`TemplateLoader: Using public template "${templateName}"`);
        const html = await response.text();
        const convertedHtml = this.convertClasses(html);
        this.cache.set(templateName, convertedHtml);
        return convertedHtml;
      }
    } catch (error) {
      console.warn(`Could not load template from public directory: ${templateName}`, error);
    }

    // Fallback: try to load from src directory
    try {
      const response = await fetch(`/src/templates/${templateName}.html`);
      if (!response.ok) {
        throw new Error(`Failed to load template: ${templateName}`);
      }
      
      console.log(`TemplateLoader: Using src template "${templateName}"`);
      const html = await response.text();
      const convertedHtml = this.convertClasses(html);
      this.cache.set(templateName, convertedHtml);
      return convertedHtml;
    } catch (error) {
      console.error(`Error loading template ${templateName}:`, error);
      throw error;
    }
  }

  private static convertClasses(html: string): string {
    // Convert 'class=' to 'class=' for React compatibility
    return html.replace(/className=/g, 'class=');
  }

  static createElementFromTemplate(html: string): HTMLElement {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild as HTMLElement;
  }

  static async loadAndCreateElement(templateName: string): Promise<HTMLElement> {
    const html = await this.loadTemplate(templateName);
    return this.createElementFromTemplate(html);
  }

  static clearCache(): void {
    this.cache.clear();
  }
} 
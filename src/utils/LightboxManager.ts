export interface LightboxContent {
  type: 'image' | 'html';
  src?: string;
  alt?: string;
  element?: HTMLElement;
  galleryName?: string;
  index?: number;
}

export class LightboxManager {
  private static instance: LightboxManager | null = null;
  private isOpen = false;
  private currentContent: LightboxContent | null = null;
  private galleries: Map<string, LightboxContent[]> = new Map();
  private currentGallery: string | null = null;
  private currentIndex = 0;

  static getInstance(): LightboxManager {
    if (!LightboxManager.instance) {
      LightboxManager.instance = new LightboxManager();
    }
    return LightboxManager.instance;
  }

  private constructor() {
    this.initializeEventListeners();
  }

  private initializeEventListeners() {
    // Handle escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
      if (this.isOpen && this.currentGallery) {
        if (e.key === 'ArrowLeft') {
          this.previous();
        }
        if (e.key === 'ArrowRight') {
          this.next();
        }
      }
    });

    // Handle Astro navigation cleanup
    document.addEventListener('astro:before-swap', () => {
      this.close();
      this.cleanup();
    });
  }

  registerGallery(galleryName: string, items: LightboxContent[]) {
    this.galleries.set(galleryName, items);
  }

  open(content: LightboxContent) {
    this.currentContent = content;
    this.isOpen = true;

    if (content.galleryName) {
      this.currentGallery = content.galleryName;
      this.currentIndex = content.index || 0;
    }

    this.createLightboxElement();
    this.disableBodyScroll();
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.currentContent = null;
    this.currentGallery = null;
    this.removeLightboxElement();
    this.enableBodyScroll();
  }

  next() {
    if (!this.currentGallery) return;

    const gallery = this.galleries.get(this.currentGallery);
    if (!gallery) return;

    this.currentIndex = (this.currentIndex + 1) % gallery.length;
    this.showItem(gallery[this.currentIndex]);
  }

  previous() {
    if (!this.currentGallery) return;

    const gallery = this.galleries.get(this.currentGallery);
    if (!gallery) return;

    this.currentIndex = this.currentIndex === 0 ? gallery.length - 1 : this.currentIndex - 1;
    this.showItem(gallery[this.currentIndex]);
  }

  private showItem(item: LightboxContent) {
    this.currentContent = item;
    this.updateLightboxContent();
  }

  private createLightboxElement() {
    if (document.getElementById('custom-lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'custom-lightbox';
    lightbox.className = 'custom-lightbox';

    lightbox.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <div class="lightbox-container">
        ${this.currentGallery ? `<div class="lightbox-counter"></div>` : ''}
        <div class="lightbox-content-wrapper">
          <div class="lightbox-content-area"></div>
        </div>
        <div class="lightbox-caption"></div>
        <button class="lightbox-close" aria-label="Close lightbox">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        ${this.currentGallery ? `
          <button class="lightbox-nav lightbox-prev" aria-label="Previous">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button class="lightbox-nav lightbox-next" aria-label="Next">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        ` : ''}
      </div>
    `;

    // Add event listeners for interaction
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const contentArea = lightbox.querySelector('.lightbox-content-area');

    // Close on lightbox click (anywhere), but prevent when clicking content
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-backdrop') || e.target === lightbox.querySelector('.lightbox-container')) {
        this.close();
      }
    });

    // Prevent content clicks from closing
    contentArea?.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close button
    closeBtn?.addEventListener('click', () => this.close());

    // Navigation buttons
    prevBtn?.addEventListener('click', () => this.previous());
    nextBtn?.addEventListener('click', () => this.next());

    // Add swipe support for mobile/tablet
    this.addSwipeSupport(lightbox);

    document.body.appendChild(lightbox);
    this.updateLightboxContent();

    // Animate in
    requestAnimationFrame(() => {
      lightbox.classList.add('open');
    });
  }

  private updateLightboxContent() {
    const contentArea = document.querySelector('.lightbox-content-area');
    const counterElement = document.querySelector('.lightbox-counter');
    const captionElement = document.querySelector('.lightbox-caption');
    
    if (!contentArea || !this.currentContent) return;

    // Update content
    if (this.currentContent.type === 'image') {
      contentArea.innerHTML = `
        <img 
          src="${this.currentContent.src}" 
          alt="${this.currentContent.alt || ''}"
          class="lightbox-image"
        >
      `;
    } else if (this.currentContent.type === 'html' && this.currentContent.element) {
      const clonedElement = this.currentContent.element.cloneNode(true) as HTMLElement;
      clonedElement.style.display = 'block';
      contentArea.innerHTML = '';
      contentArea.appendChild(clonedElement);
    }

    // Update counter (only for galleries with multiple items)
    if (counterElement && this.currentGallery) {
      const gallery = this.galleries.get(this.currentGallery);
      if (gallery && gallery.length > 1) {
        counterElement.textContent = `${this.currentIndex + 1} / ${gallery.length}`;
        (counterElement as HTMLElement).style.display = 'block';
      } else {
        (counterElement as HTMLElement).style.display = 'none';
      }
    }

    // Update caption (only for images)
    if (captionElement) {
      if (this.currentContent.type === 'image' && this.currentContent.alt) {
        captionElement.textContent = this.currentContent.alt;
        (captionElement as HTMLElement).style.display = 'block';
      } else {
        (captionElement as HTMLElement).style.display = 'none';
      }
    }
  }

  private removeLightboxElement() {
    const lightbox = document.getElementById('custom-lightbox');
    if (lightbox) {
      lightbox.classList.remove('open');
      setTimeout(() => {
        lightbox.remove();
      }, 300);
    }
  }

  private disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableBodyScroll() {
    document.body.style.overflow = '';
  }

  private addSwipeSupport(lightbox: HTMLElement) {
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    const minSwipeDistance = 50;
    const maxSwipeTime = 300;

    lightbox.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
    });

    lightbox.addEventListener('touchend', (e) => {
      if (!this.currentGallery) return;
      
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      const endTime = Date.now();
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = endTime - startTime;
      
      // Check if this is a valid swipe (fast enough, far enough, mostly horizontal)
      if (deltaTime < maxSwipeTime && Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < Math.abs(deltaX)) {
        if (deltaX > 0) {
          // Swipe right - go to previous
          this.previous();
        } else {
          // Swipe left - go to next  
          this.next();
        }
        e.preventDefault();
      }
    });
  }

  cleanup() {
    this.galleries.clear();
    this.close();
  }
}

// Make it globally available
declare global {
  interface Window {
    lightboxManager: LightboxManager;
  }
}

if (typeof window !== 'undefined') {
  window.lightboxManager = LightboxManager.getInstance();
}

export default LightboxManager;
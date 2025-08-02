---
title: 'Starlove World'
description: 'Personal website built with Astro featuring dynamic themes and smooth transitions'
category: 'Web Development'
status: 'in-progress'
technologies: ['Astro', 'TypeScript', 'CSS']
color: '#3b82f6'
github: 'https://github.com/starlove/starlove-world'
date: '2024-01-15'
---

# Starlove World

A modern personal website built with Astro, featuring:

## Features
- Dynamic theme switching (Cityscape, Forestscape, Starscape)
- Smooth page transitions
- Responsive design
- Blog functionality
- Project showcase

## Technologies Used
- **Astro** - Static site generator
- **TypeScript** - Type safety
- **CSS** - Custom styling with CSS variables

## Challenges & Solutions
Built this site to explore modern web technologies while creating a unique personal brand presence online.

### Code Example

Here's a snippet of the dynamic theme system:

```typescript
class ThemeManager {
  private currentTheme: string = 'starscape';
  
  switchTheme(theme: string) {
    document.body.className = `theme-${theme}`;
    this.currentTheme = theme;
  }
}
```

## Future Enhancements
- [ ] Add dark/light mode toggle
- [ ] Implement search functionality
- [ ] Add comment system
- [ ] Performance optimizations
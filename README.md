# Starlove's World ✨

_Last updated: 19 Aug 2025_

A personal website built with Astro featuring a cyberpunk-inspired design system, shared components, and multimedia content integration.

## 🎨 Features

- **Multi-theme Support**: Cityscape, Forestscape, and Starscape themes with horizon gradients
- **Custom Lightbox System**: Native lightbox with keyboard navigation, touch/swipe support, and gallery integration
- **Art Gallery Collections**: Masonry layouts with integrated text content and navigation
- **Shared Design System**: Centralized CSS and reusable components
- **YouTube Integration**: Embed videos that open in lightbox modals
- **Audio Player**: Built-in music player with playlists
- **Content Collections**: Blog posts, projects, and art galleries
- **Responsive Design**: Mobile-first approach with taskbar navigation
- **Animation System**: Smooth reveal animations and transitions

## 🚀 Project Structure 02 August 2025

```
src/
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── gallery/                # Gallery system components
│   │   ├── MasonryGallery.astro        # Image gallery with lightbox
│   │   ├── TextLightboxItem.astro      # Text content for galleries
│   │   ├── LightboxContent.astro       # Modal content with themes
│   │   └── ArtPageLayout.astro         # Gallery page layout
│   ├── YouTubeEmbed.astro      # (unused) YouTube video embedding
│   └── StarExplosion.astro     # Loading animation
├── content/
│   ├── posts/                  # Blog posts (markdown)
│   ├── projects/               # Project pages (markdown)
│   └── config.ts               # Content collections config
├── layouts/
│   └── Layout.astro            # Main layout with themes
├── pages/
│   ├── index.astro             # Homepage
│   ├── art.astro               # Art collections overview
│   ├── projects.astro          # Projects listing
│   ├── art/
│   │   ├── evershade-dream.astro       # Starscape gallery
│   │   └── folded-horizons.astro       # Horizon gallery with bonus section
│   ├── projects/[slug].astro   # Project detail pages
│   └── blog/[slug].astro       # Blog post pages
├── styles/
│   ├── global.css              # CSS variables, animations, themes, lightbox
│   ├── components.css          # Shared component styles
│   └── utilities.css           # Utility classes
└── utils/
    ├── assets.ts               # Asset path utilities
    └── LightboxManager.ts      # Custom lightbox system
```

## 🎯 Design System

### Shared CSS Architecture

- **`global.css`**: Design tokens, CSS variables, animations, theme definitions
- **`components.css`**: Reusable component classes (buttons, cards, navigation)
- **`utilities.css`**: Utility classes for layout, spacing, typography

### Reusable Components

All pages use shared Astro components to ensure consistency:

- **BackButton**: Unified navigation with SVG icons
- **PageHeader**: Flexible headers with gradient titles and subtitles
- **ContentReveal**: Animation wrapper for smooth page transitions
- **TagList**: Consistent tag display across content types
- **YouTubeEmbed**: (unused) Video embedding with lightbox integration

### Themes

Themes with unique color schemes:

- **Cityscape**: Blue/gold urban theme
- **Forestscape**: Green nature theme
- **Starscape**: Blue cosmic theme

### Gallery System

The custom gallery system includes:

- **LightboxManager**: Singleton TypeScript class managing gallery state and navigation
- **Theme Integration**: Horizon, Starscape, EarthVillage and Evershade gradient themes
- **Touch Support**: Intuitive drag/swipe navigation with visual feedback
- **Responsive UI**: Counter, captions, and navigation adapted for mobile
- **Multi-gallery**: Support for separate galleries on the same page
- **Content Integration**: Mix images and text content in unified navigation

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🛠️ Dependencies

- **Astro**: Static site generation and component framework
- **Howler.js**: Audio player functionality
- **TypeScript**: Type safety and better DX

### Removed Dependencies

- **fslightbox**: Replaced with custom lightbox system (generated by claude code in cursor) for better Astro SPA navigation compatibility

## 📱 Features by Page

### Homepage (`/`)

- Cycling profile pictures
- Audio player with playlist
- Post search functionality
- Lamp tooltip easter egg

### Art Gallery (`/art`)

- Collection overview with themed previews
- Individual gallery pages with custom lightbox system
- Masonry layout for images with integrated text content
- Keyboard navigation (arrow keys) and touch/swipe support
- Multi-gallery support (main + bonus sections)
- Gallery counters and image captions

### Projects (`/projects`)

- Categorized project listings
- Status badges (completed, in-progress, planning)
- Technology tag filtering

### Blog (`/blog/[slug]`)

- Markdown content with syntax highlighting
- YouTube video embedding
- Tag categorization

## 🎨 Customization

### Adding New Themes

1. Add CSS variables to `src/styles/global.css`
2. Update theme toggle in `src/layouts/Layout.astro`
3. Add background image to `/public/bg/`

### Creating New Components

1. Add to `src/components/ui/` for reusable UI elements
2. Import in pages that need them
3. Use shared CSS classes from the design system

### Content Types

- **Blog Posts**: Add to `src/content/posts/`
- **Projects**: Add to `src/content/projects/`
- **Art Galleries**: Create pages in `src/pages/art/`

## 🌟 Philosophy

This site embraces a **component-first, design-system-driven** approach:

- Shared components ensure consistency
- CSS architecture promotes maintainability
- Content collections provide structure
- Minimal duplication through reusable patterns

(I might've missed some, didn't start off the strongest)

_Built with love for creative expression and technical exploration. ☆♡_

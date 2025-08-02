# Starlove's World ✨

A personal website built with Astro featuring a cyberpunk-inspired design system, shared components, and multimedia content integration.

## 🎨 Features

- **Multi-theme Support**: Cityscape, Forestscape, and Starscape themes
- **Shared Design System**: Centralized CSS and reusable components
- **YouTube Integration**: Embed videos that open in lightbox modals
- **Audio Player**: Built-in music player with playlists
- **Content Collections**: Blog posts, projects, and art galleries
- **Responsive Design**: Mobile-first approach with taskbar navigation
- **Animation System**: Smooth reveal animations and transitions

## 🚀 Project Structure

```
src/
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── BackButton.astro    # Navigation back button
│   │   ├── PageHeader.astro    # Page titles with gradients
│   │   ├── ContentReveal.astro # Animation wrapper
│   │   ├── TagList.astro       # Tag display component
│   │   ├── SearchBar.astro     # Search input component
│   │   └── StatsBar.astro      # Statistics display
│   ├── YouTubeEmbed.astro      # YouTube video embedding
│   └── StarExplosion.astro     # Loading animation
├── content/
│   ├── posts/                  # Blog posts (markdown)
│   ├── projects/               # Project pages (markdown)
│   └── config.ts               # Content collections config
├── layouts/
│   └── Layout.astro            # Main layout with themes
├── pages/
│   ├── index.astro             # Homepage
│   ├── art.astro               # Art gallery
│   ├── projects.astro          # Projects listing
│   ├── art/[slug].astro        # Art detail pages
│   ├── projects/[slug].astro   # Project detail pages
│   └── blog/[slug].astro       # Blog post pages
├── styles/
│   ├── global.css              # CSS variables, animations, themes
│   ├── components.css          # Shared component styles
│   └── utilities.css           # Utility classes
└── utils/
    └── assets.ts               # Asset path utilities
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
- **YouTubeEmbed**: Video embedding with lightbox integration

### Themes
Three cyberpunk-inspired themes with unique color schemes:
- **Cityscape**: Blue/gold urban theme
- **Forestscape**: Green nature theme  
- **Starscape**: Blue cosmic theme

## 📺 YouTube Integration

Embed YouTube videos in any markdown file:

```markdown
<YouTubeEmbed 
  videoId="dQw4w9WgXcQw" 
  title="Video Title"
/>
```

Features:
- Auto-loading thumbnails from YouTube
- fslightbox modal integration
- Responsive design matching site themes
- Hover animations with play button

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally, before deploying    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`|
| `npm run astro -- --help` | Get help using the Astro CLI                    |

## 🛠️ Dependencies

- **Astro**: Static site generation and component framework
- **fslightbox**: Lightbox for images and videos
- **Howler.js**: Audio player functionality
- **TypeScript**: Type safety and better DX

## 📱 Features by Page

### Homepage (`/`)
- Cycling profile pictures
- Audio player with playlist
- Post search functionality
- "Stuff" tooltip easter egg

### Art Gallery (`/art`)
- Collection overview with previews
- Individual gallery pages with fslightbox
- Masonry layout for images

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

Built with love for creative expression and technical exploration. ☆♡
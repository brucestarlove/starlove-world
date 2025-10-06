Starlove's World – AI‐Generated README Overview
Starlove’s World is a private Astro‐powered personal site that blends cyberpunk aesthetics with a robust component library and multimedia integrations. The project uses Astro’s static site generation and TypeScript for type safety. It offers multiple themes, a custom lightbox system, an audio player, and collections for art, blog posts and projects. The design system centralizes styling in shared CSS files and reusable components, enabling consistent appearance across pages and simplifying maintenance. Content is organized into posts, projects and galleries, each served through dedicated pages and components. The README in the repository describes key features such as multi‐theme support, custom lightbox, art galleries, shared design system, YouTube integration, audio playlists, responsive design and smooth animations 1 .
Directory Structure
The repository adheres to Astro’s recommended project structure:
 •
• • •
• •
src/components/ – Houses reusable UI elements (buttons, headers, tag lists), gallery widgets ( MasonryGallery.astro , TextLightboxItem.astro , LightboxContent.astro ) and effects like StarExplosion.astro . These components implement the custom lightbox system, handle responsive masonry layouts and manage gallery state.
src/content/ – Markdown collections for blog posts and projects along with a config.ts that defines collection types and schema 2 .
src/layouts/ – Contains the main layout used on every page. It implements theme selection and includes header, footer and navigation elements 3 .
src/pages/ – Top‐level routes such as the homepage ( index.astro ), the art overview page
( art.astro ), the projects listing ( projects.astro ), dynamic project and blog pages, and dedicated gallery pages like evershade‐dream.astro and folded‐horizons.astro 4 . Astro uses the file system as a router, so adding a new file in this folder creates a new route.
src/styles/ – Defines the design system. global.css holds CSS variables, themes, animations and lightbox styling; components.css defines shared classes for cards, buttons and navigation; and utilities.css contains layout helpers 5 6 .
src/utils/ – Utility functions such as assets.ts for resolving asset paths and
LightboxManager.ts which implements a singleton lightbox controller. The lightbox manager registers galleries, opens and closes the modal, supports keyboard and touch navigation, and updates the content and captions dynamically 7 8 .
                    Key Features
• Multi‐Theme Support – Three distinct palettes (Cityscape, Forestscape and Starscape) are defined in
CSS variables. The main layout toggles themes via UI controls so visitors can switch moods 1 .
1

• Custom Lightbox System – A bespoke lightbox built in TypeScript replaces third‐party libraries. It supports keyboard (Escape/Arrow keys) and swipe navigation, displays counters and captions, and manages multiple galleries on the same page 9 . The lightbox manager encapsulates state and DOM manipulation so that pages remain mostly declarative.
• Art Galleries – Gallery pages use a masonry layout to present images interspersed with text. A “bonus” gallery section can be added easily by registering a second gallery. Navigation between galleries is unified under the custom lightbox 10 .
• Audio Player – A Howler.js‐based audio player sits on the homepage. It supports playlists and integrates with the site’s aesthetic. Visitors can listen while browsing other content 11 .
• Projects and Blog Sections – Projects are listed with status badges and filterable technology tags, while blog posts use markdown with syntax highlighting and optional embedded YouTube videos
12 .
• Responsive Design and Animations – The site is mobile‐first. A taskbar navigation on small screens
ensures accessibility. The ContentReveal component wraps page sections to animate them on scroll, creating a polished feel 1 .
Development Workflow
Install dependencies and start a development server at localhost:4321 using: npm install
npm run dev
Production builds live in the dist/ directory via npm run build , and npm run preview lets you
inspect the output locally 13 . Astro CLI commands are available through npm run astro . Dependencies
• Astro – static site generator and component framework. • Howler.js – audio playback.
• TypeScript – type checking and tooling support 14 .

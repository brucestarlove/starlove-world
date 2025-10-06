---
title: "Hellscape Digital + Hellscape Connect"
description: "Half public site for a music collective, half social music-sharing platform for all underground artists"
category: "Web Development"
status: "in-progress"
technologies:
  [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "PostgreSQL",
    "Drizzle",
    "AWS S3",
    "NextAuth",
    "Framer Motion",
    "ActivityPub",
  ]
color: "var(--accent-bg)"
github: "https://github.com/brucestarlove/brucestarlove/blob/main/README-Hellscape.md"
date: "2025-10-06"
---

# Hellscape Digital + Hellscape Connect

_Last updated: 6 Oct 2025_

feature tl;dr

- Mixed-source playlists, custom media players, custom profiles, messaging, e-commerce, collectibles economy and other gamification elements
- 2000s web aesthetics (think MySpace, Windows Vista, Futiger Aero)
- Built on similar technical foundation as Virtual Villages
- Planning integration with Fediverse via ActivityPub

This is a comprehensive rebuild of the original hellscapedigital.net static website into a modern, database‑backed Next.js 15 application. It combines a content‑rich public site with an ambitious social platform (“Hellscape Connect”) for underground artists and retro‑web fans. The result showcases depth in full‑stack engineering, thoughtful database design, and creative UI/UX execution.

## Architecture & Tech Stack

The application is scaffolded from an opinionated Next.js starter and follows best practices captured in the project’s coding guide. Key technologies include:

- **Framework –** Next.js 15 using the App Router pattern for file‑based routing and server components
- **Database –** PostgreSQL queried through Drizzle ORM; the schema defines dozens of tables for users, artists, content, messaging, events, purchases, playlists and collectibles
- **Authentication –** NextAuth with a custom Drizzle adapter. The `auth.ts` module configures GitHub and credentials providers and uses JWT sessions; it integrates with the database and Stripe to update user records on sign‑up. Session callbacks enrich JWTs with user metadata such as roles, artist IDs and Stripe customer IDs
- **Payments –** Stripe is wired throughout the backend. The coding guide explains how to create products and prices, use checkout sessions, and handle webhooks to record purchases
- **UI –** Shadcn/UI components styled with Tailwind CSS; custom rainbow gradients and dark themes are defined in `rainbow-styles.ts`. Animations use Framer Motion and client state is managed with Zustand
- **Validation & Types –** Zod for schema validation and TypeScript everywhere

## Database Design

At the core of Hellscape Digital is a rich data model implemented in **src/lib/schema.ts**. Highlights include:

- **Users & Artists –** The `users` table tracks login credentials, roles, bios, Stripe customer IDs, and flags for profile completion. The `artists` table links a user to their artist persona, storing slugs, display names, bios, avatars, banner images and social links
- **Content –** The `content` table supports music, artwork and miscellaneous media with slugs, titles, descriptions, images, tag arrays, publication dates and series metadata. A series mechanism allows grouping related pieces and specifying order.
- **Messaging –** Tables for `message_threads`, `thread_participants`, `messages` and `message_reactions` implement direct and group messaging. Indexes optimise queries for unread messages and thread lookups
- **Events & Tickets –** The `events` and `eventRegistrations` tables model in‑person or online gatherings, with support for multiple ticket tiers, capacities, Stripe product IDs and registration tracking
- **Commerce & Memberships –** Products, memberships, purchases and userSubscriptions enable selling courses, memberships, donations and events with Stripe integration
- **Collectibles Game –** A novel “energy drink” system is implemented via `collectibleItems` and `userInventory`. Players collect and trade energy drink items with cooldowns and rarities, fuelling social actions like post boosts
- **Media & Playlists –** Dedicated tables for `anjuSongs`, `anjuPlaylists` and `anjuPlaylistSongs` support thousands of tracks from multiple sources (YouTube, SoundCloud, S3) and allow users to create, star and reorder playlists

## Authentication & Middleware

Hellscape Digital implements a robust auth flow. auth.ts configures NextAuth with GitHub and credentials providers, using bcrypt to validate passwords against the database. JWT callbacks hydrate session objects with full user data (including artist slugs and roles). The app uses Next.js middleware to enforce access control:

- **Route protection –** The middleware checks for a valid JWT token and whether the user exists in the database; unauthenticated users attempting to access /app routes are redirected to the login page
- **Profile completion –** Users with incomplete profiles are redirected to /create-profile, while deactivated users are routed away from protected pages

## Media Player & Mixed‑Source Playlists

A standout feature is the site‑wide music player. The `MusicPlayer` component uses a context to expose track state (playlist, current track, play/pause, volume, seek, skip) and renders both a mini and an expanded view:

- The mini player appears as a fixed widget and shows album art, title, artist and progress bar. Hover interactions change the border gradient and background using the rainbow styles. Play/pause and expand buttons allow quick control.
- The expanded player includes a playlist selector, detailed progress controls, volume slider and a scrollable list of tracks with durations
- The player supports playlists built from mixed media sources (YouTube videos, SoundCloud tracks and S3 uploads) thanks to the `anjuSongs` schema and associated client logic.

## Hellscape Connect – Social Platform

Built on top of the core site, Hellscape Connect is a social platform inspired by MySpace and Newgrounds aesthetics. It offers:

- **Customisable Profiles** with artist badges, retro UI elements and the Dark Futiger style (a blend of skeumorphic surfaces and Futiger‑aero cues).
- **Messaging** including direct and group threads, with emoji reactions and an upgrade path toward voice notes and group calls
- **Collectibles Game** that grants energy drinks for posting and interacting; users can trade or spend these to boost their posts, creating a playful economy.
- **Events & Tickets** with Stripe checkout, ticket tiers and attendee management
- **Subscriptions & Memberships** for premium content and membership tiers, powered by Stripe
- **Invite & Referral Codes** to control sign‑ups and reward community growth
- **Storefront** for selling merch and digital products (leveraging the Products and Purchases tables).
- **Mixed‑Media Playlists –** a unique feature enabling users to curate playlists across YouTube, SoundCloud and in‑house uploads, then publish or export them from a dedicated playlists page.

## CMS & Content Management

The legacy Hellscape Digital content—thousands of songs, remixes, and artworks—has been moved into the database. Server actions (in src/actions) use repository/factory patterns to encapsulate queries and maintain type safety. Administrators manage content via CRUD interfaces, and seeding scripts populate artists and content from the old static site.

## Design & UX

Two distinct visual identities coexist:

- **Main Site –** dark cosmic aesthetic with rainbow gradients; responsive layouts built with Shadcn components and Tailwind; accessible forms and cards.
- **Hellscape Connect –** a Dark Futiger style blending skeuomorphic interfaces and 2000s “aero” graphics. Highly customisable profile pages, hover animations, and interactive collectibles create a playful retro vibe.

## Impact & Uniqueness

Hellscape Digital Alpha demonstrates the ability to migrate a static, content‑heavy site to a modern full‑stack platform while introducing innovative social features. The engineering challenge involved designing a relational schema that supports music streaming, social interactions, commerce and gamification; integrating Stripe for payments and memberships; building a responsive UI with a persistent music player; combining mixed media sources into unified playlists; and integration with the Fediverse via ActivityPub. The result is a distinctive portfolio piece that showcases proficiency in Next.js, TypeScript, SQL design, authentication, e‑commerce, real‑time interactivity, and creative UI/UX design.

---
title: "Earth Village → Virtual Villages"
description: "Private community platforms for intentional living networks."
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
    "PWA",
    "Three.js",
  ]
color: "var(--accent-bg)"
github: "https://github.com/brucestarlove/brucestarlove/blob/main/README-EarthVillageCIC.md"
date: "2025-10-06"
---

# Earth Village → Virtual Villages

_Last updated: 6 Oct 2025_

A community-first web app designed for the conscious, regenerative, and well-being-centered community behind Earth Village C.I.C. in the UK.

This PWA (Progressive Web App) empowers members to stay connected, share updates, coordinate events, and deepen their collective journey — all in one beautifully themed, mobile-native experience.

While this instance is built specifically for Earth Village, it is part of a broader vision: the Starscape "Virtual Villages" platform — a growing suite of tools and themes for intentional communities worldwide.

## 🏆 Portfolio Showcase

**Earth Village CIC** represents a comprehensive, production-ready community platform showcasing modern full-stack development practices and architectural excellence. Built with cutting-edge technologies and engineering best practices, this project demonstrates sophisticated problem-solving across multiple domains.

### 🔐 **Enterprise-Grade Authentication System**

- **Multi-provider authentication** with NextAuth v5 (GitHub OAuth + custom credentials)
- **Secure password hashing** using bcryptjs with proper salt rounds
- **JWT session management** with database-backed user validation
- **Role-based access control** with custom village roles and permission systems
- **Automated Stripe customer creation** on user registration
- **Session invalidation** and security checks across all auth flows

### 🛠️ **Sophisticated Database Architecture**

- **Factory Pattern Implementation** for database abstraction and testability
- **Repository Pattern** with type-safe interfaces for all data operations
- **Drizzle ORM** with PostgreSQL for production-grade data management
- **Database migrations** and seeding scripts for reliable deployment
- **Optimized queries** with proper indexing and relationship management
- **Type-safe schema definitions** with Zod validation throughout

### 🎨 **Advanced Component Architecture**

- **Highly reusable UI component library** built on Radix UI primitives
- **Compound component patterns** for complex UI interactions
- **Custom hooks** for business logic separation and reusability
- **Accessibility-first design** with ARIA compliance and keyboard navigation
- **Responsive design system** with mobile-first approach
- **Dark/light theme support** with system preference detection

### 🎵 **Voice Notes Feature**

- **Real-time audio recording** with live audio level visualization
- **WebM audio format** support with automatic browser compatibility
- **Secure S3 integration** with presigned URLs for direct uploads
- **30-day expiration system** with automated cleanup processes
- **Progress tracking** and playback controls with seek functionality
- **File size validation** and error handling with user feedback
- **Database tracking** for message threading and user association

### 💳 **Production Stripe Integration**

- **Complete payment processing** with webhook validation
- **Event ticket sales** with dynamic pricing and capacity management
- **Subscription management** for membership tiers
- **Secure webhook handling** with proper signature verification
- **Automated customer lifecycle** management

### 🚀 **Modern Development Stack**

- **Next.js 15** with App Router and React Server Components
- **TypeScript** throughout with strict type checking
- **Tailwind CSS v4** with custom design system
- **AWS S3** for secure file storage and CDN delivery
- **Railway/Vercel** deployment with CI/CD pipelines
- **Automated testing** with Jest and Playwright E2E
- **Code quality** enforcement with ESLint, Prettier, and Husky

### 📱 **Progressive Web App Features**

- **Mobile-native experience** with responsive design
- **Offline capability** planning and service worker integration
- **Push notification** infrastructure ready
- **Bottom navigation** optimized for mobile interaction

### 🔮 **Roadmap & Vision**

**Upcoming Features:**

- **File attachments** with drag-and-drop upload system
- **Comprehensive user profiles** with social interactions and activity feeds
- **Live voice calls** with WebRTC peer-to-peer communication
- **Advanced caching** and database optimization strategies
- **Real-time messaging** with WebSocket implementation
- **Course platform** with creation, participation, and management tools
- **3D Avatar Interface** - An immersive virtual village where users navigate their custom avatars through themed buildings (School Building → Courses, Community Center → Social Features, etc.), creating a gamified and engaging user experience

This project exemplifies modern web development excellence, combining technical sophistication with user-centered design to create a platform that scales with community needs while maintaining code quality and developer experience.

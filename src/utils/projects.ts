export interface ProjectFrontmatter {
  title: string;
  description: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planning';
  technologies: string[];
  color: string;
  link?: string;
  github?: string;
  date: string;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

// Sample projects data - in a real app this would come from files or a CMS
const sampleProjects: Project[] = [
  {
    slug: 'starlove-world',
    frontmatter: {
      title: 'Starlove World',
      description: 'Personal website built with Astro featuring dynamic themes and smooth transitions',
      category: 'Web Development',
      status: 'in-progress',
      technologies: ['Astro', 'TypeScript', 'CSS'],
      color: '#3b82f6',
      github: 'https://github.com/starlove/starlove-world',
      date: '2024-01-15'
    },
    content: `# Starlove World

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
Built this site to explore modern web technologies while creating a unique personal brand presence online.`
  },
  {
    slug: 'ai-content-analyzer',
    frontmatter: {
      title: 'AI Content Analyzer',
      description: 'Machine learning tool for analyzing and categorizing social media content',
      category: 'AI & Machine Learning',
      status: 'completed',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      color: '#22c55e',
      link: 'https://ai-analyzer.example.com',
      date: '2023-11-20'
    },
    content: `# AI Content Analyzer

A sophisticated machine learning application that analyzes and categorizes social media content.

## Overview
This project uses natural language processing to automatically categorize and analyze social media posts, helping businesses understand their audience engagement.

## Key Features
- Real-time content analysis
- Sentiment analysis
- Category classification
- Trend identification
- API integration

## Technical Implementation
Built using TensorFlow for the ML models, with a Flask backend and React frontend.`
  },
  {
    slug: 'blockchain-voting',
    frontmatter: {
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform ensuring transparency and security',
      category: 'Blockchain',
      status: 'completed',
      technologies: ['Solidity', 'Web3.js', 'React'],
      color: '#f59e0b',
      github: 'https://github.com/starlove/blockchain-voting',
      date: '2023-09-10'
    },
    content: `# Blockchain Voting System

A secure, transparent voting system built on blockchain technology.

## Problem Statement
Traditional voting systems lack transparency and are vulnerable to manipulation. This project addresses these issues using blockchain technology.

## Solution
- Smart contracts written in Solidity
- Immutable vote records
- Real-time result tracking
- Voter privacy protection

## Impact
Successfully deployed for local community elections with 100% uptime and zero security incidents.`
  },
  {
    slug: 'nonprofit-crm',
    frontmatter: {
      title: 'Nonprofit CRM Platform',
      description: 'Custom CRM solution for small nonprofit organizations',
      category: 'Web Development',
      status: 'completed',
      technologies: ['Node.js', 'MongoDB', 'React'],
      color: '#8b5cf6',
      date: '2023-07-15'
    },
    content: `# Nonprofit CRM Platform

A comprehensive CRM solution designed specifically for small nonprofit organizations.

## Background
Small nonprofits often struggle with expensive CRM solutions that don't fit their unique needs.

## Features
- Donor management
- Volunteer coordination
- Event planning tools
- Grant tracking
- Financial reporting

## Impact
Currently used by 5+ local nonprofits, helping them manage over 1000 donors and volunteers.`
  },
  {
    slug: 'meditation-app',
    frontmatter: {
      title: 'Mindful Moments',
      description: 'Mobile meditation app with personalized sessions and progress tracking',
      category: 'Mobile Development',
      status: 'planning',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      color: '#06b6d4',
      date: '2024-02-01'
    },
    content: `# Mindful Moments

A mobile meditation app focused on accessibility and personalization.

## Vision
Creating a meditation app that adapts to users' schedules and stress levels for maximum effectiveness.

## Planned Features
- Personalized meditation recommendations
- Progress tracking and insights
- Offline mode support
- Community features
- Integration with health apps

## Current Status
In planning phase - conducting user research and defining MVP features.`
  }
];

export function getAllProjects(): Project[] {
  return sampleProjects.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

export function getProjectsByCategory(): Record<string, Project[]> {
  const projects = getAllProjects();
  const categories: Record<string, Project[]> = {};
  
  projects.forEach(project => {
    const category = project.frontmatter.category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(project);
  });
  
  return categories;
}

export function getProjectBySlug(slug: string): Project | null {
  return sampleProjects.find(project => project.slug === slug) || null;
}
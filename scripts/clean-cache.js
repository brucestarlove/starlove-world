#!/usr/bin/env node
import { rmSync } from 'fs';
import { existsSync } from 'fs';

const cacheDirs = [
  '.astro',
  'node_modules/.astro',
  'node_modules/.cache'
];

console.log('🧹 Cleaning Astro cache...');

cacheDirs.forEach(dir => {
  if (existsSync(dir)) {
    try {
      rmSync(dir, { recursive: true, force: true });
      console.log(`✅ Removed ${dir}`);
    } catch (error) {
      console.log(`❌ Failed to remove ${dir}: ${error.message}`);
    }
  } else {
    console.log(`⏭️  ${dir} not found, skipping`);
  }
});

console.log('✨ Cache cleaned!');
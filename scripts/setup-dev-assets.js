#!/usr/bin/env node
import { existsSync, symlinkSync, rmSync } from 'fs';
import { join } from 'path';

const publicDir = 'public';
const symlinkPath = join(publicDir, 'public');

console.log('🔗 Setting up development asset symlinks...');

try {
  // Remove existing symlink if it exists
  if (existsSync(symlinkPath)) {
    rmSync(symlinkPath, { force: true });
    console.log('✅ Removed existing symlink');
  }

  // Create symlink from public/public -> public (for /public/... URLs in dev)
  symlinkSync('.', symlinkPath, 'dir');
  console.log('✅ Created symlink: public/public -> public');
  console.log('💡 Now /public/... URLs will work in development');
  
} catch (error) {
  console.error('❌ Failed to create symlink:', error.message);
  console.log('💡 You may need to run with admin privileges or use WSL');
}
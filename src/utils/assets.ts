/**
 * Get the correct asset path for the current environment
 * In development: prepends /public
 * In production: uses path as-is (Vercel serves from root)
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, add /public prefix
  if (import.meta.env.DEV) {
    return `/public/${cleanPath}`;
  }
  
  // In production, use path as-is
  return `/${cleanPath}`;
}

/**
 * Get multiple asset paths
 */
export function getAssetPaths(paths: string[]): string[] {
  return paths.map(getAssetPath);
}
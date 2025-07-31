import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  color: string;
  excerpt: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

const postsDirectory = join(process.cwd(), 'src/content/posts');

export function getAllPosts(): Post[] {
  try {
    const filenames = readdirSync(postsDirectory);
    const posts = filenames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fullPath = join(postsDirectory, name);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        const slug = name.replace(/\.md$/, '');
        
        return {
          slug,
          frontmatter: data as PostFrontmatter,
          content,
        };
      })
      .sort((a, b) => {
        // Sort by date, newest first
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
      });

    return posts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}
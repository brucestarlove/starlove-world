// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkEmoji from 'remark-emoji';
import remarkBreaks from 'remark-breaks';
import remarkCodeTitle from 'remark-code-title';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkDirective,
      remarkEmoji,
      remarkBreaks,
      remarkCodeTitle,
      [remarkToc, { 
        tight: true,
        ordered: false,
        prefix: '',
        heading: 'table of contents|contents|toc'
      }]
    ],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});

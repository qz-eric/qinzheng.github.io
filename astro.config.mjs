import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeImageGroups from './src/utils/rehypeImageGroups.mjs';

const githubPagesBase = '/qinzheng.github.io';

export default defineConfig({
  site: 'https://qz-eric.github.io',
  base: githubPagesBase,
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [[rehypeImageGroups, { base: githubPagesBase }]],
    shikiConfig: {
      theme: 'github-light'
    }
  }
});

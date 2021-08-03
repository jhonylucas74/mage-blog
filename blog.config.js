const blogConfig = {
  /**
   * Path to data on filesystem relative to site dir.
   */
  path: 'blog',
  /**
   * Useful if you commit localized files to git.
   * When Markdown files are localized, the edit url will target the localized file,
   * instead of the original unlocalized file.
   * Note: this option is ignored when editUrl is a function
   */
  editLocalizedFiles: false,
  /**
   * Blog page title for better SEO
   */
  blogTitle: 'Blog title',
  /**
   * Blog page meta description for better SEO
   */
  blogDescription: 'Blog',
  /**
   * Number of blog post elements to show in the blog sidebar
   * 'ALL' to show all blog posts
   * 0 to disable
   */
  blogSidebarCount: 5,
  /**
   * Title of the blog sidebar
   */
  blogSidebarTitle: 'All our posts',
  /**
   * URL route for the blog section of your site.
   * *DO NOT* include a trailing slash.
   */
  routeBasePath: '/',
  include: ['*.md', '*.mdx'],
  /**
   * No route will be created for matching files
   */
  exclude: [
    '**/_*.{js,jsx,ts,tsx,md,mdx}',
    '**/_*/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/__tests__/**',
  ],
  postsPerPage: 10,
  /**
   * Theme components used by the blog pages.
   */
  blogListComponent: '@theme/BlogListPage',
  blogPostComponent: '@theme/BlogPostPage',
  blogTagsListComponent: '@theme/BlogTagsListPage',
  blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
  /**
   * Remark and Rehype plugins passed to MDX.
   */
  remarkPlugins: [
    /* require('remark-math') */
  ],
  rehypePlugins: [],
  /**
   * Custom Remark and Rehype plugins passed to MDX before
   * the default Docusaurus Remark and Rehype plugins.
   */
  beforeDefaultRemarkPlugins: [],
  beforeDefaultRehypePlugins: [],
  /**
   * Truncate marker, can be a regex or string.
   */
  truncateMarker: /<!--\s*(truncate)\s*-->/,
  /**
   * Show estimated reading time for the blog post.
   */
  showReadingTime: true,
  /**
   * Blog feed.
   * If feedOptions is undefined, no rss feed will be generated.
   */
  feedOptions: {
    type: 'all', // required. 'rss' | 'feed' | 'all'
    title: 'Mage Blog', // default to siteConfig.title
    description: 'This is a blog.', // default to  `${siteConfig.title} Blog`
    copyright: 'Mage',
    language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  },
};

module.exports = blogConfig
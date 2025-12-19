import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'en',
  title: 'tetris setups',
  description: 'for fun and lolz',

  head: [
    ['link', { rel: 'icon', href: '/tetrisicon.ico' }],
    // Google tag (gtag.js)
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-377ZK0WYV4' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-377ZK0WYV4');
    `]
  ],

  base: '/',

  themeConfig: {
    repo: 'advikmrai/dpc',
    nav: [
      { text: 'DPC', link: '/'},
      { text: 'PCF', link: '/pcf.html'},
      { text: '6L', link: '/6L.html'},
      { text: '8L', link: '/8L.html'},
      { text: '14L', link: '/14L.html'},
    ],
    outline: [2, 3],
    outlineTitle: 'Six seven:',
  },

  sitemap: {
    hostname: 'https://www.tet.run.place'
  },

  lastUpdated: true,
})

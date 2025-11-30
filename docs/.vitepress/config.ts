import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'en',
  title: 'DPC',
  description: 'my dpc setups',

  base: '/dpc/',

  themeConfig: {
    repo: 'advikmrai/dpc',
    nav: [
      { text: 'DPC', link: '/'},
      { text: 'PCF', link: '/pcf.html'},
      { text: '8L', link: '/8L.html'},
      { text: '14L', link: '/14L.html'}
    ],
    outline: [2, 3],
    outlineTitle: 'Six seven:',
  },
})

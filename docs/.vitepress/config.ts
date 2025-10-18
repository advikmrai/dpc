import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'en',
  title: 'DPC',
  description: 'Practical DPC solutions',
  themeConfig: {
    repo: 'Enter-tainer/dpc',
    nav: [
      { text: 'DPC', link: '/'},
      { text: 'PCF', link: '/pcf.html'},
    ],
  },
})

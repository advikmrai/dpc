import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'en',
  title: 'DPC',
  description: 'my dpc setups',
  themeConfig: {
    repo: 'advikmrai/dpc',
    nav: [
      { text: 'DPC', link: '/'},
      { text: 'PCF', link: '/pcf.html'},
    ],
    outline: [2, 3],
    outlineTitle: 'Six seven:',
  },
})

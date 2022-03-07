import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
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

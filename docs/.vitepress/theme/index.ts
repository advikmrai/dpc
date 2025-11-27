import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.mixin({
      mounted() {
        const toggleDarkMode = () => {
          const isDark = document.documentElement.classList.toggle('dark');
          localStorage.setItem('vitepress-theme-appearance', isDark ? 'dark' : 'light');
        };

        document.addEventListener('keydown', (e) => {
          if (e.key === 'd' && e.target.tagName !== 'INPUT') {
            toggleDarkMode();
          }
        });
      }
    })
  }
}

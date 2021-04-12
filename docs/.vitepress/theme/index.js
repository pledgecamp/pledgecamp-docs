import Theme from 'vitepress/theme';
import './styles/vars.css';
import './styles/layout.css';
import Layout from './Layout.vue';
import Mermaid from './Mermaid.vue';

export default {
  ...Theme,
  Layout,
  enhanceApp({ app }) {
    app.component('Mermaid', Mermaid)
  },
};

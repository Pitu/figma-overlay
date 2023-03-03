import { createApp } from 'vue';

import App from './App.vue';
import FigmaOverlay from './components/FigmaOverlay.ce.vue';

const app = createApp(App).component('FigmaOverlay', FigmaOverlay).mount('#app');

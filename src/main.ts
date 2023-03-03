import { createApp } from 'vue';

import App from './App.vue';
import FigmaOverlay from './main.ce';

// @ts-ignore
const app = createApp(App).use(FigmaOverlay).mount('#app');

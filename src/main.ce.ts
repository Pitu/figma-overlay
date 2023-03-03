import type { App } from 'vue';

import FigmaOverlay from './components/FigmaOverlay.ce.vue';

export default {
	install(Vue: App) {
		Vue.component('FigmaOverlay', FigmaOverlay);
	}
};

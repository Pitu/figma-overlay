import type { App } from 'vue';

import FigmaOverlay from './components/FigmaOverlay.ce.vue';

export default {
	install(app: App) {
		app.component('FigmaOverlay', FigmaOverlay);
	}
};

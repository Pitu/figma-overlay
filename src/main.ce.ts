import { defineCustomElement } from 'vue';
import FigmaOverlayComponent from './components/FigmaOverlay.ce.vue';

const FigmaOverlay = defineCustomElement(FigmaOverlayComponent);

customElements.define('figma-overlay', FigmaOverlay);

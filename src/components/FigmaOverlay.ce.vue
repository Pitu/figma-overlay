<template>
	<div id="container" :class="{ alwaysOnTop, isShowingOverlay }">
		<button v-if="!isShowingOverlay" type="button" @click="loadSvgComponent">
			{{ buttonText }}
		</button>
		<div v-else>
			<div id="controls">
				<input v-model="overlayOpacity" type="range" list="tickmarks" min="0" max="100" step="10" />
				<datalist id="tickmarks">
					<option value="0"></option>
					<option value="10"></option>
					<option value="20"></option>
					<option value="30"></option>
					<option value="40"></option>
					<option value="50"></option>
					<option value="60"></option>
					<option value="70"></option>
					<option value="80"></option>
					<option value="90"></option>
					<option value="100"></option>
				</datalist>

				<label>
					<input v-model="alwaysOnTop" type="checkbox" name="alwaysontop" checked />
					Always on top
				</label>

				<label>
					<input v-model="ignoreClicks" type="checkbox" name="ignoreclicks" checked />
					Ignore clicks
				</label>
			</div>

			<p>
				← ↑ → ↓ to move the overlay
				<br />
				escape to remove the overlay
			</p>

			<button class="mt-2" type="button" @click="removeSvgComponent">Remove overlay</button>
		</div>
	</div>
	<div
		id="figmaOverlay"
		ref="figmaOverlay"
		:class="[ignoreClicks ? 'pointer-events-none' : 'pointer-events-auto']"
		:style="{
			opacity: overlayOpacity / 100
		}"
	/>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const buttonText = ref('Load figma component from clipboard');
const figmaOverlay = ref<HTMLImageElement | null>(null);
const isShowingOverlay = ref(false);
const overlayOpacity = ref(50);
const ignoreClicks = ref(false);
const alwaysOnTop = ref(true);

const createSvgComponent = (svg: string) => {
	if (!figmaOverlay.value) return;
	figmaOverlay.value.innerHTML = svg;
	isShowingOverlay.value = true;
	document.addEventListener('keydown', onKeyDown);
};

const removeSvgComponent = () => {
	if (!figmaOverlay.value) return;
	figmaOverlay.value.innerHTML = '';
	isShowingOverlay.value = false;
	document.removeEventListener('keydown', onKeyDown);
};

const loadSvgComponent = async () => {
	try {
		const svg = await navigator.clipboard.readText();
		if (svg.startsWith('<svg')) {
			createSvgComponent(svg);
		} else {
			buttonText.value = 'No SVG found in clipboard!';
			window.setTimeout(() => {
				buttonText.value = 'Load figma component from clipboard';
			}, 2000);
		}
	} catch (error) {
		console.error(error);
	}
};

const setUpDiv = () => {
	// Allow the user to drag the overlay around
	figmaOverlay.value?.addEventListener('mousedown', e => {
		if (!figmaOverlay.value) return;

		const el = figmaOverlay.value;
		const rect = el.getBoundingClientRect();
		const offsetX = e.clientX - rect.left;
		const offsetY = e.clientY - rect.top;

		const mouseMove = (e: MouseEvent) => {
			el.style.top = `${e.clientY - offsetY}px`;
			el.style.left = `${e.clientX - offsetX}px`;
		};

		const mouseUp = () => {
			document.removeEventListener('mousemove', mouseMove);
			document.removeEventListener('mouseup', mouseUp);
		};

		document.addEventListener('mousemove', mouseMove);
		document.addEventListener('mouseup', mouseUp);
	});
};

const onKeyDown = (e: KeyboardEvent) => {
	if (!figmaOverlay.value) return;

	e.preventDefault();
	e.stopPropagation();

	switch (e.key) {
		case 'ArrowUp':
			figmaOverlay.value.style.top = `${figmaOverlay.value.offsetTop - 1}px`;
			break;
		case 'ArrowDown':
			figmaOverlay.value.style.top = `${figmaOverlay.value.offsetTop + 1}px`;
			break;
		case 'ArrowLeft':
			figmaOverlay.value.style.left = `${figmaOverlay.value.offsetLeft - 1}px`;
			break;
		case 'ArrowRight':
			figmaOverlay.value.style.left = `${figmaOverlay.value.offsetLeft + 1}px`;
			break;
		case 'Escape':
			removeSvgComponent();
			break;
	}
};

onMounted(() => setUpDiv());
</script>

<style>
div,
button,
input,
p {
	margin: 0;
	padding: 0;
}

#container {
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	padding: 16px;
}

#container.isShowingOverlay {
	border: 1px solid #e5e5e5;
	border-radius: 8px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;
}

#container.alwaysOnTop {
	z-index: 10000;
}

button {
	background-color: rgb(39 49 59);
	color: rgb(222 229 236);
	font-size: 0.75rem;
	line-height: 1rem;
	padding: 0 0.5rem;
	border-radius: 0.25rem;
	height: 28px;
}

#controls {
	width: 100%;
	margin-bottom: 0.5rem;
}

input[type='range'] {
	width: 100%;
}

p {
	font-size: 0.75rem;
	line-height: 1rem;
}

label {
	padding-left: 4px;
}

button,
p,
input,
label {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#figmaOverlay {
	position: absolute;
	z-index: 9999;
	top: 0px;
	left: 0px;
	border: 1px dashed #115cac;
	border-radius: 8px;
	cursor: move;
}

.mt-2 {
	margin-top: 0.5rem;
}

.pointer-events-none {
	pointer-events: none;
}
.pointer-events-auto {
	pointer-events: auto;
}
</style>

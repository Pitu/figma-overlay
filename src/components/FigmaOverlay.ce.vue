<template>
	<div id="container">
		<button v-if="!isShowingOverlay" type="button" @click="loadSvgComponent">
			{{ buttonText }}
		</button>
		<div v-else>
			<button type="button" @click="removeSvgComponent">Remove overlay</button>

			<div id="info">
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
			</div>

			<p>
				← ↑ → ↓ to move the overlay
				<br />
				escape to remove the overlay
			</p>
		</div>
	</div>
	<div
		id="figmaOverlay"
		ref="figmaOverlay"
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
	border: 1px solid red;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
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

#info {
	width: 100%;
	margin-top: 0.5rem;
}

input[type='range'] {
	width: 100%;
}

p {
	font-size: 0.75rem;
	line-height: 1rem;
}

button,
p {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#figmaOverlay {
	position: absolute;
	z-index: 9999;
	top: 0px;
	left: 0px;
}
</style>

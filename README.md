# Figma overlay

In an effort to make components as close as possible as the provided design I built this small utility that let's you copy a Figma component and paste it on the page to drag it around to compare the design to the implementation.

The way it works is it grabs the SVG component from the clipboard and creates an object that you can drag around and use the arrow keys to move with pixel accuracy to place the overlay on top of the component you want to compare it to.

## How to use
Figma overlay is a Web Component which means you can use it with any framework you like by importing it properly. This small guide will only cover how to add it to the browser and to Vite based projects, specifically with Vue. If you get it up and running with other setup and want to contribute, please make a PR to ammend the instructions.

### With Vite

```bash
npm i figma-overlay
```

Then import the component
```ts
import FigmaOverlay from 'figma-overlay';
```
Add it to your html as follows.
```html
<figma-overlay></figma-overlay>
```
And make sure to add `figma-overlay` as a Custom Element in `vite.config.ts`
```ts
...
plugins: [
	vue({
		template: {
			compilerOptions: {
				isCustomElement: tag => tag.includes('figma-overlay')
			}
		}
	})
],
```

### In the browser
Add the script at the end of your `body` tag
```html
<script src="https://unpkg.com/figma-overlay@latest"></script>
```
And then ideally place the component right after the body
```html
...
<body>
	<figma-overlay></figma-overlay>
	...
```
